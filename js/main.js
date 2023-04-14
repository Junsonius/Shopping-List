function produto(item, qnt) {
    this.item = item;
    this.qnt = qnt;
    this.comprado = false 
}


function adicionarItem (produto) {
    lista.push(produto)
}

function criarNovoItem (){
    const novoItemAdd = document.createElement("ul")
    novoItemAdd.classList.add("item", "item-lista-fundo", "center")
    const itemlist1 = document.createElement("li")
    const novoCheckBox = document.createElement("input")
    novoCheckBox.type = "checkbox"
    novoCheckBox.name = "comprado"
    itemlist1.appendChild(novoCheckBox)

    const itemlist2 = document.createElement("li")
    const novoItemNome = document.createElement("p")
    itemlist2.appendChild(novoItemNome)

    const itemlist3 = document.createElement("li")
    itemlist3.classList.add = ("qnt")
    const novoItemQnt = document.createElement("p")
    itemlist3.appendChild(novoItemQnt)

    const novoElemento = document.querySelector(".lista-principal");
    novoElemento.appendChild(itemlist1, itemlist2, itemlist3)

}

let dados = []

let lista = document.getElementsByClassName("item");

document.getElementById("add-btn").addEventListener("click", () =>{
    const nomeItem = document.getElementById("add-item").value;
    const qntItem = document.getElementById("add-qnt").value;
    const novoItem = new produto(nomeItem, qntItem);
    dados.push(novoItem);
    criarNovoItem()
})



    
console.log(lista)

/* 
    <ul class="item item-lista-fundo center">
        <li><input type="checkbox" name="Comprado"></li>
        <li></li>
        <li class="qnt">quantidade:</li>
                        
    </ul> 
                    
*/