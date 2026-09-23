# Lista de Exercícios — Slide 03
## JavaScript — Funções map, filter e reduce

**Curso:** Técnico Integrado em Desenvolvimento de Sistemas
**Aulas:** 1 e 2 (13:30 às 15:20 — 110 min)
**Base:** Slide 03 - JavaScript - Funções map, filter e reduce
**Como executar:** `node exXX.js` (pasta raiz do projeto)

---

## Sugestão de cronograma

| Horário | Atividade |
|---|---|
| 13:30 – 13:50 | Revisão oral + Aquecimento (Ex. 1 e 2) com a turma |
| 13:50 – 14:20 | Parte 1 — map (Ex. 3 a 5) |
| 14:20 – 14:50 | Parte 2 — filter (Ex. 6 a 8) |
| 14:50 – 15:05 | Intervalo de 15 min |
| 15:05 – 15:20 | Parte 3 — reduce (Ex. 9 e 10) + Desafio (Ex. 11) para os que terminarem |

> **Dica:** faça o Ex. 1 e o Ex. 3 no quadro/projetor junto com os alunos antes de liberar os demais. Os exercícios marcados com ⭐ usam **array de objetos** (nível intermediário) e os marcados com 🔥 são desafios.

---

## Aquecimento (em dupla, com acompanhamento do professor)

### Exercício 1 — Relembrando laços
Sem usar `map`, percorra o vetor abaixo com `for` e imprima cada número multiplicado por 3:

```js
let numeros = [2, 4, 6, 8, 10];
```

Depois, responda em dupla: *"o que mudou no vetor original?"* (Resposta: nada — foi só impressão.)

### Exercício 2 — Prevendo a saída
Antes de executar, anotem no caderno o que será impresso. Depois rodem com `node` e confiram:

```js
var metros = [1, 5, 3, 2];
var milimetros = metros.map(function (elem) {
  return elem * 1000;
});
console.log(milimetros);
console.log(metros);
```

Pergunta para a dupla: por que o vetor `metros` não mudou?

---

## Parte 1 — Função map

### Exercício 3 — Convertendo temperaturas
Usando `map` (sintaxe ES5 com `function`), converta as temperaturas de Celsius para Fahrenheit ($F = C \times 1{,}8 + 32$) e imprima o novo vetor:

```js
let temperaturas = [18, 22, 30, 35, 12];
```

### Exercício 4 — Dobro com arrow function
Refaça o Exercício 1 usando `map` com **arrow function** (sintaxe ES6) e guarde o resultado em um novo vetor chamado `triplos`. Imprima o vetor com um `for`.

### Exercício 5 ⭐ — Boletim escolar
Dado o array de objetos abaixo, use `map` para gerar um novo vetor contendo **apenas os nomes em letras maiúsculas** (pesquisem: `toUpperCase()`):

```js
let alunos = [
  { nome: "Maria", nota: 10 },
  { nome: "Rodrigo", nota: 5 },
  { nome: "Gabriela", nota: 3 },
  { nome: "Bruno", nota: 7 }
];
```

**Bônus:** gere um segundo vetor com as notas **arredondadas para cima** (`Math.ceil`) após aplicar um bônus de 0,5 ponto em cada nota (sem ultrapassar 10).

---

## Parte 2 — Função filter

### Exercício 6 — Aprovados
Usando o vetor `alunos` do Exercício 5, use `filter` para obter apenas os alunos com **nota maior ou igual a 7**. Imprima o nome de cada aprovado com um `for`.

### Exercício 7 — Carrinho da cantina
Dado o carrinho abaixo, use `filter` (arrow function) para listar apenas os produtos que custam **menos de R$ 5,00**:

```js
let carrinho = [
  { produto: "Coxinha", preco: 6.5 },
  { produto: "Suco", preco: 4.0 },
  { produto: "Chocolate", preco: 3.5 },
  { produto: "Combo Lanche", preco: 12.0 }
];
```

### Exercício 8 ⭐ — Filtro com duas condições
Ainda com o vetor `alunos`, filtre os alunos que estão **aprovados E cujo nome começa com a letra "B" ou "M"** (pesquisem: `startsWith()`).

---

## Parte 3 — Função reduce

### Exercício 9 — Soma do carrinho
Usando o vetor `carrinho` do Exercício 7, use `reduce` para calcular o **valor total** da compra. Faça primeiro com sintaxe ES5 e depois com arrow function (ES6), como no exemplo das seleções do slide.

### Exercício 10 ⭐ — Média da turma
Usando o vetor `alunos` do Exercício 5, use `reduce` para somar todas as notas e, em seguida, calcule a **média da turma**. Imprima no formato:

```
Soma das notas: 25
Média da turma: 6.25
```

---

## Desafio final

### Exercício 11 🔥 — Copa do Mundo
Baseado no exemplo do slide (seleções e títulos):

```js
let selecoes = [
  { pais: "Alemanha", titulos: 4 },
  { pais: "França", titulos: 2 },
  { pais: "Espanha", titulos: 1 },
  { pais: "Brasil", titulos: 5 },
  { pais: "Argentina", titulos: 3 }
];
```

Encadeie as três funções em sequência:

1. **`filter`**: selecione apenas as seleções com 2 ou mais títulos;
2. **`map`**: a partir do resultado, gere frases no formato `"Brasil: 5 títulos"`;
3. **`reduce`**: some o total de títulos **somente das seleções filtradas**.

### Exercício 12 🔥 — Destructuring + parâmetros default
Reescreva a função abaixo usando **arrow function com parâmetros default** e **destructuring assignment** para extrair `nome` e `nota` dentro do `map`:

```js
let alunos = [
  { nome: "Maria", nota: 10 },
  { nome: "Rodrigo", nota: 5 }
];

// meta: imprimir "Maria tirou 10" e "Rodrigo tirou 5"
// usando: alunos.map(({ nome, nota }) => ...)
```

**Bônus:** crie uma função `situacao(nota = 0, corte = 7)` que retorne `"Aprovado"` ou `"Reprovado"` e use-a dentro do `map`.

---

## Para casa (opcional)
Pesquise na [documentação da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) uma função de array que **não** vimos em aula (`find`, `some`, `every` ou `sort`) e traga um exemplo de 5 linhas funcionando para mostrar na próxima aula.
