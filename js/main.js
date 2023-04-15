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

    if (qntItem == 1 && unitItem == "unidades"){
        unitItem = "unidade"
    }

    ul.setAttribute('class', 'item item-lista-fundo center');
    ul.innerHTML = `
    <li><input id="check-${nomeItem}" type="checkbox" name="comprado"></li>
    <li id="${nomeItem}">${nomeItem}</li>
    <li class="qnt">${qntItem} ${unitItem}</li>
    <li><button id="modify-${idItem}" class="modify-item-btn"></button></li>
    <li><button id="delete-${idItem}" class="delete-item-btn"></button></li>    

    </ul> 
    `;

document.getElementById("lista-principal").appendChild(ul)

}

function modifyItem(id) {

}

function deleteItem () {
    let deleteVar = this.parentNode.parentNode
    document.getElementById("lista-principal").removeChild(deleteVar)
}

let lista = []
lista = document.getElementsByClassName("item");

document.getElementById("add-btn").addEventListener("click", () =>{
    const idItem = Math.floor(Math.random()*1000)
    const nomeItem = document.getElementById("add-item").value;
    const qntItem = document.getElementById("add-qnt").value;
    const unitItem = document.getElementById("option").value;
    const novoItem = new produto(idItem, nomeItem, qntItem, unitItem);
    
    criarNovoItem(novoItem)
    document.getElementById("add-item").value = "";
    document.getElementById("add-qnt").value = "";
    document.querySelector("#delete-" + idItem).addEventListener('click', deleteItem)
})