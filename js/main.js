function produto(id, item, qnt, unit) {
    this.id = id;
    this.item = item;
    this.qnt = qnt;
    this.unit = unit
    this.comprado = false 
}

function adicionarItem (produto) {
    lista.push(produto)
}

let ul

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
    console.log(updatedQnt)
    document.getElementById(updatedQnt).innerHTML =`
    <div class="qnt-unit-container modify">
    
    <input type="number" class="modify-items" name="add-qnt" value="">
    
    `
    let modifytype = this.parentNode;
    let updatedtype = modifytype.id
    console.log(updatedtype)
    document.getElementById(updatedtype).innerHTML = `
    <input type="number" class="modify-items" name="add-qnt" value="">
    <label class="unitlabel" for="option"></label>
    <select class="modify-items">
        <option value="un.">un.</option>
        <option value= "kg">kg</option>     
        <option value="g">g</option>     
        <option value="l">l</option>        
        <option value="ml">ml</option>      
    </select>
</div>
    `

}

function deleteItem () {
    let deleteVar = this.parentNode.parentNode.parentNode
    document.getElementById("lista-principal").removeChild(deleteVar)

   /* let obj = lista_array.find(objeto => objeto.id ===  )*/
}

let lista = []
lista = document.getElementsByClassName("item");

let lista_array = []


document.getElementById("add-btn").addEventListener("click", () =>{
    const idItem = Math.floor(Math.random()*1000)
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
