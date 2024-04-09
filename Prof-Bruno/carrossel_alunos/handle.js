let index = 1;
showSlides(1)

function addSlides(n) {
    showSlides(index += n)
}

// Carrega o card atual que o usuário quer exibir
function currentSlide(n) {
    showSlides(index = n)
}

// Irá exibir o card na tela
function showSlides(n){
    // Seleciona os Cards
    let slides = document.getElementsByClassName("slides");
    // Seleciona os pontos que irão alterar o card atual na tela
    let dots = document.getElementsByClassName("dot");

    // Se o número do slide que o usuário tentar exibir for maior que a quantidade de cards disponiveis ele irá automaticamente voltar para o primeiro slide, ou seja, quando o usuário estiver no último slide ele automaticamente volta para o primeiro.
    if (n > slides.length) {
        index = 1;
    }
    // se o número de slide for menor que 0 ele irá automaticamente para o ultimo card do slide
    else if(n < 1){
        index = slides.length
    }

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
        // replace(" active", "") = Substitui uma string por qualquer outra que for definida, será obrigatório informar primeiramente a string que 
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "flex";
    dots[index - 1].className += " active";
}