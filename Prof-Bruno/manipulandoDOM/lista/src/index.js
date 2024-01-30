// Const é parecido com uma variavel a diferença é que seu valor não pode ser alterado durante a execução do codigo

// A Função basica do QuerySeletor é buscar elementos do DOM com base em um seletor CSS, ou seja, ela serve para buscar qualquer elemento dentro do Document.
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

// Uma função de um elemento HTML(objeto) nada mais é do que um evento, ou seja, uma ação do usuario naquele elemento.

buttonElement.onclick = ev => {
    ev.preventDefault();


    // inputElement.value: Verifica se o campo realmente recebeu um valor.
    if (inputElement.value) {
        // createElement: Cria um elemento HTML (span) para ser utilizado posteriormente
        const textElement = document.createElement("span");
        // innerHTML: Insere um valor dentro do elemento(tag) HTML especificado.
        textElement.innerHTML = inputElement.value;
        // createElement: Cria um elemento HTML (button) para ser utilizado posteriormente
        const btnElement = document.createElement("button");
        // innerHTML: Insere um valor dentro do elemento(tag) HTML especificado, nesse caso será a tag button representada na nossa pagina HTML.
        btnElement.innerHTML = "Remover"

        // createElement: Cria um elemento HTML (li) para ser utilizado posteriormente, nesse caso será o li representado na nossa pagina HTML.
        const liElement = document.createElement("li");
        // appendchild: Adiciona na utima posição do elemento pai o valor que foi passado para ele, nesse caso está  sendo passado oque o usuario digitou no campo input.
        liElement.appendChild(textElement);
        liElement.appendChild(btnElement);

        btnElement.onclick = () => {
            // removechild: remove o filho especificado no removechild, nesse caso será o liElement.
            ulElement.removeChild(liElement);

            ulElement.appendChild(liElement);
            inputElement.value = "";


        }

    }
}