# Gabarito — Lista 05: Estilizando Componentes com Flexbox

> Cada exercício abaixo contém o código completo de um `App.js`. Para testar, copie e cole o código no [Snack Expo](https://snack.expo.dev) ou no seu projeto Expo local.

---

## Exercício 1 — O Experimento das Proporções (flex: 1, 2, 3)

```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* 1/6 da tela */}
      <View style={styles.vermelho}>
        <Text style={styles.texto}>flex: 1 (1/6 da tela)</Text>
      </View>

      {/* 2/6 da tela */}
      <View style={styles.amarelo}>
        <Text style={styles.texto}>flex: 2 (2/6 da tela)</Text>
      </View>

      {/* 3/6 da tela */}
      <View style={styles.verde}>
        <Text style={styles.texto}>flex: 3 (3/6 da tela)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Container flexível
    height: '100%', // Garante 100% da altura da tela na aba Web do Snack Expo
    width: '100%', // Garante 100% da largura da tela na aba Web do Snack Expo
  },
  vermelho: {
    flex: 1,
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amarelo: {
    flex: 2,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verde: {
    flex: 3,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
```

---

## Exercício 2 — Dominando o `flexDirection` (row / row-reverse / column-reverse)

```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloco1}><Text style={styles.texto}>1</Text></View>
      <View style={styles.bloco2}><Text style={styles.texto}>2</Text></View>
      <View style={styles.bloco3}><Text style={styles.texto}>3</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row', // Experimente: 'row-reverse' ou 'column-reverse'
  },
  bloco1: { flex: 1, backgroundColor: '#3498db', justifyContent: 'center', alignItems: 'center' },
  bloco2: { flex: 2, backgroundColor: '#9b59b6', justifyContent: 'center', alignItems: 'center' },
  bloco3: { flex: 1, backgroundColor: '#e67e22', justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
});
```

> **Resposta Teórica:** No React Native o padrão é `column` porque a grande maioria das telas em smartphones é pensada na vertical (orientação *portrait*), com fluxo de cima para baixo.

---

## Exercício 3 — Tamanhos Fixos vs Flexíveis (Header, Body, Footer)

```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Fixo */}
      <View style={styles.header}>
        <Text style={styles.headerTexto}>IFSC Mobile App</Text>
      </View>

      {/* Conteúdo Central Flexível */}
      <View style={styles.body}>
        <Text style={styles.bodyTitulo}>Área de Conteúdo</Text>
        <Text style={styles.bodyDescricao}>
          Este elemento tem flex: 1 e preenche automaticamente todo o espaço restante.
        </Text>
      </View>

      {/* Footer Fixo */}
      <View style={styles.footer}>
        <Text style={styles.footerTexto}>© 2026 - Desenvolvimento de Sistemas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#f8fafc',
  },
  header: {
    height: 80,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Espaço para a status bar
  },
  headerTexto: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bodyTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0f172a',
  },
  bodyDescricao: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  footer: {
    height: 60,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTexto: {
    color: '#cbd5e1',
    fontSize: 14,
  },
});
```

---

## Exercício 4 — O Eixo Principal (`justifyContent`)

```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.legenda}>justifyContent: 'space-around'</Text>
      <View style={styles.caixasContainer}>
        <View style={[styles.caixa, { backgroundColor: '#e11d48' }]}><Text style={styles.texto}>A</Text></View>
        <View style={[styles.caixa, { backgroundColor: '#2563eb' }]}><Text style={styles.texto}>B</Text></View>
        <View style={[styles.caixa, { backgroundColor: '#16a34a' }]}><Text style={styles.texto}>C</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
  },
  legenda: {
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
  },
  caixasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Experimente: 'flex-start', 'center', 'flex-end', 'space-between', 'space-evenly'
    alignItems: 'center',
    backgroundColor: '#1e293b',
    paddingVertical: 20,
  },
  caixa: {
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
```

---

## Exercício 5 — Centralização e `alignSelf`

```jsx
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vermelho} />
      <View style={styles.amarelo} />
      <View style={styles.verde} />
      <View style={styles.roxo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start', // Padrão para todos os filhos
    justifyContent: 'space-around',
    backgroundColor: '#f1f5f9',
    padding: 10,
  },
  vermelho: {
    backgroundColor: '#ef4444',
    width: 120,
    height: 80,
    alignSelf: 'flex-end', // Rebelde 1: vai para a direita
    borderRadius: 8,
  },
  amarelo: {
    backgroundColor: '#eab308',
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  verde: {
    backgroundColor: '#22c55e',
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  roxo: {
    backgroundColor: '#a855f7',
    width: 120,
    height: 80,
    alignSelf: 'center', // Rebelde 2: vai para o centro
    borderRadius: 8,
  },
});
```

---

## Exercício 6 — Quebra de Linha (`flexWrap` + `alignContent`)

```jsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const itens = ['1', '2', '3', '4', '5', '6', '7', '8'];

  return (
    <View style={styles.container}>
      {itens.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.texto}>Card {item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os itens quebrem para a próxima linha
    alignContent: 'center', // Alinhamento das linhas formadas
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    paddingTop: 50,
  },
  card: {
    width: 90,
    height: 90,
    backgroundColor: '#3b82f6',
    margin: 8,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
```

---

## Exercício 7 — Layout de Tela de App (Header, Feed, Tab Bar)

```jsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IFSC Feed</Text>
      </View>

      {/* Main Content */}
      <View style={styles.body}>
        <View style={styles.post}>
          <Text style={styles.postTitulo}>Dica de Flexbox</Text>
          <Text style={styles.postConteudo}>
            Use flex: 1 no contêiner pai para garantir que ele ocupe toda a área da tela no Android e iOS.
          </Text>
        </View>

        <View style={styles.post}>
          <Text style={styles.postTitulo}>Novidade da Aula</Text>
          <Text style={styles.postConteudo}>
            Hoje aprendemos como combinar flexDirection com justifyContent para criar barras de navegação!
          </Text>
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcone}>🏠</Text>
          <Text style={styles.tabTexto}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcone}>🔍</Text>
          <Text style={styles.tabTexto}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIcone}>👤</Text>
          <Text style={styles.tabTexto}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#f1f5f9',
  },
  header: {
    height: 70,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  body: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  post: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  postTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
  },
  postConteudo: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  tabBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabIcone: {
    fontSize: 20,
  },
  tabTexto: {
    fontSize: 12,
    color: '#475569',
    marginTop: 2,
  },
});
```

---

## Exercício 8 — Card de Perfil de Usuário Moderno

```jsx
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Foto de Perfil */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' }}
          style={styles.avatar}
        />

        {/* Coluna Central com Dados */}
        <View style={styles.info}>
          <Text style={styles.nome}>Jackson Meires</Text>
          <Text style={styles.cargo}>Prof. de Desenvolvimento Móvel</Text>
          <Text style={styles.status}>🟢 Online agora</Text>
        </View>

        {/* Badge alinhado no topo */}
        <View style={styles.badge}>
          <Text style={styles.badgeTexto}>PRO</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e8f0',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4, // Sombra no Android
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#cbd5e1',
  },
  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  cargo: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  status: {
    fontSize: 12,
    color: '#10b981',
    marginTop: 4,
    fontWeight: '500',
  },
  badge: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  badgeTexto: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
```

---

## Exercício 9 (Desafio Master) — Teclado da Calculadora

```jsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const botoes = [
    ['C', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <View style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayTexto}>1.024</Text>
      </View>

      {/* Teclado */}
      <View style={styles.teclado}>
        {botoes.map((linha, i) => (
          <View key={i} style={styles.linha}>
            {linha.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.botao,
                  btn === '0' && styles.botaoZero,
                  ['÷', '×', '-', '+', '='].includes(btn) && styles.botaoOperador,
                  ['C', '+/-', '%'].includes(btn) && styles.botaoFuncao,
                ]}
              >
                <Text
                  style={[
                    styles.textoBotao,
                    ['C', '+/-', '%'].includes(btn) && styles.textoBotaoFuncao,
                  ]}
                >
                  {btn}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  displayTexto: {
    color: '#ffffff',
    fontSize: 64,
    fontWeight: '300',
  },
  teclado: {
    paddingHorizontal: 12,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  botao: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoZero: {
    width: 160,
    alignItems: 'flex-start',
    paddingLeft: 28,
  },
  botaoOperador: {
    backgroundColor: '#ff9f0a',
  },
  botaoFuncao: {
    backgroundColor: '#a5a5a5',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '500',
  },
  textoBotaoFuncao: {
    color: '#000000',
  },
});
```
