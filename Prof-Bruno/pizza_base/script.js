pizzaJson.map((item,idenx) => {
    let pizzaItem = document.querySelector('models .pizza-item').cloneNode(true);

    document.querySelector('.pizza-area').append(pizzaItem);
})