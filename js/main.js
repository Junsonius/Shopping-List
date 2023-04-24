function produto(id, item, qnt, unit) {
    this.id = id;
    this.item = item;
    this.qnt = qnt;
    this.unit = unit
    this.comprado = false 
}

let ul
let uniqueId = 0

function generateUniqueID() {
    return uniqueId += 1
}

function criarNovoItem (novoItem){
    ul = document.createElement('ul');

    let idItem = novoItem.id
    let nomeItem = novoItem.item
    let qntItem = novoItem.qnt
    let unitItem = novoItem.unit


    ul.setAttribute('class', 'item item-lista-fundo center');
    ul.innerHTML = `
    <div class="left-list-content">
        <li><input id="check-${nomeItem}" type="checkbox" name="comprado"></li>
        <li id="${nomeItem}">${nomeItem}</li>
    </div>
    <div class="right-list-content">
        <li id="qnt-${idItem}" class="qnt">${qntItem}</li>
        <li id="unit-type-${idItem}" class="unit-type">${unitItem}</li>
        <li><button id="modify-${idItem}" class="modify-item-btn modify-btn">Editar</button></li>
        <li><button id="delete-${idItem}" class="delete-item-btn modify-btn"></button></li>
    </div>
</ul> 
`;

document.getElementById("lista-principal").appendChild(ul)

}

function modifyItem() {
    let modify = this.parentNode.previousElementSibling.previousElementSibling;
    let updatedQnt = modify.id

    //if para idenficar se botão deva entrar para modificar ou confirmar modificações
    if(this.id.includes('modify') === true) { 

        //escolher e renderizar menu de edição de quantidade
        document.getElementById(updatedQnt).innerHTML =`
        <div class="qnt-unit-container modify">
        
        <input type="number" id="modify-${modify.id}" class="modify-items" name="add-qnt" value="${modify.innerHTML}">
        
        `
        let modifytype = this.parentNode.previousElementSibling;
        let updatedtype = modifytype.id        

        //escolher tipo de unidade a ser renderizado
        switch (document.getElementById(updatedtype).innerHTML){

            case "kg":
            document.getElementById(updatedtype).innerHTML =`
            <label class="unitlabel" for="option"></label>
            <select class="modify-items" id="modify-type-${modify.id}">
            <option value="un.">un.</option>
            <option selected value="kg">kg</option>     
            <option value="g">g</option>     
            <option value="l">l</option>        
            <option value="ml">ml</option>
            </select>
        </div>`
        break;

        case "g":
            document.getElementById(updatedtype).innerHTML =`
            <label class="unitlabel" for="option"></label>
            <select class="modify-items" id="modify-type-${modify.id}">
            <option value="un.">un.</option>
            <option  value="kg">kg</option>     
            <option selected value="g">g</option>     
            <option value="l">l</option>        
            <option value="ml">ml</option>
            </select>
        </div>`
        break;
        
        case "l":
            document.getElementById(updatedtype).innerHTML =`
            <label class="unitlabel" for="option"></label>
            <select class="modify-items" id="modify-type-${modify.id}">
            <option value="un.">un.</option>
            <option  value="kg">kg</option>     
            <option  value="g">g</option>     
            <option selected value="l">l</option>        
            <option value="ml">ml</option>
            </select>
        </div>` 
        break;

        case "ml":
            document.getElementById(updatedtype).innerHTML =`
            <label class="unitlabel" for="option"></label>
            <select class="modify-items" id="modify-type-${modify.id}">
            <option value="un.">un.</option>
            <option  value="kg">kg</option>     
            <option  value="g">g</option>     
            <option  value="l">l</option>        
            <option  selected value="ml">ml</option>
            </select>
        </div>`
        break;

        //default = un.
        default:
            document.getElementById(updatedtype).innerHTML =`
            <label class="unitlabel" for="option"></label>
            <select class="modify-items" id="modify-type-${modify.id}">
            <option value="un.">un.</option>
            <option  value="kg">kg</option>     
            <option  value="g">g</option>     
            <option  value="l">l</option>        
            <option  value="ml">ml</option>
        </select>
        </div>`

        }
        this.innerHTML = `Ok`

        //alteração do ID botão editar para confirmar
        let id = this.id.replace("modify-", "confirm-")
        this.id = ("confirm-", id)
    } else {
        let id = this.id.replace("confirm-", "")
        let alterList = lista_array.find(value => value.id == id)
        let idsearch = modify.parentNode

        //alteração de quantidade no array
        alterList.qnt = document.getElementById("modify-" + modify.id).value

        //alteração de tipo de unidade no array
        alterList.unit = document.getElementById("modify-type-" + modify.id).value

        //atualização na DOM
        document.getElementById("modify-" + modify.id).parentNode.parentNode.parentNode.innerHTML = `
        <li id="qnt-${id}" class="qnt">${alterList.qnt}</li>
        <li id="unit-type-${id}" class="unit-type">${alterList.unit}</li>
        <li><button id="modify-${id}" class="modify-item-btn modify-btn">Editar</button></li>
        <li><button id="delete-${id}" class="delete-item-btn modify-btn"></button></li>
        `

        //adicionando event listener para funções editar e remover
        document.querySelector("#modify-" + id).addEventListener('click', modifyItem)
        document.querySelector("#delete-" + id).addEventListener('click', deleteItem)
    }
}

function deleteItem () {

    //remove item do array
    let id = this.id.replace("delete-", "")
    lista_array.splice(id-1, 1)

    //remove item do array na DOM
    let deleteVar = this.parentNode.parentNode.parentNode
    document.getElementById("lista-principal").removeChild(deleteVar)
}

let lista_array = []

//event listener para adicionar o produto na DOM e array
let adicionarItem = document.getElementById("add-btn").addEventListener("click", () =>{

    if (document.getElementById("add-item").value === "" || document.getElementById("add-qnt").value === "") {
        
        if(document.getElementById("empty-form") === null){document.getElementById("item-form").insertAdjacentHTML("beforeend", `
        <p id="empty-form">Favor preencher todos os campos</p>
        `)
    }

    } else{
        if(document.getElementById("empty-form") != null){
        document.getElementById("empty-form").remove()
        }
        const idItem = generateUniqueID()
        const nomeItem = document.getElementById("add-item").value;
        const qntItem = document.getElementById("add-qnt").value;
        const unitItem = document.getElementById("option").value;
        const novoItem = new produto(idItem, nomeItem, qntItem, unitItem);
        
        criarNovoItem(novoItem)
        document.getElementById("add-item").value = "";
        document.getElementById("add-qnt").value = "";

        //adicionando event listener para funções editar e remover
        document.querySelector("#modify-" + idItem).addEventListener('click', modifyItem)
        document.querySelector("#delete-" + idItem).addEventListener('click', deleteItem)

        lista_array.push(novoItem)
    }
})