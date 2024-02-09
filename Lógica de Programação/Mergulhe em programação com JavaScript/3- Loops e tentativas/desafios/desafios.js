// Desafios
// 1- Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while(contador <= 10) {
    contador++;
    console.log(contador);
}

// 2- Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contadorM = 10;

while(contadorM >= 0) {
    contador--;
    console.log(contador);
}


// 3- Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contagemRegressiva = prompt("Digite um número: ");

while(contagemRegressiva >= 0){
    console.log(contagemRegressiva);
    contagemRegressiva++;
}


// 4- Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contagemProgressiva = prompt("Digite um número: ");

while(contagemProgressiva <= 0){
    console.log(contagemProgressiva);
    contagemProgressiva++;
}