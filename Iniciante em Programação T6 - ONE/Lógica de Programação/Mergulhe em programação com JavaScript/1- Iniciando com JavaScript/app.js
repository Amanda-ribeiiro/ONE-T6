// alerta exibido na tela
alert("Bem vindo ao jogo do número secreto. Vamos iniciar!")

// definir variáve do número secreto
let numeroSecreto = 29;

// definir número digitado pelo usuário
let chute = prompt("Escolha um número entre 1 e 10");

if (chute == numeroSecreto) {
    console.log("Parabéns você acertou o número secreto", chute, "!");
} else {
    console.log("Você errou tente novamente");
}