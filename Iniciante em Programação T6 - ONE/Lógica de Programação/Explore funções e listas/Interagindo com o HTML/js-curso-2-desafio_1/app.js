// 2- Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// 3- Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole() {
    console.log('O botão foi clicado');
}

// 4- Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlert() {
    alert('Eu amo JS');
}

// 5- Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// 6- Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function botaoSoma() {
    let n1 = parseFloat(prompt('Digite o primeiro número: '));
    let n2 = parseFloat(prompt('Digite o segundo número: '));

    if (!isNaN(n1) && !isNaN(n2)) {
        let soma = n1 + n2;
        alert(`O resultado da soma é: ${soma}`);
    } else {
        alert('Por favor, digite um valor numérico válido!');
    }
}
