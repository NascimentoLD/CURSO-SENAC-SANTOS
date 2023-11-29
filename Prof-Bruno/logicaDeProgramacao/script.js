// let num1 = prompt("Digite um número:")

// let op = prompt("Digite o operador matematico desejado")

// let num2 = prompt("Digite outro número:")


// let soma; 

// if(op == "+"){
//     soma = Number(num1) + Number(num2);
// } else if(op == "-"){
//     soma = Number(num1) - Number(num2);
// } else if(op == "*"){
//     soma = Number(num1) * Number(num2);
// } else if(op == "/"){
//     soma = Number(num1) / Number(num2);
// } else{
//     alert('Informe uma operação valida!')
// }

// alert( 'O resultado da operação é: ' +soma);


// _______________________________________________________


// let nt1 = prompt('Digite a sua nota na primeira prova: ')

// let nt2 = prompt('Digite a sua nota na segunda prova: ')

// let nt3 = prompt('Digite a sua nota na terceira prova: ')

// let nt4 = prompt('Digite a sua nota na quarta prova: ')

// let media;

// media = (Number(nt1) + Number(nt2) + Number(nt3) + Number(nt4)) /4;

// alert('A media do aluno é: '+media);


// _______________________________________________________



// let km = prompt('Digite quantos km foram rodados: ')

// let dia = prompt('Digite por quantos dias o carro foi alugado: ')

// let tarifa = 90;

// let vlkm = 0.20;

// let valor;

// valor = (Number(km) * Number(vlkm)) + (Number(dia) * Number(tarifa));

// alert('Valor a ser cobrado: ' +valor)

// let dist = prompt("Digite a distância que deseja percorrer: ")

// let vltotal;


// _______________________________________________________


// if(dist <= 200){
//     vltotal = Number(dist)*0.50;
// } else{
//     vltotal = Number(dist)*0.45;
// }

// alert(
//     "O valor a ser pago é :" +vltotal
// )


// _______________________________________________________


// let nt1 = prompt("Digite a nota do primeiro semestre: ");
// let nt2 = prompt("Digite a nota do segundo semestre: ");
// let nt3 = prompt("Digite a nota do terceiro semestre: ");
// let nt4 = prompt("Digite a nota do quarto semestre:" );

// let media;

// media = (Number(nt1) + Number(nt2) + Number(nt3) + Number(nt4))/4;

// if(media <= 4.9){
//     alert("Reprovado!\n" + "Sua nota é: " +media)
// }else if(media >= 5.0 && media <6.9){
//     alert("Recuperação \n" + "Sua nota é: " +media);
// }else{
//     alert("Parabéns você foi Aprovado! \n" + "Sua nota é: " + media)
// }


// _______________________________________________________


// let name = prompt("Qual o nome do funcionario:");
// let sal = prompt("Qual o salario desse funcionario: ");
// let temp = prompt("Quantos anos esse funcionario trabalha na empresa: ");
// let conv, self;

// if(temp <= 3){
//     conv = Number(sal) * 0.03;
// }

// else if(temp > 3 && temp <= 10){
//     conv = Number(sal) * 0.125;
// }

// else{
//     conv = Number(sal) * 0.2;
// }

//     salf = Number(conv) + Number(sal);

// alert(name + "Seu salario teve um aumento de: " + "R$ "  + conv + " e seu novo salario é de: " + "R$ " + salf );


// _______________________________________________________


// let larg = prompt("Digite a largura do terreno: ");
// let comp = prompt("Digite o comprimento do terreno: ");
// let m;

// m = Number(larg) * Number(comp);

// if(m < 100){
//     alert("Terreno Popular");
// }else if(m >= 100 && m <= 500){
//     alert(" Terreno Mater");
// }else{
//     alert("Terreno Vip");
// }


// _______________________________________________________

// let hora = prompt("Digite quantas horas você praticou de atividades fisicas: ")
// let ganhou = 0.05;
// let pontos, resultado;55

// if(hora <= 10){
//     pontos = Number(hora) * 2;
// }else if(hora > 10 && hora <= 20){
//     pontos = Number(hora) * 5;
// }else{
//     pontos = Number(hora) * 10;
// }

// resultado = pontos * ganhou;

// alert("Você ganhou: " + "R$ " + resultado
// )


// _______________________________________________________


// let sal = prompt("Qual seu salario atual: ");
// let sexo = prompt("Qual seu gênero? M  para Masculino e F para Feminino ")
// let anos = prompt("Quantos anos você faz parte da empresa? ")
// let reajuste, salf;

// sexo = sexo.toUpperCase();

// if(sexo == "F"){
//     if(anos <= 15){
//         reajuste = (Number(sal) * 0.05);
//     }else if(anos > 15 && anos <= 20){
//         reajuste = (Number(sal) * 0.120);
//     }else{
//         reajuste = (Number(sal) * 0.23);
//     }
// }else if(sexo == "M"){
//     if(anos <= 15){
//         reajuste = (Number(sal) * 0.03);
//     }else if(anos > 15 && anos <= 20){
//         reajuste = (Number(sal) * 0.123);
//     }else{
//         reajuste = (Number(sal) * 0.25);
//     }
// }

// salf = Number(sal) + reajuste;

// alert("Seu Reajuste foi de: " + "R$" + reajuste + "\nSalario atual com o reajuste ficou: " + "R$" + salf);


// _______________________________________________________


// let altura = prompt("Digite a sua altura: ");
// let peso = prompt("Digite seu peso: ");

// // let imc = (peso/altura**2);

// imc = Number(peso) / Number(altura) **2;

// if(imc <= 18.5){
//     alert("Abaixo do peso!" );
// } else if( imc > 18.5 && imc <= 25){
//     alert("Peso Ideal! ")
// }else if(imc > 25 && imc <= 30){
//     alert("Acima do peso! ")
// }else if(imc > 30 && imc <= 40){
//     alert("Obesidade! ")
// }else{
//     alert("Obesidade Mórbida!")
// }

// _______________________________________________________

function mostrarTabuada(){
    // Cria referencia aos elementos da pagina
    let inNumero = document.getElementById('inNumero');
    let outTabuada = document.getElementById('outTabuada');

    // Converte o conteudo do campo inNumero
    let numero = Number(inNumero.value)

    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido!")
        inNumero.focus();
        inNumero.value= "";
        return;
    }

    // Cria um variavel do tipo string, que irá concatenar a resposta 
    let resposta = "";

    //Cria um laço de repetição
    for (let i = 1; i <= 10; i++){
        // A variavel resposta vai acumulando os novos conteúdos
        resposta = resposta + numero + " X " + i + " = " + numero * i + "\n"
    }

    // O conteúdo da tag pre é alterado para exibir a tabuada do numero
    outTabuada.textContent = resposta;

}

// Criar referência ao botão e após associar function ao evento click
let btMostrar = document.getElementById('btMostrar');
    btMostrar.addEventListener("click", mostrarTabuada)