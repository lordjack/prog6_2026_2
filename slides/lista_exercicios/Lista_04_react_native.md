# Lista de Exercícios — Slide 04
## Introdução ao React Native

**Curso:** Técnico Integrado em Desenvolvimento de Sistemas
**Aulas:** 3 e 4 (15:40 às 17:30 — 110 min)
**Base:** Slide 04 - Introdução ao React-Native
**Onde praticar:** emulador online [Snack Expo](https://snack.expo.dev) (não precisa instalar nada) **ou** projeto local com `npx create-expo-app@latest nomeProjeto` + `npx expo start`

---

## Sugestão de cronograma

| Horário | Atividade |
|---|---|
| 15:40 – 16:00 | Setup: abrir o Snack Expo ou criar o projeto Expo + Ex. 1 (Olá Mundo) com a turma |
| 16:00 – 16:25 | Parte 1 — JSX e Elementos (Ex. 2 e 3) |
| 16:25 – 16:50 | Parte 2 — Componentes e Props (Ex. 4 e 5) |
| 16:50 – 17:05 | Intervalo de 15 min |
| 17:05 – 17:30 | Parte 3 — State e Estilos (Ex. 6 e 7) + Desafio integrador (Ex. 8) |

> **Importante:** se os computadores tiverem 4GB de RAM ou menos, prefira o **Snack Expo** no navegador ou o app **Expo Go** no próprio celular (lendo o QR Code). Todos os exercícios funcionam no Snack.

---

## Parte 1 — JSX e Elementos

### Exercício 1 — Olá Mundo (com o professor)
Edite o `App.js` para exibir na tela o texto **"Olá Mundo!"** usando os componentes `View` e `Text`. Depois personalize: adicione um segundo `Text` com o seu nome.

```jsx
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Olá Mundo!</Text>
    </View>
  );
}
```

### Exercício 2 — JSX com expressões
Crie um componente `Ola` que receba um `name` por props e exiba `"Hello, {name}"`. Chame-o dentro do `App` passando o seu nome.

> Lembrete do slide: **aspas duplas** para strings literais, **chaves** para expressões JavaScript.

### Exercício 3 ⭐ — Galeria
Reproduza o exemplo da galeria do slide: um componente `Profile` que exibe uma `Image` a partir de uma URL (pode ser a foto de uma pessoa que você admira) e um `App` que renderiza **três** `<Profile />`. Ajuste `width` e `height` no `style` para 100.

```jsx
<Image
  style={{ width: 100, height: 100 }}
  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
/>
```

> Por que duas chaves em `source={{ uri: ... }}`? A primeira é o JavaScript, a segunda é o objeto. Discuta em dupla.

---

## Parte 2 — Componentes e Props

### Exercício 4 — Componente com 3 props
*(exercício 1 do slide)* Crie um componente que receba **3 propriedades** por meio de `props` e exiba-as na tela. Sugestão: um componente `Aluno` com `nome`, `curso` e `idade`. Chame-o **3 vezes** com dados de colegas da turma (componentes compostos).

### Exercício 5 ⭐ — Componente de classe
Reescreva o componente `Welcome` do slide no formato de **classe** (`class ... extends React.Component` com método `render()` e `this.props`). Depois responda:

1. Qual método é obrigatório em um componente de classe?
2. Como se acessa uma prop dentro da classe?

---

## Parte 3 — State e Estilos

### Exercício 6 — Contador com useState
Crie um componente de função com `useState` que exiba uma **contagem** e um `Button` com o título "Incrementar". A cada clique, some 1. Em seguida, adicione um segundo botão **"Zerar"** que volta a contagem para 0.

```jsx
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  // complete aqui...
}
```

### Exercício 7 ⭐ — Estilizando com StyleSheet
Estilize o app do Exercício 6 usando `StyleSheet.create`:

- `View` centralizada (`flex: 1`, `alignItems: 'center'`, `justifyContent: 'center'`);
- fundo com a cor favorita da dupla (`backgroundColor` — atenção ao **camelCase**!);
- o `Text` da contagem com `fontSize: 40` e `color` personalizada.

> Regra do React: os componentes **não devem alterar os valores de suas props** (somente leitura). O que muda é o **state**!

---

## Desafio final

### Exercício 8 🔥 — Números da Mega-Sena
*(exercício 2 do slide)* Crie um componente de função que gere **6 números da sorte aleatórios** para a mega-sena usando `state`. Regras:

- Os números devem estar entre **1 e 99** (`Math.floor(Math.random() * 99) + 1`);
- Um botão **"Gerar números"** sorteia uma nova sequência;
- Exiba os 6 números na tela (dica: guarde um **array** no state e use `map` para renderizar — vocês já sabem `map` da aula de hoje!);
- **Bônus:** não deixe números repetidos na sequência (dica: `includes()` ou `filter`).

### Exercício 9 🔥 — Carro Premiado
*(exercício 3 do slide — versão simplificada com função)* Crie um app que:

1. Mostre a mensagem **"Sorteando..."** ao abrir;
2. Após **5 segundos** (pesquisem: `setTimeout` dentro de `useEffect`), exiba um componente `Carro` com modelo, cor e placa vindos por **props**;
3. Exiba também uma mensagem parabenizando o ganhador com seu **número da sorte** aleatório entre **1000 e 5000**.

```jsx
// dica de estrutura
const [carregou, setCarregou] = useState(false);

useEffect(() => {
  setTimeout(() => setCarregou(true), 5000);
}, []);
```

> Quem terminar o Ex. 8 e 9: tente a versão com **componente de classe** usando `componentDidMount`, como no enunciado original do slide.

---

## Lista de presença de conceitos (autoavaliação)
Marque o que você consegue fazer sozinho ao final da aula:

- [ ] Criar um projeto Expo e executar no emulador/celular/Snack
- [ ] Escrever JSX com `View`, `Text`, `Image` e `Button`
- [ ] Criar componentes de função e reutilizá-los várias vezes
- [ ] Passar e ler `props` (em função e em classe)
- [ ] Usar `useState` para atualizar a tela
- [ ] Estilizar com `StyleSheet` usando camelCase
- [ ] Usar `map` para renderizar listas
