// ============================================================
// GABARITO — Lista 03: map, filter e reduce
// Execute com: node gabarito_lista_03.js
// ============================================================

// ---------- Exercício 1 ----------
let numeros = [2, 4, 6, 8, 10];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i] * 3);
}
console.log("Vetor original não mudou:", numeros);

// ---------- Exercício 2 ----------
var metros = [1, 5, 3, 2];
var milimetros = metros.map(function (elem) {
  return elem * 1000;
});
console.log(milimetros); // [1000, 5000, 3000, 2000]
console.log(metros); // [1, 5, 3, 2] — map NÃO altera o original

// ---------- Exercício 3 ----------
let temperaturas = [18, 22, 30, 35, 12];
let fahrenheit = temperaturas.map(function (elem) {
  return elem * 1.8 + 32;
});
console.log("Fahrenheit:", fahrenheit);

// ---------- Exercício 4 ----------
let triplos = numeros.map((elem) => elem * 3);
for (let i = 0; i < triplos.length; i++) {
  console.log(triplos[i]);
}

// ---------- Exercício 5 ----------
let alunos = [
  { nome: "Maria", nota: 10 },
  { nome: "Rodrigo", nota: 5 },
  { nome: "Gabriela", nota: 3 },
  { nome: "Bruno", nota: 7 },
];

let nomesMaiusculos = alunos.map((elem) => elem.nome.toUpperCase());
console.log("Nomes:", nomesMaiusculos);

// Bônus
let notasBonus = alunos.map((elem) => Math.min(Math.ceil(elem.nota + 0.5), 10));
console.log("Notas com bônus:", notasBonus);

// ---------- Exercício 6 ----------
let aprovados = alunos.filter((elem) => elem.nota >= 7);
for (let i = 0; i < aprovados.length; i++) {
  console.log("Aprovado:", aprovados[i].nome);
}

// ---------- Exercício 7 ----------
let carrinho = [
  { produto: "Coxinha", preco: 6.5 },
  { produto: "Suco", preco: 4.0 },
  { produto: "Chocolate", preco: 3.5 },
  { produto: "Combo Lanche", preco: 12.0 },
];

let baratos = carrinho.filter((elem) => elem.preco < 5.0);
console.log("Produtos baratos:", baratos);

// ---------- Exercício 8 ----------
let filtroDuplo = alunos.filter(
  (elem) =>
    elem.nota >= 7 && (elem.nome.startsWith("B") || elem.nome.startsWith("M")),
);
console.log("Filtro duplo:", filtroDuplo);

// ---------- Exercício 9 ----------
// ES5
let totalES5 = carrinho.reduce(function (prevVal, elem) {
  return prevVal + elem.preco;
}, 0);
console.log("Total (ES5):", totalES5);

// ES6
let totalES6 = carrinho.reduce((prevVal, elem) => prevVal + elem.preco, 0);
console.log("Total (ES6):", totalES6);

// ---------- Exercício 10 ----------
let somaNotas = alunos.reduce((prevVal, elem) => prevVal + elem.nota, 0);
console.log("Soma das notas:", somaNotas);
console.log("Média da turma:", somaNotas / alunos.length);

// ---------- Exercício 11 (Desafio) ----------
let selecoes = [
  { pais: "Alemanha", titulos: 4 },
  { pais: "França", titulos: 2 },
  { pais: "Espanha", titulos: 1 },
  { pais: "Brasil", titulos: 5 },
  { pais: "Argentina", titulos: 3 },
];

// 1) filter
let campeas = selecoes.filter((elem) => elem.titulos >= 2);
console.log("Filtradas:", campeas);

// 2) map
let frases = campeas.map((elem) => elem.pais + ": " + elem.titulos + " títulos");
console.log("Frases:", frases);

// 3) reduce
let totalTitulos = campeas.reduce((prevVal, elem) => prevVal + elem.titulos, 0);
console.log("Total de títulos das filtradas:", totalTitulos);

// versão encadeada (tudo junto)
let totalEncadeado = selecoes
  .filter((elem) => elem.titulos >= 2)
  .reduce((prevVal, elem) => prevVal + elem.titulos, 0);
console.log("Encadeado:", totalEncadeado);

// ---------- Exercício 12 (Desafio) ----------
let turma = [
  { nome: "Maria", nota: 10 },
  { nome: "Rodrigo", nota: 5 },
];

const situacao = (nota = 0, corte = 7) =>
  nota >= corte ? "Aprovado" : "Reprovado";

turma.map(({ nome, nota }) =>
  console.log(nome + " tirou " + nota + " — " + situacao(nota)),
);
