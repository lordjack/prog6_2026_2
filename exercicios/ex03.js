///Crie um objeto chamado aluno com as seguintes propriedades:
let aluno = {
  nome: "Carlos",
  idade: 17,
  notas: [8, 7, 9],
};

let soma = 0;
for (let i in aluno.notas) {
  soma += aluno.notas[i];
}
let media = soma / aluno.notas.length;
let status = "REPROVADO";

if (media >= 6) {
  status = "APROVADO";
}

console.log("Nome: " + aluno.nome);
console.log("Média: " + media);
console.log("Nome: " + status);
