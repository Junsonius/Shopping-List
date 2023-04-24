function produto(id, item, qnt, unit) {
    this.id = id;
    this.item = item;
    this.qnt = qnt;
    this.unit = unit
    this.comprado = false 
}

let ul
let uniqueId = 0

function generatedUniqueID() {
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

    
    if(this.id.includes('modify') === true) { 
        //escolher e renderizar nova quantiadade de item
        document.getElementById(updatedQnt).innerHTML =`
        <div class="qnt-unit-container modify">
        
        <input type="number" id="modify-${modify.id}" class="modify-items" name="add-qnt" value="${modify.innerHTML}">
        
        `
        let modifytype = this.parentNode.previousElementSibling;
        let updatedtype = modifytype.id        

        //escolher tipo de quantidade a ser renderizado
        switch (document.getElementById(updatedtype).innerHTML){

            case "kg":
            document.getElementById(updatedtype).innerHTML =
            `
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
            document.getElementById(updatedtype).innerHTML =
            `
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
            document.getElementById(updatedtype).innerHTML =
            `
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
            document.getElementById(updatedtype).innerHTML =
            `
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

        default:
            document.getElementById(updatedtype).innerHTML =
            `
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
        console.log(this.id)
        this.innerHTML = `Ok`
        let id = this.id.replace("modify-", "confirm-")
        this.id = ("confirm-", id)
        console.log(id)
    } else {
        let id = this.id.replace("confirm-", "")
        let alterList = lista_array.find(value => value.id == id)
        let idsearch = modify.parentNode
        //alteração de quantidade
        alterList.qnt = document.getElementById("modify-" + modify.id).value

        //alteração de unidade
        alterList.unit = document.getElementById("modify-type-" + modify.id).value

        //atualização na DOM

        document.getElementById("modify-" + modify.id).parentNode.parentNode.parentNode.innerHTML = `
        <li id="qnt-${id}" class="qnt">${alterList.qnt}</li>
        <li id="unit-type-${id}" class="unit-type">${alterList.unit}</li>
        <li><button id="modify-${id}" class="modify-item-btn modify-btn">Editar</button></li>
        <li><button id="delete-${id}" class="delete-item-btn modify-btn"></button></li>
        `
        document.querySelector("#modify-" + id).addEventListener('click', modifyItem)
        document.querySelector("#delete-" + id).addEventListener('click', deleteItem)
    }
}

function deleteItem () {

    //remove item do array
    let id = this.id.replace("delete-", "")
    lista_array.splice(id-1, 1)

    //remove item do array no html
    let deleteVar = this.parentNode.parentNode.parentNode
    document.getElementById("lista-principal").removeChild(deleteVar)
}

let lista = []
lista = document.getElementsByClassName("item");

let lista_array = []


document.getElementById("add-btn").addEventListener("click", () =>{
    const idItem = generatedUniqueID()
    const nomeItem = document.getElementById("add-item").value;
    const qntItem = document.getElementById("add-qnt").value;
    const unitItem = document.getElementById("option").value;
    const novoItem = new produto(idItem, nomeItem, qntItem, unitItem);
    
    criarNovoItem(novoItem)
    document.getElementById("add-item").value = "";
    document.getElementById("add-qnt").value = "";
    document.querySelector("#modify-" + idItem).addEventListener('click', modifyItem)
    document.querySelector("#delete-" + idItem).addEventListener('click', deleteItem)

    lista_array.push(novoItem)

})