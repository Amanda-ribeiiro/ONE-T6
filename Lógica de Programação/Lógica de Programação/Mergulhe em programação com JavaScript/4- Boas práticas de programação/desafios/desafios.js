// - Desafios finais
// 1- Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas vindas!");

// 2- Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Amanda Ribeiro";
console.log(`Olá, ${nome}.`);

// 3- Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nomes = "Amanda Ribeiro";
alert(`Olá, ${nomes}`);

// 4- Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemProg = prompt("Qual a linguagem de programação que você mais gosta? ");
console.log(`Eu adoro programar em ${linguagemProg}!`);

/* 5- Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores
e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]."
no console.
*/
let valor1 = 19;
let valor2 = 27;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);


/* 6- Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
*/
let value1 = 3;
let value2 = 47;
let result = value1 - value2;

console.log(`A diferença entre ${value1} e ${value2} é igual a ${result}.`);

/* 7- Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade,
exibindo uma mensagem apropriada no console.
*/
let idade = prompt("Por favor digite sua idade: ");

if (idade >= 18){
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 8- Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = parseFloat(prompt("Digite um número: "));

if (numero > 0) {
    console.log("O número digitado é positivo.");
} else if (numero < 0) {
    console.log("O número digitado é negativo.");
} else {
    console.log("O número que vc digitou é zero ou inválido.");
}

// 9- Use um loop while para imprimir os números de 1 a 10 no console.
let number = 1;

while (number <= 10){
    console.log(number);
    numero++;
}

// 10- Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 9;

if (nota >= 7) {
    console.log("Parabéns, você foi aprovado (a)!");
} else {
    console.log("Você foi reprovado (a).");
}

// 11- Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// 12- Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numberAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numberAleatorio);

// 13- Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiro = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiro);