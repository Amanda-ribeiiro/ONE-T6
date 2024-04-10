// Function Declaration

palavraPalindromo();
function palavraPalindromo () {
    var palavra = "rever";
    var separarLetrasPalavras = palavra.split("");
    var palavraInvertida = separarLetrasPalavras.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log("A palavra" + palavra + "é um palíndromo!");
    } else {
        console.log("A palavra" + palavra + "não é um palíndromo!");
    }
}



// Function Expression: apenas const

const palavraPalindromo = function (palavra) {
    var separarLetrasPalavras = palavra.split("");
    var palavraInvertida = separarLetrasPalavras.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log("A palavra" + palavra + "é um palíndromo!");
    } else {
        console.log("A palavra" + palavra + "não é um palíndromo!");
    }
}
palavraPalindromo("radar");