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

let aluno = prompt('Digite o nome e a serie do aluno: ')

let prov1 = prompt('Digite a sua nota na primeira prova: ')

let prov2 = prompt('Digite a sua nota na segunda prova: ')

let prov3 = prompt('Digite a sua nota na terceira prova: ')

let prov4 = prompt('Digite a sua nota na quarta prova: ')

let notas;

notas = (Number(prov1) + Number(prov2) + Number(prov3) + Number(prov4)) /4;

alert(notas);