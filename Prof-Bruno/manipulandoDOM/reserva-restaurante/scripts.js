const form = document.querySelector("form");
// Estamos pegando o campo de formulão e jogando dentro da variavel form
const yourname = document.querySelector("#yourname");
// Estamos pegando o id do input yourname e guardando dentro da variavel yourname que criamos. 
const email = document.querySelector("#email");
// Estamos pegando o id do input email e guardando dentro da variavel email que criamos.
const phonenumber = document.querySelector("#phonenumber");
// Estamos pegando o id do input phonenumber e guardando dentro da variavel phonenumber que criamos.
const date = document.querySelector("#date");
// Estamos pegando o id do input date e guardando dentro da variavel date que criamos.
const time = document.querySelector("#time");
// Estamos pegando o id do input time e guardando dentro da variavel time que criamos.
const amountofpeople = document.querySelector("#amountofpeople");
// Estamos pegando o id do input amountofpeople e guardando dentro da variavel amountofpeople que criamos.
const message = document.querySelector("#message");
// Estamos pegando o id do input message e guardando dentro da variavel message que criamos.
const ulElement = document.querySelector("ul");
// Estamos pegando o id do input ulElement e guardando dentro da variavel ulElement que criamos.

form.addEventListener ("submit", (e) => {
    // preventDefault = Evita a ação padrão do elemento.
    e.preventDefault();

    checkInputs();
});

// hoisting
function checkInputs(){
    // Aqui estamos pegando as variaveis e jogando o valor que foi preenchido dentro delas.
    const yournameValue = yourname.value;
    const emailValue = email.value;
    const phonenumberValue = phonenumber.value;
    const dateValue = date.value;
    const timeValue = time.value;
    const amountofpeopleValue = amountofpeople.value;
    const messageValue = message.value;
    let verificator = 0;

    if(yournameValue === ""){
        setErrorFor(yourname, "O nome é obrigatorio!");
    }else{
        setSuccessFor(yourname);
        verificator++
        // A cada campo 
    }

    if(emailValue === ""){
        setErrorFor(email, "O email é obrigatorio!");
        // ! = Nega a condição especificada, ou seja, verifica o contrário da condição
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido!") ;      
    }else{
        setSuccessFor(email)
        verificator++
    }

    if(phonenumberValue === ""){
        setErrorFor(phonenumber, "O número de telefone é obrigatorio!");
    }else if(phonenumberValue.length != 9){
        setErrorFor(phonenumber, "Digite o número completo (sem DDD.)")
    }else{
        setSuccessFor(phonenumber);
        verificator++
    }

    if(dateValue === ""){
        setErrorFor(date, "Escolha uma data!");
    }else{
        setSuccessFor(date);
        verificator++
    }

    if(timeValue === ""){
        setErrorFor(time, "Escolha um horario!");
    }else{
        setSuccessFor(time);
        verificator++
    }

    if(amountofpeopleValue === ""){
        setErrorFor(amountofpeople, "Informe o número de pessoas!");
    }else{
        setSuccessFor(amountofpeople);
        verificator++
    }

    if(messageValue === ""){
        setErrorFor(message, "Adicione informções necessarias!");
    }else{
        setSuccessFor(message);
        verificator++
    }

    if(verificator === 7){
        const yournameElement = document.createElement("span");
        const emailElement = document.createElement("span");
        const phonenumberElement = document.createElement("span");
        const dateElement = document.createElement("span");
        const timeElement = document.createElement("span");
        const amountofpeopleElement = document.createElement("span");
        const messageElement = document.createElement("span");
    
        yournameElement.setAttribute("class", "name");
        emailElement.setAttribute("class", "email");
        phonenumberElement.setAttribute("class", "phonenumber");
        dateElement.setAttribute("class", "date");
        timeElement.setAttribute("class", "time");
        amountofpeopleElement.setAttribute("class", "amountofpeople");
        messageElement.setAttribute("class", "message");
    
        yournameElement.innerHTML = yourname.value;
        emailElement.innerHTML = email.value;
        phonenumberElement.innerHTML = phonenumber.value;
        dateElement.innerHTML = date.value;
        timeElement.innerHTML = time.value;
        amountofpeopleElement.innerHTML = amountofpeople.value;
        messageElement.innerHTML = message.value;

        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover";
        
        const liElement = document.createElement("li");
        liElement.appendChild(yournameElement)
        liElement.appendChild(emailElement)
        liElement.appendChild(phonenumberElement)
        liElement.appendChild(dateElement)
        liElement.appendChild(timeElement)
        liElement.appendChild(amountofpeopleElement)
        liElement.appendChild(btnElement)
    
        ulElement.appendChild(liElement);
    
        btnElement.onclick = () => {
            ulElement.removeChild(liElement)
        }
    }
}



// Funções 

function setErrorFor(input, message){
    // Retorna a div que é pai do input
    const formControl = input.parentElement;
    // querySeletor = Retorna apenas o primeiro elemento especificado dentro do elemento pai
    const small = formControl.querySelector("small");
    // adiciona a mensagem de erro
    small.innerText = message;
    // adiciona a classe de erro
    formControl.className = "form-control error"
}

function setSuccessFor(input){
    // Retorna a div que é pai do input
    const formControl = input.parentElement;
    // adiciona a classe de erro
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }