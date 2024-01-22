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

// function mostrarTabuada(){
//     // Cria referencia aos elementos da pagina
//     let inNumero = document.getElementById('inNumero');
//     let outTabuada = document.getElementById('outTabuada');

//     // Converte o conteudo do campo inNumero
//     let numero = Number(inNumero.value)

//     if(numero == 0 || isNaN(numero)){
//         alert("Informe um número válido!")
//         inNumero.focus();
//         inNumero.value= "";
//         return;
//     }

//     // Cria um variavel do tipo string, que irá concatenar a resposta 
//     let resposta = "";

//     //Cria um laço de repetição
//     for (let i = 1; i <= 10; i++){
//         // A variavel resposta vai acumulando os novos conteúdos
//         resposta = resposta + numero + " X " + i + " = " + numero * i + "\n"
//     }

//     // O conteúdo da tag pre é alterado para exibir a tabuada do numero
//     outTabuada.textContent = resposta;

// }

// // Criar referência ao botão e após associar function ao evento click
// //  let btMostrar = document.getElementById('btMostrar');
//     // btMostrar.addEventListener("click", mostrarTabuada)




// function listaNumeros(){
//     // Cria referencia aos elementos da pagina
//     let inNumero = document.getElementById('inNumero');
//     let outResposta = document.getElementById('outResposta');

//     // Converte o conteudo do campo inNumero
//     let numero = Number(inNumero.value);

//     if(numero == 0 || isNaN(numero)){
//         alert("Informe um número valido!");
//         inNumero.focus();
//         inNumero.value = "";
//         return;
//     }

//     let resposta = "Entre " + numero + " e 1: ";

//     //Cria um laço de repetição
//     for (let i = numero; i > 0; i = i -1){
//         resposta = resposta + i + ", ";

//         // O conteúdo da tag pre é alterado para exibir a tabuada do numero
//         outResposta.textContent = resposta;
//     }

// }

// // let btDecrescer = document.getElementById("btDecrescer");
// // btDecrescer.addEventListener("click", listaNumeros)


// function numeros(){
//     let inNumero = document.getElementById('inNumero');
//     let outResposta = document.getElementById('outResposta');

//     let numero = Number(inNumero.value);

//     if(numero == 0 || isNaN(numero)){
//         alert("Informe um número valido!");
//         inNumero.focus();
//         inNumero.value = "";
//         return;
//     }

//     let resposta = "contagem decrescente" + " de 10 em 10: ";

//     for(let i = numero; i > 0; i = i - 10){
//         resposta = resposta + i + ", " ;

//         outResposta.textContent = resposta;
//     }
// }


// let btDecrescer = document.getElementById("btDecrescer");
// btDecrescer.addEventListener("click" , numeros);


// let maiorPeso;

// for(let i = 1; i <= 8; i++){
//     let peso = Number(prompt("Digite seu peso: "));

//     if(peso > maiorPeso){
//         maiorPeso = peso;
//     }
// }

// alert("Peso " + maiorPeso);

// let sal;
// let filhos;
// let media;
// let somasal = 0;
// let somaf = 0;

// for(let i = 1; i <= 2; i++){
//     let sal = Number(prompt("Digite seu salario: "));
//     let filhos = Number(prompt("Digite quantos filhos você tem: "));

//     somasal += sal;
//     somaf += filhos;

// }

// mediaS = somasal / 2;
// mediaF = somaf / 2; 

// alert("A média salarial é: " + mediaS + "\nA média de filhos é " + mediaF);




// let somaSP = 0;
// let somaRJ = 0;
// let somaVei = 0;
// let somaAci = 0;

// for(let i = 1; i <= 10; i++){
//     let veiculos = prompt("Seu veiculo é de passeio? ");
//     let acidentes = prompt("Já se envolveu em acidente? ");
//     let estado = prompt("Qual o estado do seu veículo? ");

//     veiculos = veiculos.toLowerCase();
//     acidentes = acidentes.toLowerCase();
//     estado = estado.toLowerCase();

//     if(veiculos == 's'){
//         somaVei++
//     }

//     if(acidentes == 's'){
//         somaAci++
//     }

//     if(estado == "sp"){
//         somaSP++;
//     } else if(estado == "rj"){
//         somaRJ++
//     }
// }

// alert("Veiculos de SP " + somaSP + "\nVeiculos de RJ: " + somaRJ + "\nVeiculos de passeio: " + somaVei + "\nNúmero de Acidentes: " + somaAci );




// let soma1 = 0;
// let soma2 = 0;
// let soma3 = 0;
// let soma4 = 0;
// let soma5 = 0;
// let soma6 = 0;

// for(let i = 1; i <= 10; i++){
//     let candidato = Number(prompt("Digite o número de seu candidato: \n\n" + " 1 - Bolsonaro\n 2 - Lula\n 3 - Ciro\n 4 - Daciolo\n 5 - Voto Nulo\n 6 - Voto em Branco"));

//     if(candidato == 1){
//         soma1++
//     }else if(candidato == 2){
//         soma2++
//     }else if(candidato == 3){
//         soma3++
//     }else if(candidato == 4){
//         soma4++
//     }else if(candidato == 5){
//         soma5++
//     }else if(candidato == 6){
//         soma6++
//     }else{
//         break
//     }
// }

// alert("Bolsonaro: " + soma1 + "\nLula: " + soma2 + "\nCiro: " + soma3 + "\nDaciolo: " + soma4 + "\nVotos Nulos: " + soma5 + "\nVotos em Branco: " + soma6);


// ____________________________________________________________________________________


// let maiorPeso = 0;
// let maiorCem = 0;
// let npessoas = 0;
// let totalPessoas = 0;
// let somaP = 0;

// for(let i = 1; i <= 3; i++){
//     let peso = Number(prompt("Digite o peso da " + i + " º pessoa: "));
//     totalPessoas++

//     if(peso > 100){
//     maiorCem++
//     }

//     if(peso > maiorPeso){
//         maiorPeso = peso
//     }

//     somaP += peso;

// }

// let media = somaP / totalPessoas;
 

// alert("A quantidade de pessoas que pesão mais que 100KG são: " + maiorCem + "\n\nO maior peso cadastrado é: " + maiorPeso + "\n\n A média de pesos cadastrado é: " + media)





// let produto = prompt("Escolha o produto desejado:\n\n1- Titan 160 - 2021 - (R$15,800 Reais.)\n2- MT 03 - 2023 - (R$30,000 Reais.)\n3- Hornet - 2018 - (R$45,000)\n4- BMW GS 1250 - 2024 - (R$150.000 Reais.)")

// let formaPagamento = prompt("Escolha a Forma de pagamento que você pretende efetuar a compra:\n\n1- A vista em dinheiro ou cheque (15% de Desconto)\n2- A vista  no cartão de credito (10% de Desconto)\n3- Em duas vezes, preço normal de etiqueta (Sem Juros!)\n4- Em quatro vezes (5% de Juros!)")

// let porcentagem = 0;

// if(produto == 1){
//     if(formaPagamento == 1){
//         desconto = 15800 - (15800 * 0.15) 
//     }else if(formaPagamento == 2){
//         desconto = 15800 - (15800 * 0.10)
//     }else if(formaPagamento == 3){
//         desconto = 15800
//     }else if(formaPagamento == 4){
//         desconto = 15800 + (15800 * 0.05)
//     }
// }

// if(produto == 2){
//     if(formaPagamento == 1){
//         desconto = 30000 - (30000 * 0.15) 
//     }else if(formaPagamento == 2){
//         desconto = 30000 - (30000 * 0.10)
//     }else if(formaPagamento == 3){
//         desconto = 30000
//     }else if(formaPagamento == 4){
//         desconto = 30000 + (30000 * 0.05)
//     }
// }

// if(produto == 3){
//     if(formaPagamento == 1){
//         desconto = 45000 - (45000 * 0.15) 
//     }else if(formaPagamento == 2){
//         desconto = 45000 - (45000 * 0.10)
//     }else if(formaPagamento == 3){
//         desconto = 45000
//     }else if(formaPagamento == 4){
//         desconto = 45000 + (45000 * 0.05)
//     }
// }

// if(produto == 4){
//     if(formaPagamento == 1){
//         desconto = 150000 - (150000 * 0.15) 
//     }else if(formaPagamento == 2){
//         desconto = 150000 - (150000 * 0.10)
//     }else if(formaPagamento == 3){
//         desconto = 150000
//     }else if(formaPagamento == 4){
//         desconto = 150000 + (150000 * 0.05)
//     }
// }

// alert("Detalhes da sua compra: \n\n" + "Produto Escolhido: " + produto  + "\nForma de pagamento desejado: " + formaPagamento + "\nO desconto de é de: " + desconto)




let name = prompt("Digite o nome e a turma do aluno: ")
let nt1 = prompt("Digite a nota do primeiro semestre: ")
let nt2 = prompt("Digite a nota do segundo semestre: ")
let nt3 = prompt("Digite a nota do terceiro semestre: ")
let nt4 = prompt("Digite a nota do quarto semestre: ")

let media;

media = (Number(nt1) + Number(nt2) + Number(nt3) + Number(nt4)) / 4;

if(media == 10){
    alert("Nota A!")
}else if(media >= 7 && media < 9){
    alert("Nota B")
}else if(media >= 6 && media < 7){
    alert("Nota C!")
}else if(media >= 4 && media < 6){
    alert("Nota D!")
}else if(media < 4){
    alert("Nota E!")
}

console.log(media)

alert(`Nome do Aluno e Turma: ${name} \nSua nota é: ${media}`)

