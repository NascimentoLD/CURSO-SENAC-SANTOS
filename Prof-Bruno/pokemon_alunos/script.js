// Guarda o elemento com a classe choque na variavel (choque) o elemento em questão é a tag video

// PIKACHU
let choque = document.querySelector('.choque');
let pikachu = document.querySelector('.imagemA');
let logo = document.querySelector('.imagemLOGO');
pikachu.addEventListener('click', () => {
    choque.style.display = 'block'
    choque.play()
})

// BULBASAURO
// Seleciona o elemento com a class folha e o guarda dentro da variável (folha)
let folha = document.querySelector('.folha');
// Seleciona o elemento com a class imagemB e o guarda dentro da variável (bulbasauro)
let bulbasauro = document.querySelector('.imagemB');
bulbasauro.addEventListener('click', () => {
    folha.style.display = 'block'
        folha.play()
});

// CHARMANDER
let fogo = document.querySelector(".fogo");
let charmander = document.querySelector(".imagemC");
charmander.addEventListener("click", () => {
    fogo.style.display = "block";
    fogo.play();
});

// GENGAR
let fanta = document.querySelector(".fantasma");
let gengar = document.querySelector(".imagemE");
gengar.addEventListener("click", () => {
    fanta.style.display = "block";
    fanta.play();
})

// Gyarados
let agua = document.querySelector(".agua");
let gyarados = document.querySelector(".imagemD");
gyarados.addEventListener("click", () => {
    agua.style.display = "block";
    agua.play();
});

// DRAGONITE
let drago = document.querySelector(".dragao");
let dragonite = document.querySelector(".imagemF");
dragonite.addEventListener("click", () => {
    drago.style.display = "block"
    drago.play();
});

let aviso = document.querySelector(".aviso");

function aoCarregar() {
    pikachu.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.1)'
};

const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');


// Area de musica da pagina
let audioFundo = document.querySelector('.audioFundo');
let audioPlay = document.querySelectorAll('.play');

function play() {
    audioFundo.play()    
}

function pause() {
    audioFundo.pause()
}

function mouseEntrar() {
    pikachu.style.transform = "scale(1.2)";
    bulbasauro.style.transform = "scale(1.3)";
    charmander.style.transform = "scale(1.1)";
    gyarados.style.transform = "scale(1.1)";
    gengar.style.transform = "scale(1.2)";
    dragonite.style.transform = "scale(1.1)";
    logo.style.transform = "scale(1.2)";
    aviso.style.opacity = "1";
    aviso.style.transform = "scale(1)"
}

function mouseSair() {
    pikachu.style.transform = "scale(1)";
    bulbasauro.style.transform = "scale(1)";
    charmander.style.transform = "scale(1)";
    gyarados.style.transform = "scale(1)";
    gengar.style.transform = "scale(1)";
    dragonite.style.transform = "scale(1)";
    logo.style.transform = "scale(1.1)";
    aviso.style.opacity = "1";
    aviso.style.transform = "scale(0.8)"
}


listaSelecaoPokemons.forEach((pokemon) => {
    pokemon.addEventListener("click", () =>{
        const cartaoPokemonAberto = document.querySelector(".aberto");

        cartaoPokemonAberto.classList.remove("aberto");

        const idPokemonSelecionado = pokemon.attributes.id.value;
        
        const cartaoPokemonParaAbrir = document.getElementById("cartao-" + idPokemonSelecionado);

        const pokemonAtivoRemove = document.querySelector(".ativo");
        pokemonAtivoRemove.classList.remove("ativo");

        cartaoPokemonParaAbrir.classList.add("aberto"); 
        pokemon.classList.add("ativo");        
    });
});