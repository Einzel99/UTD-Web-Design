let input = document.getElementById("input");
const button = document.querySelector("button");
const container = document.querySelector(".Container");
let lista = [];

button.addEventListener("click", adcionarItem);
function adcionarItem() {
    if (input.value !== "" && !lista.includes(input.value)) {
    lista.push(input.value);
}
else {
    alert("Por favor, insira um item na lista.");
}
}

let ul = document.createElement("ul");
container.appendChild(ul);

button.addEventListener("click", renderLista);

function renderLista() {
    ul.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement("li");
        let deletar = document.createElement("button");
        li.textContent = lista[i];
        deletar.textContent = "Delete";
        li.appendChild(deletar);
        ul.appendChild(li);
    }
}




deletar.addEventListener("click", ExcluirItem);
function ExcluirItem() {
    


}
