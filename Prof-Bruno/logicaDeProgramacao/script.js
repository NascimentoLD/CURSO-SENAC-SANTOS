// let num1 = prompt("Digite um número:")

// let op = prompt("Digite o operador matematico desejado")

// let num2 = prompt("Digite outro número:")

// _______________________________________________________

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


let sal = prompt("Qual seu salario atual: ");
let sexo = prompt("Qual seu gênero? M  para Masculino e F para Feminino ")
let anos = prompt("Quantos anos você faz parte da empresa? ")
let reajuste, salf;

sexo = sexo.toUpperCase();

if(sexo == "F"){
    if(anos <= 15){
        reajuste = (Number(sal) * 0.05);
    }else if(anos > 15 && anos <= 20){
        reajuste = (Number(sal) * 0.120);
    }else{
        reajuste = (Number(sal) * 0.23);
    }
}else if(sexo == "M"){
    if(anos <= 15){
        reajuste = (Number(sal) * 0.03);
    }else if(anos > 15 && anos <= 20){
        reajuste = (Number(sal) * 0.123);
    }else{
        reajuste = (Number(sal) * 0.25);
    }
}

salf = Number(sal) + reajuste;

alert("Seu Reajuste foi de: " + "R$" + reajuste + "\nSalario atual com o reajuste ficou: " + "R$" + salf);