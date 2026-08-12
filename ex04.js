//crie 3 vetores com 5 elementos, um para nomes, idades, outro para notas
// imprima o primeiro vetor com os nomes com as respectivas idades
// e no fim imprima as notas.
// utilize o laço de repetição while, for e o for dinamico
// no laço while, crie uma função soma para imprimir a idade somando 10 anos
// no for dinamico, crie uma função chamada mult faça uma mult 2 / 5 das notas
let nomes = ["Jackson", "Chiquinha", "Chaves", "Seu Madruga"];
let idades = [38, 17, 16, 58];
let notas = [10, 9, 6, 5];

for (let i = 0; i < nomes.length; i++) {
  console.log(
    "Nome: " + nomes[i] + " Idade: " + idades[i] + " Notas:" + notas[i],
  );
}

var soma = function (idades) {
  let cont = 0;
  while (cont < idades.length) {
    console.log(idades[i] + 10);
    cont++;
  }
};
soma(idades);

let mult = (notas) => {
  for (let i in notas) {
    console.log((notas[i] * 2) / 5);
  }
};
mult(notas);


// crie uma arrow function que imprima o dobro do numero
// crie uma função anonima que verifique se o numero é par