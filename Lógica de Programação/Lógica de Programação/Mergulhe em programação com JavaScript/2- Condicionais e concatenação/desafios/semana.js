//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt("Digite qual é o dia da semana: ");


if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
    console.log("Bom fim de semana!");
} else {
    console.log("Boa semana!");
}