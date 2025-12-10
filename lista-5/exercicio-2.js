  let input = require('readline-sync')
    let numeroFinal = input.questionInt("Digite um número final:");

    // Inicializa o contador
    let i = 1;

    // Laço while para percorrer até o número final
    while (i <= numeroFinal) {
      if (i % 2 == 0) {
        console.log(i, " é par");
      } else {
        console.log(i, " é ímpar");
      }
      i++;
    }
