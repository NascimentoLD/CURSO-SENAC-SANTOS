let modalQtd;
let modalKey = 0;
let cart = [];

// ========== INICIO - EXIBE INFORMAÇÕES DAS PIZZAS ==========

//com o map é possível mapear os elementos de um array  e gerar um novo array com base no array original. sempre devemos informar dos parâmetros o item que será um elemento do array e o indice que será a posição desse elemento no a
pizzaJson.map((item, index) => {
    //  Clonando o pizza-item ↓
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

    // O atributo = data-key permite enviar dados atráves do html, esses dados podem ser utilizados posteriormente por uma janela modal ou por qualquer outro componente.
    // //definindo um atributo chamado data-key ao elemento .pizza-item contendo o id da pizza que foi selecionada pelo usuário.
    pizzaItem.setAttribute('data-key', index);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    // Utilizando o toFixed, fazemos com que numeros exatos com casas decimais apareçam ou seja, permite definir quantas casas decimais o javascript irá exibir na tela.
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;

    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault();

        // Iniciando a variavel sempre com o valor 1
        modalQtd = 1;

        // ------ Está variavel será usada para identificar em qual pizza o usúario clicar em adicionar pizza ao carrinho.
        modalKey = index;


        // /queremos pegar a key da pizza ou seja a posição dela no array para sabermos qual pizza foi clicada. Sabemos que todas as pizzas posuem um atrributo data-key com a chave da mesma, assim iremos utilizar o closest para selecionar o elemento e pegar esta key.

        //closest = busca a partir do elemento especificado o elemento mais próximo com a classe ou id especificado, primeiro ele irá procurar dentro de si e depois o elemento mais próximo, seja acima ou abaixo dele.

        //getAttribute =  pega o valor de um atributo
        let key = event.target.closest('.pizza-item').getAttribute('data-key');

        document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        // Removendo a classe selecionada dos tamanhos da pizza, assim garantimos que nenhuma pizza estará selecionada o tamanho antes do usuario selecionar um tamanho que sua escolha.
        // .pizzaInfo--size.selected = Quando no javaSctript quisermos fazer referencia a um elemento que possui duas classes, devemos informar o nome desta classe juntas conforme fizemos abaixo, desta forma o javascript irá entender que deve selecionar apenas o elemento que possuir as duas classes, ou seja, esta pegando a o elemento com a classe .pizzaInfo--size que está la no HTML e esse elemento também está com uma classe selected formatada no CSS. 
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');

        // definindo opacidade 0 para que a modal não seja exibida na tela logo de inicio
        document.querySelector('.pizzaWindowArea').style.opacity = 0;

        // Exibindo a janela modal na tela ao clicar em uma pizza
        document.querySelector('.pizzaWindowArea').style.display = 'flex';

        // setTimeout = Permite executar um codigo depois de um tempo estipulado, esse tempo será em milisegundos.
        setTimeout(() => {
            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        }, 200)
        // Definindo a opacidade para 1 para que a modal seja exibida na tela, lembrando, no css temos uma transition e assim qualquer animação adicionada irá demorar o tempo da transition para acontecer, nesse caso será de 0.5s, assim a opacidade irá de 0 ao 1 demorando 0.5s para acontecer, isso irá gerar um efeito de transiçãp suave dando a impressão que a modal está surgindo na tela.

        // Selecionando todos os elementos pizzaInfo--size pegando o tamanho da pizza e a posição dos elementos.
        document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) =>{

            // Fará que o tamanho grande sempre esteja selecionada por padrão ao usuario clicar em uma pizza. 
            if (sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
            
        });
    });

     // Estamos selecionando a div com a class .pizza-area e 
     document.querySelector('.pizza-area').append(pizzaItem);
});

// =========== FIM - EXIBE INFORMAÇÕES DAS PIZZAS ==========



// ========== FUNCIONALIDADES JANELA MORAL ==========

//evento do modal 
function closeModal(){
    document.querySelector('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

//Estamos usando o forEach para que automaticamente ele selecione automaticamente cada um dos elementos com as classes abaixo e adicione um EventListener nesses elementos, a cada vez que o usuário clicar em algum botão de fechar ele irá detectar o clique e irá chamar a função closeModal para fechar a janela
document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
}); 


// Temos essa forma de fazer, mas de uma forma para aprender, poderiamos fazer assim ↓

// document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', (event) => {
//     event.closeModal();
// });

// document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', (event) => {
//     event.closeModal();
// });

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () => {
    // a cada vez que o usuario clicar no modal a variavel modalQtd será incrementada em +1
    modalQtd++;

    // Selecionando o elemento onde a quantidade de pizzas irá aparecer a atualizando-o conforme a variavel modalQtd.
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQtd;
});

document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () => {
    // a cada vez que o usuario clicar no modal a variavel modalQtd será incrementada em -1
    if (modalQtd > 1) {
        modalQtd--;        
    }

    // Selecionando o elemento onde a quantidade de pizzas irá aparecer a atualizando-o conforme a variavel modalQtd.
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQtd;
});