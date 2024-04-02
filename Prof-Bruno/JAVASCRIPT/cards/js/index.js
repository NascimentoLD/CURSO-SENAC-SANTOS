// Criamos uma variavel cards e com o document acessamos nosso documento HTML, com o queryselector podemos pegar qualquer elemento utilizando . para classes, # pada ID, div,header,footer e etc para um elemento sem classe ou id.
let cards = document.querySelector('.cards');

// fetch = faz a leitura de alguma informação (requisitada)
fetch('jogadores-brasil.json')
    // A função then sempre ira receber uma resposta e ira armazena-la em uma variavel.
    .then(resposta => resposta.json())
    .then(dados => dados.forEach((jogador) => {

        // cria um card padrao
        let card = document.createElement('div')
        // da uma classe css para o elemento especificado
        card.classList.add('card')
        // Cria um elemento filho dentro do elemento especificado
        cards.appendChild(card)
        // innerHTML = insere qualquer conteudo dentro do HTML da tag especificada
        card.innerHTML = `
        <span class="posicaoP">${jogador.posicao}</span>
        <span class="posicaoG">${jogador.posicao}</span>
        <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="">
        <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="">
        <h3 class="nomeJogador">${jogador.nome}</h3>
        <h4 class="numero">${jogador.numero}</h4>
        `
    }))
