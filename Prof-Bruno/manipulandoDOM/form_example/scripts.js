const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

// addEventListener = permite executar um ou mais funções quando um evento acontece.
// form = elemento ao qual se deseja adicionar seu manipulador de eventos, ou seja, um elemento do DOM.

// submit = Uma string que irá especificar o nome do evento que será detectado (e) quando queremos ter mais informações sobre o evento como, por exemplo, qual elemento foi clicado temos que passar um parámetro que nesse caso é o (e) o (e) representa um objeto que irá conter várias informações sobre o evento como o id, por exemplo.

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    checkInputs();
});

// Hoisting
function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username, "O nome de usuário é obrigatório!");
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email, "O E-mail é obrigatório!")
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um email válido!")
    }else{
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "A senha é obrigatória!");
    }else if(passwordValue.length < 7){
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres!");
    }else{
        setSuccessFor(password);
    }

    if(passwordConfirmationValue === ""){
        setErrorFor(passwordConfirmation, "A confirmação da senha é obrigatório!");
    }else if(passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    }else{
        setSuccessFor(passwordConfirmation);
    }
}

function setSuccessFor(input){
    // parentElement = Seleciona o pai direto do elemento especificado.
    const formControl = input.parentElement;
    // Adiciona a classe de sucesso
    formControl.className = "form-control success"
}

function setErrorFor(input, message){
    // Retorna a div que é pai do input
    const formControl = input.parentElement;
    // querySeletor = Retorno apenas o primeiro elemento especificado dentro do elemento pai
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }