const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

// Adicionando um evento ao formulário do tipo submit
// Lembre-se que como o evento é do tipo submit
// iremos receber um event (event) do próprio submit

form.addEventListener('submit', (event) => {
    // prevenindo o evento padrão que seria enviar o formulário para algum lugar
    event.preventDefault();
    
    // alert("Cadastrado com sucesso!")
    checkForm();
})



// ========= FUNCTIONS =========

function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha com um nome usuário!");
    }else{
        const formItem = username.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Preencha com um email!");
    }else{
        const formItem = email.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "Preencha com uma senha!");
    }else if(passwordValue.length < 8){
        errorInput(password, "A senha deve conter no minímo 8 caracteres!");
    }else{
        const formItem = password.parentElement
        formItem.classList = 'form-content'
    }
}

function checkInputPasswordConfirmation(){
    const passwordConfirmationValue = passwordConfirmation.value;
    const passwordValue = password.value;

    if (passwordConfirmationValue === "") {
        errorInput(passwordConfirmation, "Preencha com uma senha!");
    }else if(passwordConfirmationValue.length < 8){
        errorInput(passwordConfirmation, "A senha deve conter no minímo 8 caracteres!");
    }else if(passwordValue != passwordConfirmationValue){
        errorInput(passwordConfirmation, "As senhas não correspondem!")
    }else{
        const formItem = passwordConfirmation.parentElement
        formItem.classList = 'form-content'
    }
}

function errorInput(input, message) {
    // parentElement = Seleciona o pai direto do elemento especificado!
    const formItem = input.parentElement;
    // formItem.querySelector("span") = Seleciona o soan que estiver dentro do formItem
    const textMessage = formItem.querySelector("span");

    textMessage.innerText = message;
    formItem.className = "form-content error";
}

// function inputBlur(){
    username.addEventListener('blur', () => {
        checkInputUsername();
    })
    
    email.addEventListener('blur', () => {
        checkInputEmail();
    })
    
    password.addEventListener('blur', () => {
        checkInputPassword();
    })
    
    passwordConfirmation.addEventListener('blur', () => {
        checkInputPasswordConfirmation();
    })
// }

function checkForm() {

    // Funções criadas para verificação de cada input
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    // querySelectorAll = Seleciona todos os elementos com a classe .form-content do Formulário, guardando elas dentro de um arroy.
    const formItems = form.querySelectorAll('.form-content');

    // every = Verifica se o array está de acordo com uma condição que especificamos
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    })

    if (isValid) {
        alert("Cadastrado com Sucesso!");
    }
}