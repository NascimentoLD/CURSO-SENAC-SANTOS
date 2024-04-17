//ao colocar a palavra async dentro da função estamos dizendo ao javascript que iremos executar códigos que são assincronos ou seja, códigos que não são ordenados.
document.querySelector('.busca').addEventListener('submit', async(event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    //console.log(input);
    //verificando se de fato o usuário digitou algo
    if (input !== '') {
        clearInfo();
        /*Requisições internas acontecem internamente sem que o usuário saiba, sendo assim, estas requisições podem demorar um pouco patra acontecerem em alguns casos. O ideal é informarmos o usuário que estamos fazendo uma busca para que ele tenha ciência que algo está acontecendo. */
        showWarning('Carregando...')

        //montando a url onde os dados serão requisitados
        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${encodeURI(input)}&units=metric&lang=pt_br&appid=d06cdb298fafc83c520d5ab677fc477e`);


        //ao realizar uma requisição assincrona  sabemos que essa requisição funcionará em cima de promisses, o await irá receber uma promisse que irá transformá-lá em um valor de retorno, o await ficara agurdando uma promisse, caso ela aconteça o valor obtido será retornado, em caso negativo ela irá retornar um erro que poderá ser caputurado e lançado. só é possível usar await em funções definidas como async

        //obtendo os resultados e transforando em um objeto javascript, ou seja em um json
        let json = await results.json();

        //código retornado se a requisição aaconteceu com sucesso
        if (json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg

            });
        } else {
            clearInfo()
            showWarning('Cidade não encontrada');
        }


        //console.log(json)




    } else {
        clearInfo;
    }


});

function showInfo(json) {
    //Retirando a mensagem da tela antes de exibir os resultados
    showWarning('');




    document.querySelector('.titulo').innerHTML = `${json.name},${json.country}`;

    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`

    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}.png`)


    //alterando o display do elemento .aviso para que ele seja exibido na tela
    document.querySelector('.resultado').style.display = 'block';
}

function showWarning(msg) {

    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}