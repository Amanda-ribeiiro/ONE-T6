// Desafios:

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Digite qual é o dia da semana: ");


if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
    console.log("Bom fim de semana!");
} else {
    console.log("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt("Digite um número: ");
numero = parseFloat(numero);

if (numero > 0) {
    alert(`o número, ${numero}, que você digitou é positivo`);
} else if (numero < 0) {
    alert(`o número, ${numero}, que você digitou é negativo`);
} else {
    alert(`o número, ${numero}, que você digitou é zero ou não é um número válido`);
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacaoJogo = 77;

if (pontuacaoJogo >= 100) {
    console.log("Parabéns, você venceu!");
} else {
    console.log("Tente novamente para ganhar.");
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 5000;
let exibirSaldo = alert(`O saldo disponível em sua conta é de R$: ${saldoConta}.`);


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Por favor digite seu nome: ");
alert(`Boas vidas ${nome}`);