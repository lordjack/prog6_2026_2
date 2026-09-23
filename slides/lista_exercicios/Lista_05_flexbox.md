# Lista de Exercícios — Slide 05
## Estilizando Componentes com Flexbox no React Native

**Curso:** Técnico Integrado em Desenvolvimento de Sistemas / Desenvolvimento para Dispositivos Móveis  
**Carga Horária:** 4 aulas de 50 minutos (200 min total)  
- **Aula 1 (50 min):** Apresentação dos Slides (Fundamentos e Teoria do Flexbox)  
- **Aulas 2, 3 e 4 (150 min):** Prática Guiada com o Professor + Exercícios e Desafios Práticos  
**Base:** Slide 05 - Estilizando Componentes com Flexbox  
**Onde praticar:** [Snack Expo](https://snack.expo.dev) (no navegador) ou projeto local com `npx expo start` / Expo Go no celular  

---

## 📅 Cronograma Sugerido de Aulas

| Aula / Bloco | Duração | Conteúdo & Atividades |
|---|---|---|
| **Aula 1** | 50 min | **Apresentação Teórica:** Conceito do Flexbox, Eixo Principal (*Main Axis*) vs Eixo Cruzado (*Cross Axis*), proporções com `flex`, `flexDirection`, `justifyContent`, `alignItems`, `flexWrap`, `alignContent` e `alignSelf`. |
| **Aula 2** | 50 min | **Prática Guiada 1 (com o professor):** Proporções de tela com `flex` (1, 2, 3), direções com `flexDirection` e combinação de tamanhos fixos (`width`/`height`) com flexíveis. *(Exercícios 1, 2 e 3)* |
| **Aula 3** | 50 min | **Prática Guiada 2 (com o professor):** Alinhamentos no eixo principal (`justifyContent`), no eixo transversal (`alignItems`), elementos rebeldes com `alignSelf` e quebras de linha com `flexWrap` + `alignContent`. *(Exercícios 4, 5 e 6)* |
| **Aula 4** | 50 min | **Desafios e Aplicação Real (Trabalho prático individual ou em duplas):** Construção de layouts reais de aplicativos (Header + Content + Footer/Tab Bar, Card de Perfil e Teclado de Calculadora / Grid). *(Exercícios 7, 8 e Desafio Master 9)* |

---

## 🎯 Aula 2 — Proporções de Tela e Direção (Flex & FlexDirection)

> **Dica do Slide:** Quando temos vários componentes com `flex`, o React Native soma todos os valores (ex: `1 + 2 + 3 = 6`) e divide a tela proporcionalmente (1/6, 2/6 e 3/6 da tela).

### Exercício 1 — O Experimento das Proporções (com o professor)
Crie uma tela dividida verticalmente em três blocos coloridos para testar a distribuição de espaço do Flexbox:
- **Bloco Vermelho (`#e74c3c`):** `flex: 1`
- **Bloco Amarelo (`#f1c40f`):** `flex: 2`
- **Bloco Verde (`#2ecc71`):** `flex: 3`

```jsx
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vermelho}><Text style={styles.texto}>1/6 (flex: 1)</Text></View>
      <View style={styles.amarelo}><Text style={styles.texto}>2/6 (flex: 2)</Text></View>
      <View style={styles.verde}><Text style={styles.texto}>3/6 (flex: 3)</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%', // Necessário na aba Web do Snack Expo
    width: '100%',
  },
  vermelho: { flex: 1, backgroundColor: '#e74c3c', justifyContent: 'center', alignItems: 'center' },
  amarelo: { flex: 2, backgroundColor: '#f1c40f', justifyContent: 'center', alignItems: 'center' },
  verde: { flex: 3, backgroundColor: '#2ecc71', justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
});
```

> **💡 Dica de Ouro (Snack Expo no navegador):** No celular (ou nas abas **Android** / **iOS** do Snack), apenas `flex: 1` já ocupa a tela toda. Porém, quando executamos na aba **Web** (React Native Web), o navegador exige `height: '100%'` e `width: '100%'` no `container` raiz para não encolher o conteúdo!

*Desafio rápido na bancada:* O que acontece se você mudar o bloco vermelho para `flex: 2` e o verde para `flex: 2`? Em quantas partes a tela passa a ser dividida?

---

### Exercício 2 — Dominando o `flexDirection`
Pegue os 3 blocos do exercício anterior e altere a propriedade `flexDirection` do `container` para:
1. `'row'` (horizontal, da esquerda para a direita)
2. `'row-reverse'` (horizontal invertido)
3. `'column-reverse'` (vertical de baixo para cima)

Observe o comportamento e responda: por que no React Native o padrão é `'column'` enquanto na Web padrão é `'row'`?

---

### Exercício 3 — Tamanhos Fixos vs Flexíveis
Crie uma tela com:
1. Uma **Barra de Topo (Header)** fixa com `height: 80` e fundo azul escuro (`#1e293b`);
2. Um **Corpo Central (Conteúdo)** que ocupe todo o restante do espaço disponível na tela (`flex: 1`) com fundo claro (`#f8fafc`);
3. Uma **Barra Inferior (Footer)** fixa com `height: 60` e fundo cinza escuro (`#334155`).

> **Ponto-chave:** Usar `flex: 1` no elemento central faz com que ele se adapte a qualquer tamanho de smartphone automaticamente!

---

## 🎯 Aula 3 — Alinhamentos e Quebra de Linha (Justify, Align & Wrap)

### Exercício 4 — O Eixo Principal (`justifyContent`)
Crie um container com `flexDirection: 'row'` e coloque **3 quadradinhos** de tamanho fixo (`width: 60`, `height: 60`).  
Teste os 6 valores possíveis de `justifyContent` no container e anote a diferença visual:
- `flex-start`
- `center`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

```jsx
// Estrutura base para testes
<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
  <View style={{ width: 60, height: 60, backgroundColor: '#e11d48' }} />
  <View style={{ width: 60, height: 60, backgroundColor: '#2563eb' }} />
  <View style={{ width: 60, height: 60, backgroundColor: '#16a34a' }} />
</View>
```

---

### Exercício 5 — Centralização Perfeita e o Elemento Rebelde (`alignSelf`)
*(Exemplo das páginas 35 e 36 do slide)*

1. Crie uma tela onde o container alinha todos os seus filhos à esquerda (`alignItems: 'flex-start'`).
2. Adicione **4 retângulos** coloridos (vermelho, amarelo, verde e roxo) com `width: 120` e `height: 80`.
3. Aplique a propriedade `alignSelf: 'flex-end'` **somente** no bloco vermelho.
4. Aplique `alignSelf: 'center'` no bloco roxo.

> **Conceito:** O `alignSelf` sobrescreve a regra imposta pelo pai (`alignItems`) especificamente para aquele componente filho!

---

### Exercício 6 — Quebra de Linha e Alinhamento em Grade (`flexWrap` + `alignContent`)
*(Páginas 25 a 28 do slide)*

Crie uma lista de **8 caixas quadradas** (`width: 90`, `height: 90`, com margem `margin: 5` e cores alternadas).
1. Configure o container com `flexDirection: 'row'` e `flexWrap: 'wrap'`.
2. Observe que quando as caixas atingem a largura da tela, elas descem para a próxima linha (ao invés de espremer ou sumir).
3. Teste os efeitos de `alignContent: 'space-between'` e `alignContent: 'center'` no container pai.

---

## 🎯 Aula 4 — Desafios Práticos de Layout de Aplicativos

Agora que você dominou todas as propriedades do Flexbox, construa layouts idênticos aos usados em aplicativos reais!

---

### Exercício 7 — Layout de Tela de App (Header + Feed + Tab Bar)
Construa uma interface completa de aplicativo contendo:
1. **Header:** Fixo no topo, com título centralizado ("Meu App") e altura `60px`.
2. **Corpo (Feed):** Ocupa o restante da tela (`flex: 1`), centralizando uma mensagem de boas-vindas ou cards.
3. **Tab Bar (Menu Inferior):** Fixa no rodapé (`height: 70px`), contendo **3 botões/ícones** ("Início", "Buscar", "Perfil") dispostos na horizontal com `flexDirection: 'row'` e distribuídos uniformemente com `justifyContent: 'space-around'`.

---

### Exercício 8 ⭐ — Card de Perfil de Usuário Moderno
Crie um componente de **Cartão de Perfil** moderno com layout horizontal e vertical combinado:
- O card deve ter fundo branco, cantos arredondados (`borderRadius: 16`), borda ou sombra suave e `padding: 16`.
- **Lado Esquerdo:** Uma foto de perfil circular (`width: 70`, `height: 70`, `borderRadius: 35`).
- **Centro (Coluna):** Nome do usuário em negrito, cargo/curso em cinza e status ("Online").
- **Lado Direito / Canto:** Um badge/etiqueta com `alignSelf: 'flex-start'` escrito "PRO" ou "IFSC".

```
+-------------------------------------------------------------+
| [ Foto ]   Jackson Meires                       [ IFSC PRO ] |
| (Avatar)   Professor de Desenvolvimento                      |
|            🟢 Online agora                                   |
+-------------------------------------------------------------+
```

---

### Exercício 9 🔥 (Desafio Master) — Grade de Botões da Calculadora
Crie o layout do teclado de uma calculadora móvel:
- Um display preto no topo com o número `0` alinhado à direita (`alignItems: 'flex-end'`, `justifyContent: 'flex-end'`).
- Uma área de botões ocupando a parte inferior com `flexWrap: 'wrap'` ou 4 linhas com `flexDirection: 'row'`.
- Botões organizados em grade 4x4 (ex: `7 8 9 /`, `4 5 6 *`, `1 2 3 -`, `C 0 = +`).
- Cada botão deve ser perfeitamente quadrado/circular e distribuído com espaçamentos iguais usando Flexbox.

---

## 🎮 Dica de Fixação Interativa
Pratique os conceitos de eixos e alinhamentos com o jogo educativo:  
👉 **[Flexbox Froggy](https://flexboxfroggy.com/)** (níveis 1 a 24)

---

## 📋 Lista de Presença de Habilidades (Autoavaliação)

Marque o que você aprendeu e é capaz de fazer sozinho:
- [ ] Entender a divisão proporcional da tela com valores de `flex` (1, 2, 3...)
- [ ] Alternar eixos com `flexDirection: 'row'` e `'column'`
- [ ] Alinhar itens no eixo principal com `justifyContent`
- [ ] Alinhar itens no eixo transversal com `alignItems`
- [ ] Personalizar o alinhamento de um elemento específico com `alignSelf`
- [ ] Criar layouts em grade/quebra de linhas com `flexWrap: 'wrap'` e `alignContent`
- [ ] Construir a estrutura básica de um app mobile (Header + Body flex: 1 + Footer)
