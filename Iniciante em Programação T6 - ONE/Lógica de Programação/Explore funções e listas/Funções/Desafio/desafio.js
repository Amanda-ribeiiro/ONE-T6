// 1- Criar uma função que exibe "Olá, mundo!" no console.

function exibir () {
    console.log('Olá, mundo!');
}
exibir();

// 2- Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome () {
    let nome = prompt('Digite seu nome: ');
    console.log(`Olá, ${nome}!`);
}
exibirNome();

// 3- Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function numeroEmDobro (numero) {
    return numero * 2;
}
console.log(numeroEmDobro(17));

// 4- Criar uma função que recebe três números como parâmetros e retorna a média deles.
function numeroTriplo (n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return (`A média dos três números e ${media} `);
}
console.log(numeroTriplo(11,75,13));

// 5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function  maiorNumero(x, y){
    if(x > y)
        return x;
    else
        return y;
}
console.log(maiorNumero(7,9));

// 6- Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao (number) {
    return number *number;
}
console.log(multiplicacao(5));