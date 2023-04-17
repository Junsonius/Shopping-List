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
    let idCheckP1 = this.id.replace("modify-", "")
    console.log(updatedQnt.value)

    if(this.id === "modify-", idCheckP1){
        console.log("o arquivo não foi alterado")
    }
    //escolher e renderizar nova quantiadade de item
    document.getElementById(updatedQnt).innerHTML =`
    <div class="qnt-unit-container modify">
    
    <input type="number" class="modify-items" name="add-qnt" value="${modify.innerHTML}">
    
    `
    let modifytype = this.parentNode.previousElementSibling;
    let updatedtype = modifytype.id
    console.log(updatedtype)
    

    //escolher tipo de quantidade a ser renderizado
    switch (document.getElementById(updatedtype).innerHTML){

        case "kg":
        document.getElementById(updatedtype).innerHTML =
        `
        <label class="unitlabel" for="option"></label>
        <select class="modify-items">
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
        <select class="modify-items">
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
        <select class="modify-items">
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
        <select class="modify-items">
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
        <select class="modify-items">
        <option value="un.">un.</option>
        <option  value="kg">kg</option>     
        <option  value="g">g</option>     
        <option  value="l">l</option>        
        <option  value="ml">ml</option>
    </select>
    </div>`

    }

    this.innerHTML = `Ok`
    let id = this.id.replace("modify-", "confirm-")
    this.id = ("confirm-", id)
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
