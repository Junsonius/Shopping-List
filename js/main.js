function produto(item, qnt, unit) {
    this.item = item;
    this.qnt = qnt;
    this.unit = unit
    this.comprado = false 
}

function adicionarItem (produto) {
    lista.push(produto)
}

function criarNovoItem (novoItem){
    let ul = document.createElement('ul');

    let nomeItem = novoItem.item
    let qntItem = novoItem.qnt
    let unitItem = novoItem.unit

    ul.setAttribute('class', 'item item-lista-fundo center');
    ul.innerHTML = `
    <ul class="item item-lista-fundo center">
    <li><input type="checkbox" name="comprado"></li>
    <li>${nomeItem}</li>
    <li class="qnt">quantidade: ${qntItem} ${unitItem}</li>

    </ul> 
    `;

document.getElementById("lista-principal").appendChild(ul)

}


let lista = document.getElementsByClassName("item");

document.getElementById("add-btn").addEventListener("click", () =>{
    const nomeItem = document.getElementById("add-item").value;
    const qntItem = document.getElementById("add-qnt").value;
    const unitItem = document.getElementById("option").value;
    const novoItem = new produto(nomeItem, qntItem, unitItem);
    criarNovoItem(novoItem)
})

console.log(lista)
