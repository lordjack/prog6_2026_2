let vetor = [5, 10, 15, 20, 25];
let dados = "";
for (let i = 0; i < vetor.length; i++) {
  if (i == vetor.length - 1) {
    dados += vetor[i] * 2 + " ";
  } else {
    dados += vetor[i] * 2 + ", ";
  }

}
console.log(dados);
