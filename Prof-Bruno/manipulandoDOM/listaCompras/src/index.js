const produtoElement = document.querySelector("#produto");
const precoElement = document.querySelector("#preco");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

buttonElement.onclick = ev => {
    ev.preventDefault();

    if (produtoElement.value && precoElement.value) {
        const textElement = document.createElement("span");
        textElement.innerHTML = produtoElement.value.concat(" ").fontsize("18px");
        const textsElement = document.createElement("span")
        textsElement.innerHTML = precoElement.value;

        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover"

        const liElement = document.createElement("li");

        liElement.appendChild(textElement);
        liElement.appendChild(textsElement);
        liElement.appendChild(btnElement);

        btnElement.onclick = () => {
            ulElement.removeChild(liElement);
        
        }
        ulElement.appendChild(liElement);
            produtoElement.value = "";
            precoElement.value = "";
    }

}