# Lista de Exercícios — Slide 06
## Flexbox no React Native: Prática Integradora

**Curso:** Técnico Integrado em Desenvolvimento de Sistemas / Desenvolvimento para Dispositivos Móveis  
**Carga Horária:** 4 aulas de 50 minutos (200 min total)
- **Aula 1 (50 min):** Apresentação dos Slides (Slide 05 — Fundamentos de Flexbox)
- **Aulas 2, 3 e 4 (150 min):** Prática Guiada + Exercícios de Fixação + Desafios Práticos
**Base:** Slide 05 - Estilizando Componentes com Flexbox  
**Onde praticar:** [Snack Expo](https://snack.expo.dev) (recomendado — sem instalação) ou projeto local com `npx create-expo-app@latest nomeProjeto` + `npx expo start` / Expo Go no celular

---

## 📅 Cronograma Sugerido das Aulas Práticas

| Aula / Bloco | Duração | Conteúdo & Atividades |
|---|---|---|
| **Aula 2** | 50 min | **Revisão + Layouts com Proporções:** `flex`, `flexDirection`, `width`/`height` fixos vs flexíveis. *(Exercícios 1, 2 e 3 guiados; Exercício 4 prático)* |
| **Aula 3** | 50 min | **Alinhamentos e Componentes Reutilizáveis:** `justifyContent`, `alignItems`, `alignSelf`, `StyleSheet`. *(Exercícios 5 e 6 guiados; Exercício 7 prático)* |
| **Aula 4** | 50 min | **Desafios Integradores:** reprodução de layouts reais de apps (Header/Content/Footer, cards, grid, tab bar). *(Exercícios 8 e 9 guiados; Desafio Master 10)* |

> **Dica de aula:** comece cada exercício guiado resolvendo o primeiro item junto com a turma no projetor. Depois libere os demais itens para os alunos praticarem em dupla. Os exercícios marcados com ⭐ são intermediários e os marcados com 🔥 são desafios.

---

## 🎯 Aula 2 — Proporções, Direção e Tamanhos Fixos

### Exercício 1 — Relembrando o básico (com o professor)
Crie um app com três blocos coloridos que ocupem a tela toda na vertical:

- **Bloco superior:** `flex: 2`, cor `#ef4444` (vermelho)
- **Bloco do meio:** `flex: 5`, cor `#3b82f6` (azul)
- **Bloco inferior:** `flex: 3`, cor `#22c55e` (verde)

Cada bloco deve conter um `Text` centralizado mostrando a proporção que ocupa (ex: `"2/10"`, `"5/10"`, `"3/10"`).

**Perguntas para discutir em dupla:**
1. Qual a soma total dos `flex`?
2. Se o bloco do meio mudar para `flex: 2`, qual a nova proporção da tela para cada bloco?
3. Por que o React Native usa `column` como padrão para `flexDirection`?

---

### Exercício 2 — Mudando a direção
Usando os mesmos três blocos do exercício anterior, altere o container para testar as quatro variações de `flexDirection`:

1. `column`
2. `column-reverse`
3. `row`
4. `row-reverse`

Para cada variação, anote:
- Qual é o eixo principal?
- Qual é o eixo transversal?
- Onde fica o bloco vermelho em cada caso?

---

### Exercício 3 ⭐ — Header, Content e Footer reutilizáveis
Crie uma tela com a estrutura abaixo, usando **tamanhos fixos** para Header e Footer, e `flex: 1` para o conteúdo:

- **Header:** `height: 70`, cor de fundo `#1e293b`, texto branco centralizado (`IFSC Mobile`)
- **Content:** `flex: 1`, cor de fundo `#f1f5f9`, texto cinza escuro centralizado (`Conteúdo Principal`)
- **Footer:** `height: 60`, cor de fundo `#334155`, texto branco centralizado (`Desenvolvido por [seu nome]`)

**Desafio rápido:** troque a direção do container para `'row'`. O que acontece com o layout? Por quê?

---

### Exercício 4 — Prática individual / em dupla
Reproduza a seguinte tela de **perfil de usuário** usando apenas `View`, `Text`, `Image` e `StyleSheet`:

```
┌─────────────────────────────┐
│  [Foto circular 120x120]    │
│                             │
│      Maria da Silva         │
│    maria.silva@email.com    │
│                             │
│  ┌─────┐ ┌─────┐ ┌─────┐   │
│  │ 12  │ │ 48  │ │ 305 │   │
│  │Posts│ │Seg. │ │Segds│   │
│  └─────┘ └─────┘ └─────┘   │
│                             │
└─────────────────────────────┘
```

**Requisitos:**
- A tela inteira deve ter `flex: 1` e fundo branco.
- A foto deve ser centralizada horizontalmente e ter `borderRadius: 60` para ficar circular.
- O nome e o e-mail devem estar centralizados.
- As três estatísticas devem ficar lado a lado (`flexDirection: 'row'`) com espaçamento igual (`justifyContent: 'space-evenly'`).
- Use uma URL de imagem qualquer (pode ser a mesma do slide 04 ou outra).

> **Dica:** cada estatística pode ser um `View` com `alignItems: 'center'`.

---

## 🎯 Aula 3 — Alinhamentos e Componentização

### Exercício 5 — O painel de alinhamentos (com o professor)
Crie um container com `flex: 1`, `flexDirection: 'row'` e três quadrados de 80x80 de cores diferentes. Teste **todos os valores** de `justifyContent` e `alignItems` combinados:

**Valores de `justifyContent`:** `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`  
**Valores de `alignItems`:** `flex-start`, `center`, `flex-end`, `stretch`

Para cada combinação, desenhe no caderno como fica o layout antes de executar. Depois confira no emulador.

**Pergunta:** por que `alignItems: 'stretch'` não funciona quando os quadrados têm `height` fixo?

---

### Exercício 6 ⭐ — Componente `Card` com props
Crie um componente reutilizável chamado `Card` que receba as props:
- `titulo` (string)
- `cor` (string, exemplo: `'#e11d48'`)
- `tamanho` (número, representando o `flex`)

O componente deve renderizar um `View` colorido ocupando a proporção indicada por `tamanho`, com um `Text` centralizado mostrando o título.

Depois, no `App`, renderize **três `Card`** com tamanhos diferentes (1, 2 e 3) e observe a divisão da tela.

```jsx
// Exemplo de uso esperado:
<Card titulo="Menu" cor="#e11d48" tamanho={1} />
<Card titulo="Conteúdo" cor="#2563eb" tamanho={2} />
<Card titulo="Extras" cor="#16a34a" tamanho={3} />
```

---

### Exercício 7 — Prática individual / em dupla
Crie a tela de um **aplicativo de receitas** com a estrutura abaixo:

```
┌─────────────────────────────┐
│        Receitas Fáceis      │  ← Header fixo, altura 70
├─────────────────────────────┤
│                             │
│   [Imagem de comida 200x120]│
│                             │
│      Bolo de Chocolate      │
│     Tempo: 45 minutos       │
│                             │
│   [Linha de ingredientes]   │
│   Farinha  Açúcar  Chocolate│
│                             │
├─────────────────────────────┤
│  Início   Buscar   Perfil   │  ← Footer fixo, altura 60
└─────────────────────────────┘
```

**Requisitos:**
- Header e Footer com altura fixa.
- Content com `flex: 1` e centralizado.
- A imagem da receita deve ter `width: 200`, `height: 120`, `borderRadius: 10`.
- Os ingredientes devem ficar lado a lado com `flexDirection: 'row'` e `justifyContent: 'space-around'`.
- O Footer deve ter três textos distribuídos horizontalmente.

---

## 🎯 Aula 4 — Desafios Integradores

### Exercício 8 — Tab Bar inferior funcional (com o professor) ⭐
Crie um app com **Tab Bar inferior** que alterne entre duas telas ao tocar nos botões:

**Telas:**
1. `Home` — mostra o texto `"Página Inicial"` centralizado.
2. `Configuracoes` — mostra o texto `"Configurações"` centralizado.

**Layout:**
- Header fixo com título `"Meu App"`.
- Área de conteúdo central (`flex: 1`) que mostra a tela ativa.
- Footer fixo com dois botões lado a lado: `"Home"` e `"Config"`.

**Comportamento:**
- Use `useState` para guardar a tela ativa (`telaAtiva`).
- Ao tocar em `"Home"`, a tela muda para Home.
- Ao tocar em `"Config"`, a tela muda para Configuracoes.
- O botão ativo deve ter cor de fundo diferente do inativo.

> **Dica:** cada botão pode ser um `TouchableOpacity` dentro de uma `View` com `flexDirection: 'row'`. Use `style` condicional para destacar o botão ativo.

---

### Exercício 9 ⭐⭐ — Calculadora visual (layout de grid)
Reproduza o layout visual de uma **calculadora simples**:

```
┌─────────────────────────────┐
│                         0   │  ← Display fixo, altura 120
├─────────────────────────────┤
│  C   ⌫   %   ÷              │
│  7   8   9   ×              │
│  4   5   6   -              │
│  1   2   3   +              │
│  0   .   =                  │
└─────────────────────────────┘
```

**Requisitos:**
- Display na parte superior com altura fixa de 120, fundo escuro (`#1e293b`) e texto branco alinhado à direita.
- Teclado abaixo ocupando o restante da tela (`flex: 1`).
- Os botões devem ser organizados em **linhas** (`flexDirection: 'row'`), e cada linha deve ter `flex: 1` para ocupar a altura disponível igualmente.
- Cada botão deve ser um `View` com `flex: 1`, borda fina, texto centralizado.
- Não é necessário fazer a lógica da calculadora funcionar — apenas o layout.

> **Dica:** crie um componente `Botao` reutilizável que recebe `label` e `cor` por props.

---

### Desafio Master 10 🔥 — Feed de Rede Social
Crie a tela inicial de um **feed de rede social** com a seguinte estrutura:

```
┌─────────────────────────────┐
│  InstaCode        [camera]  │  ← Header fixo
├─────────────────────────────┤
│  [Stories]                  │
│  [o] [o] [o] [o] [o]        │  ← Scroll horizontal
├─────────────────────────────┤
│                             │
│  [Foto grande]              │
│  ❤️  💬  ✈️                  │
│  Curtido por alguém         │
│  Descrição da foto...       │
│                             │
│  [Foto grande]              │
│  ❤️  💬  ✈️                  │
│  Curtido por outro          │
│  Outra descrição...         │
│                             │
├─────────────────────────────┤
│  🏠  🔍  ➕  ❤️  👤          │  ← Tab bar fixa
└─────────────────────────────┘
```

**Requisitos:**
- Header fixo com altura 60, com título à esquerda e um ícone/texto à direita.
- Stories em uma linha horizontal rolável (`ScrollView` com `horizontal={true}`).
- Feed rolável verticalmente (`ScrollView`).
- Cada post deve ter:
  - Foto quadrada ou retangular (use `width: '100%'`, `height: 300`).
  - Barra de ações com ícones/textos lado a lado.
  - Texto de "curtido por" e descrição.
- Tab bar inferior fixa com 5 itens distribuídos igualmente (`justifyContent: 'space-around'`).

> **Desafio extra:** torne os ícones de curtida clicáveis usando `TouchableOpacity` e mude a cor ao tocar.

---

## ✅ Critérios de Avaliação (para o professor)

| Critério | Peso |
|---|---|
| Uso correto de `flex`, `flexDirection`, `justifyContent` e `alignItems` | 40% |
| Componentização (reutilização de componentes com props) | 20% |
| Uso adequado de `StyleSheet` e estilos organizados | 20% |
| Funcionalidade (state, cliques, scroll quando aplicável) | 10% |
| Criatividade e fidelidade ao layout proposto | 10% |

---

## 📤 Entrega

- Os exercícios práticos (4, 7, 9 e 10) podem ser entregues como **prints do emulador/celular** + **código no Snack Expo** (link compartilhável) ou **arquivos .js/.jsx**.
- O Desafio Master 10 pode valer nota extra ou ser proposto como trabalho em duplas.

---

*Material elaborado para a disciplina de Programação para Dispositivos Móveis — IFSC.*
