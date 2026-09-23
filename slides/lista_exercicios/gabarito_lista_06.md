# Gabarito — Lista de Exercícios 06
## Flexbox no React Native: Prática Integradora

> **Nota para o professor:** estes gabaritos são sugestões de solução. Aceite variações que mantenham os conceitos de Flexbox e estejam visualmente equivalentes.

---

## Exercício 1 — Relembrando o básico

```jsx
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.bloco, { flex: 2, backgroundColor: '#ef4444' }]}>
        <Text style={styles.texto}>2/10</Text>
      </View>
      <View style={[styles.bloco, { flex: 5, backgroundColor: '#3b82f6' }]}>
        <Text style={styles.texto}>5/10</Text>
      </View>
      <View style={[styles.bloco, { flex: 3, backgroundColor: '#22c55e' }]}>
        <Text style={styles.texto}>3/10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
```

**Respostas das perguntas:**
1. Soma total dos `flex`: 2 + 5 + 3 = 10
2. Se o meio fosse `flex: 2`, a soma seria 2 + 2 + 3 = 7. As proporções seriam 2/7, 2/7 e 3/7.
3. O React Native usa `column` como padrão porque os dispositivos móveis são normalmente usados na vertical, e a rolagem natural também é vertical.

---

## Exercício 2 — Mudando a direção

Basta alterar a propriedade `flexDirection` do `container`:

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse', // testar: column, column-reverse, row, row-reverse
  },
  // ... demais estilos
});
```

| `flexDirection` | Eixo principal | Eixo transversal | Posição do vermelho |
|---|---|---|---|
| `column` | vertical (cima → baixo) | horizontal (esquerda → direita) | topo |
| `column-reverse` | vertical (baixo → cima) | horizontal (esquerda → direita) | base |
| `row` | horizontal (esquerda → direita) | vertical (cima → baixo) | esquerda |
| `row-reverse` | horizontal (direita → esquerda) | vertical (cima → baixo) | direita |

---

## Exercício 3 — Header, Content e Footer reutilizáveis

```jsx
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoBranco}>IFSC Mobile</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textoEscuro}>Conteúdo Principal</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textoBranco}>Desenvolvido por Jackson</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 60,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBranco: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoEscuro: {
    color: '#334155',
    fontSize: 20,
  },
});
```

**Desafio rápido:** se `flexDirection` for `'row'`, o Header, Content e Footer ficarão lado a lado horizontalmente. Como Header e Footer têm `height` fixo (e não `width`), eles podem não ocupar toda a largura visualmente como esperado. O Content com `flex: 1` ocupará o espaço horizontal restante.

---

## Exercício 4 — Tela de perfil de usuário

```jsx
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.foto}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <Text style={styles.nome}>Maria da Silva</Text>
      <Text style={styles.email}>maria.silva@email.com</Text>

      <View style={styles.estatisticas}>
        <View style={styles.caixa}>
          <Text style={styles.numero}>12</Text>
          <Text style={styles.rotulo}>Posts</Text>
        </View>
        <View style={styles.caixa}>
          <Text style={styles.numero}>48</Text>
          <Text style={styles.rotulo}>Seguindo</Text>
        </View>
        <View style={styles.caixa}>
          <Text style={styles.numero}>305</Text>
          <Text style={styles.rotulo}>Seguidores</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
  },
  estatisticas: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  caixa: {
    alignItems: 'center',
  },
  numero: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rotulo: {
    fontSize: 14,
    color: '#64748b',
  },
});
```

---

## Exercício 5 — O painel de alinhamentos

```jsx
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, {
      justifyContent: 'center',   // TROCAR AQUI
      alignItems: 'center'        // TROCAR AQUI
    }]}>
      <View style={[styles.quadrado, { backgroundColor: '#e11d48' }]} />
      <View style={[styles.quadrado, { backgroundColor: '#2563eb' }]} />
      <View style={[styles.quadrado, { backgroundColor: '#16a34a' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  quadrado: {
    width: 80,
    height: 80,
    margin: 4,
  },
});
```

**Resposta:** `alignItems: 'stretch'` só funciona quando o tamanho no eixo transversal **não está fixo**. Como os quadrados têm `height: 80` definido, o React Native respeita essa altura fixa e não estica os elementos.

---

## Exercício 6 — Componente `Card` com props

```jsx
import { StyleSheet, Text, View } from 'react-native';

function Card({ titulo, cor, tamanho }) {
  return (
    <View style={[styles.card, { backgroundColor: cor, flex: tamanho }]}>
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Card titulo="Menu" cor="#e11d48" tamanho={1} />
      <Card titulo="Conteúdo" cor="#2563eb" tamanho={2} />
      <Card titulo="Extras" cor="#16a34a" tamanho={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
```

---

## Exercício 7 — Aplicativo de receitas

```jsx
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textoBranco}>Receitas Fáceis</Text>
      </View>

      <View style={styles.content}>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <Text style={styles.tituloReceita}>Bolo de Chocolate</Text>
        <Text style={styles.tempo}>Tempo: 45 minutos</Text>

        <View style={styles.ingredientes}>
          <Text style={styles.ingrediente}>Farinha</Text>
          <Text style={styles.ingrediente}>Açúcar</Text>
          <Text style={styles.ingrediente}>Chocolate</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textoBranco}>Início</Text>
        <Text style={styles.textoBranco}>Buscar</Text>
        <Text style={styles.textoBranco}>Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  footer: {
    height: 60,
    backgroundColor: '#334155',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textoBranco: {
    color: '#fff',
    fontSize: 16,
  },
  imagem: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginBottom: 16,
  },
  tituloReceita: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tempo: {
    color: '#64748b',
    marginBottom: 16,
  },
  ingredientes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  ingrediente: {
    backgroundColor: '#e2e8f0',
    padding: 8,
    borderRadius: 6,
  },
});
```

---

## Exercício 8 — Tab Bar inferior funcional

```jsx
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Home() {
  return (
    <View style={styles.tela}>
      <Text style={styles.tituloTela}>Página Inicial</Text>
    </View>
  );
}

function Configuracoes() {
  return (
    <View style={styles.tela}>
      <Text style={styles.tituloTela}>Configurações</Text>
    </View>
  );
}

export default function App() {
  const [telaAtiva, setTelaAtiva] = useState('home');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu App</Text>
      </View>

      <View style={styles.content}>
        {telaAtiva === 'home' ? <Home /> : <Configuracoes />}
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.botao, telaAtiva === 'home' && styles.botaoAtivo]}
          onPress={() => setTelaAtiva('home')}
        >
          <Text style={styles.textoBotao}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, telaAtiva === 'config' && styles.botaoAtivo]}
          onPress={() => setTelaAtiva('config')}
        >
          <Text style={styles.textoBotao}>Config</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloTela: {
    fontSize: 24,
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
  },
  botao: {
    flex: 1,
    backgroundColor: '#cbd5e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAtivo: {
    backgroundColor: '#3b82f6',
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

---

## Exercício 9 — Calculadora visual (layout de grid)

```jsx
import { StyleSheet, Text, View } from 'react-native';

function Botao({ label, cor }) {
  return (
    <View style={[styles.botao, { backgroundColor: cor }]}>
      <Text style={styles.textoBotao}>{label}</Text>
    </View>
  );
}

function Linha({ botoes }) {
  return (
    <View style={styles.linha}>
      {botoes.map((b, i) => (
        <Botao key={i} label={b.label} cor={b.cor} />
      ))}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayTexto}>0</Text>
      </View>

      <View style={styles.teclado}>
        <Linha botoes={[
          { label: 'C', cor: '#94a3b8' },
          { label: '⌫', cor: '#94a3b8' },
          { label: '%', cor: '#94a3b8' },
          { label: '÷', cor: '#f59e0b' },
        ]} />
        <Linha botoes={[
          { label: '7', cor: '#e2e8f0' },
          { label: '8', cor: '#e2e8f0' },
          { label: '9', cor: '#e2e8f0' },
          { label: '×', cor: '#f59e0b' },
        ]} />
        <Linha botoes={[
          { label: '4', cor: '#e2e8f0' },
          { label: '5', cor: '#e2e8f0' },
          { label: '6', cor: '#e2e8f0' },
          { label: '-', cor: '#f59e0b' },
        ]} />
        <Linha botoes={[
          { label: '1', cor: '#e2e8f0' },
          { label: '2', cor: '#e2e8f0' },
          { label: '3', cor: '#e2e8f0' },
          { label: '+', cor: '#f59e0b' },
        ]} />
        <Linha botoes={[
          { label: '0', cor: '#e2e8f0' },
          { label: '.', cor: '#e2e8f0' },
          { label: '=', cor: '#f59e0b' },
        ]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    height: 120,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  displayTexto: {
    color: '#fff',
    fontSize: 48,
  },
  teclado: {
    flex: 1,
  },
  linha: {
    flex: 1,
    flexDirection: 'row',
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  textoBotao: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

---

## Desafio Master 10 — Feed de Rede Social

```jsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const posts = [
  {
    id: 1,
    usuario: 'Prof. Jackson',
    descricao: 'Aula de Flexbox hoje! 🚀',
    curtidas: 42,
  },
  {
    id: 2,
    usuario: 'Maria Dev',
    descricao: 'Finalmente entendi alignItems! 🎉',
    curtidas: 28,
  },
];

function Story() {
  return (
    <View style={styles.story}>
      <View style={styles.storyCirculo} />
      <Text style={styles.storyNome}>user</Text>
    </View>
  );
}

function Post({ post }) {
  const [curtido, setCurtido] = useState(false);

  return (
    <View style={styles.post}>
      <Image
        style={styles.postImagem}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <View style={styles.acoes}>
        <TouchableOpacity onPress={() => setCurtido(!curtido)}>
          <Text style={[styles.icone, curtido && styles.curtido]}>❤️</Text>
        </TouchableOpacity>
        <Text style={styles.icone}>💬</Text>
        <Text style={styles.icone}>✈️</Text>
      </View>
      <Text style={styles.curtidas}>Curtido por {post.curtidas} pessoas</Text>
      <Text style={styles.descricao}>
        <Text style={styles.usuario}>{post.usuario}</Text> {post.descricao}
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>InstaCode</Text>
        <Text style={styles.iconeCamera}>📷</Text>
      </View>

      <ScrollView style={styles.feed}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </ScrollView>

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>

      <View style={styles.tabBar}>
        <Text style={styles.tabItem}>🏠</Text>
        <Text style={styles.tabItem}>🔍</Text>
        <Text style={styles.tabItem}>➕</Text>
        <Text style={styles.tabItem}>❤️</Text>
        <Text style={styles.tabItem}>👤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconeCamera: {
    fontSize: 20,
  },
  feed: {
    flex: 1,
  },
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  storyCirculo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#3b82f6',
  },
  storyNome: {
    marginTop: 4,
    fontSize: 12,
  },
  post: {
    marginBottom: 20,
  },
  postImagem: {
    width: '100%',
    height: 300,
  },
  acoes: {
    flexDirection: 'row',
    padding: 12,
    gap: 16,
  },
  icone: {
    fontSize: 22,
  },
  curtido: {
    color: '#e11d48',
  },
  curtidas: {
    paddingHorizontal: 12,
    fontWeight: 'bold',
  },
  descricao: {
    paddingHorizontal: 12,
    marginTop: 4,
  },
  usuario: {
    fontWeight: 'bold',
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  tabItem: {
    fontSize: 22,
  },
});
```

---

*Gabarito elaborado para uso didático. Sinta-se livre para adaptar cores, textos e imagens conforme o interesse da turma.*
