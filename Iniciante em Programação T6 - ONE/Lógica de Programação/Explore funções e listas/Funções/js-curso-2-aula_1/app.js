gerarNumeroAleatorio();

function campos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

campos('h1', 'Jogo do número Secreto!');
campos('p', 'Selecione um número entre 0 e 10: ');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == gerarNumeroAleatorio);
}

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}