const prompt = require("prompt-sync")();

let vetorSoma = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  vetorSoma[i] = parseInt(prompt("Digite um numero: "));
  soma += vetorSoma[i];
}

console.log(soma);
