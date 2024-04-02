let cardapio = document.querySelector('.burguers-content');

fetch('cardapio.json')

.then(resposta => resposta.json())
.then(dados => dados.forEach((burguers) => {
    
    let burguer = document.createElement('div');
    burguer.classList.add('burguers-back')

    cardapio.appendChild(burguer)

    burguer.innerHTML = `
        <div class="burguers-back">
            <div class="burguers-back-light">
                <img src="assets/img-burger/${burguers.imagem}.png" alt="">
            </div>
            <div class="burguers-back-dark">
                <a class="burguer-back-prm" href="#">Promoção</a>
                <p>${burguers.especificacao}</p>
                <h2>${burguers.nome}</h2>
                <p class="price">${burguers.preco}</p>
            </div>
        </div>`
}))