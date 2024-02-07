// 1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularImc (){
    let peso = prompt('Digite seu peso: ');
    let altura = prompt ('Digite sua altura em metros: ')

    let pegulasParaMetros = 0.0254;
    altura = altura * pegulasParaMetros;

    if(peso == '' || altura == ''){
        alert("Preencha todos os campos!");
    }else {
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        let imc = peso / (altura*altura);
        let classificação = '';

        if (imc < 18.5) {
            classificação = 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc < 23.9) {
            classificação = 'Normal';
        } else if (imc >= 23.9 && imc < 27.9) {
            classificação = 'Sobrepeso';
        } else if (imc >= 27.9 && imc < 32.1) {
            classificação = 'Obesidade Grau I';
        } else if (imc >= 32.1 && imc < 37.5) {
            classificação = 'Obesidade Grau II';
        } else {
            classificação = 'Obesidade Mórbida';
        }
        document.write("<p>Seu IMC é " + imc.toFixed(2) + "</p>");
        document.write("<p>Classificação: " +classificação+ "</p>");
    }
}

// 2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }

  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);


// 3- Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversao(dolares) {
    let valorDolar = 5.50;
    let real = valorDolar * dolares;
    return real.toFixed(2);
}

let dolares = 900;
let real = conversao(dolares);
console.log(`${dolares} dólares equivalem a R$ ${real}.`);

// 4- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function perimetroSala(altura, largura) {
    let areaSala = altura * largura;
    let perimentoAreaSala = 2 * (altura + largura);

    console.log(`A área da sala é ${areaSala.toFixed(2)} metros quadrados.`);
    console.log(`O perímetro da sala é ${perimentoAreaSala.toFixed(2)} metros.`);
}

let altura = 17;
let largura = 90;
perimetroSala(altura, largura);

// 5- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetro(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`A área da sala circular é ${area.toFixed(2)} metros quadrados.`);
    console.log(`O perímetro da sala circular é ${perimetro.toFixed(2)} metros.`);
}

let raio = 4;
areaPerimetro(raio);


// 6- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 0; i < numero; i++) {
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}
tabuada(8);
