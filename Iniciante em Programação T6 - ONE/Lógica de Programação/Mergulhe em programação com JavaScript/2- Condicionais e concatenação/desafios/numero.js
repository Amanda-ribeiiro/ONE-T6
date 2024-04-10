// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt("Digite um número: ");
numero = parseFloat(numero);

if (numero > 0) {
    alert(`o número, ${numero}, que você digitou é positivo`)
} else if (numero < 0) {
    alert(`o número, ${numero}, que você digitou é negativo`)
} else {
    alert(`o número, ${numero}, que você digitou é zero ou não é um número válido`)
}