 let input = require('readline-sync')    
 let numero = input.questionInt("Digite um número para ver a tabuada:");

    // Gera a tabuada de 1 a 10
    let resultado = "Tabuada do " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
      resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    // Exibe o resultado
    console.log(resultado);
