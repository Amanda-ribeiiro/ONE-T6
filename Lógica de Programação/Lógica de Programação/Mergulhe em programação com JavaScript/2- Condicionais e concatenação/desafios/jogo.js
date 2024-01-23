// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

class Jogo {
    constructor() {
      this.pontuacao = 0;
    }

    ganharPontos(pontos) {
      this.pontuacao += pontos;
      console.log(`Você ganhou ${pontos} pontos!`);
    }

    // Método para verificar a vitória
    verificarVitoria() {
      if (this.pontuacao >= 100) {
        console.log("Parabéns, você venceu!");
      } else {
        console.log("Tente novamente para ganhar.");
      }
    }
  }

  // Exemplo de uso
  const jogo = new Jogo();

  // Simulação de ações que ganham pontos
  jogo.ganharPontos(30);
  jogo.ganharPontos(50);
  jogo.ganharPontos(20);

  // Verificar se o jogador venceu
  jogo.verificarVitoria();
