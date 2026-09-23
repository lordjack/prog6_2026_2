# Gabarito — Lista 04: Introdução ao React Native

> Cada exercício abaixo é um `App.js` completo. Para testar, cole o código no
> [Snack Expo](https://snack.expo.dev) ou no `App.js` do projeto Expo.
> Apenas o **último** `export default` vale por arquivo — comente os demais ao testar.

---

## Exercício 1 — Olá Mundo

```jsx
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Olá Mundo!</Text>
      <Text>Jackson</Text>
    </View>
  );
}
```

---

## Exercício 2 — JSX com expressões

```jsx
import { Text, View } from 'react-native';

function Ola({ name }) {
  return <Text>Hello, {name}</Text>;
}

export default function App() {
  return (
    <View>
      <Ola name="Maria" />
    </View>
  );
}
```

---

## Exercício 3 — Galeria

```jsx
import { Text, View, Image } from 'react-native';

function Profile() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function App() {
  return (
    <View>
      <Text>Pessoas incríveis</Text>
      <Profile />
      <Profile />
      <Profile />
    </View>
  );
}
```

---

## Exercício 4 — Componente com 3 props

```jsx
import { Text, View } from 'react-native';

function Aluno(props) {
  return (
    <Text>
      {props.nome} — {props.curso} — {props.idade} anos
    </Text>
  );
}

export default function App() {
  return (
    <View>
      <Aluno nome="Maria" curso="Dev. de Sistemas" idade={17} />
      <Aluno nome="Chaves" curso="Dev. de Sistemas" idade={16} />
      <Aluno nome="Chiquinha" curso="Dev. de Sistemas" idade={17} />
    </View>
  );
}
```

---

## Exercício 5 — Componente de classe

```jsx
import React from 'react';
import { Text, View } from 'react-native';

class Welcome extends React.Component {
  render() {
    return <Text>Olá, {this.props.name}</Text>;
  }
}

export default function App() {
  return (
    <View>
      <Welcome name="Jackson" />
    </View>
  );
}
```

**Respostas:** 1) o método `render()`; 2) com `this.props.nomeDaProp`.

---

## Exercício 6 — Contador com useState

```jsx
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Contagem: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button title="Zerar" onPress={() => setCount(0)} />
    </View>
  );
}
```

---

## Exercício 7 — Estilizando com StyleSheet

```jsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>Contagem: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button title="Zerar" onPress={() => setCount(0)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contador: {
    fontSize: 40,
    color: '#61dafb',
    marginBottom: 20,
  },
});
```

---

## Exercício 8 — Números da Mega-Sena

```jsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [numeros, setNumeros] = useState([]);

  const gerar = () => {
    const sorteados = [];
    while (sorteados.length < 6) {
      const n = Math.floor(Math.random() * 99) + 1;
      if (!sorteados.includes(n)) {
        sorteados.push(n);
      }
    }
    setNumeros(sorteados);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Números da Mega-Sena</Text>
      <View style={styles.linha}>
        {numeros.map((n, index) => (
          <Text key={index} style={styles.bola}>
            {n}
          </Text>
        ))}
      </View>
      <Button title="Gerar números" onPress={gerar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: { fontSize: 24, marginBottom: 20 },
  linha: { flexDirection: 'row', marginBottom: 20 },
  bola: {
    fontSize: 22,
    margin: 6,
    padding: 10,
    backgroundColor: '#2e7d32',
    color: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
  },
});
```

---

## Exercício 9 — Carro Premiado

```jsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Carro(props) {
  return (
    <Text style={styles.texto}>
      Parabéns! Você ganhou um {props.modelo} {props.cor}, placa {props.placa}!
    </Text>
  );
}

export default function App() {
  const [carregou, setCarregou] = useState(false);
  const [numeroSorte, setNumeroSorte] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNumeroSorte(Math.floor(Math.random() * 4001) + 1000); // 1000 a 5000
      setCarregou(true);
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      {!carregou ? (
        <Text style={styles.texto}>Sorteando...</Text>
      ) : (
        <View>
          <Carro modelo="UP TSI" cor="Branco" placa="ABC-1234" />
          <Text style={styles.texto}>
            Seu número da sorte: {numeroSorte}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: { fontSize: 18, margin: 10, textAlign: 'center' },
});
```

> **Versão do slide (classe + componentDidMount):** o `setTimeout` vai dentro de
> `componentDidMount()` e o estado é atualizado com `this.setState({ carregou: true })`.
