# Lista de Exercícios — Slide 07
## Introdução ao React Native Paper

**Curso:** Técnico Integrado em Desenvolvimento de Sistemas / Desenvolvimento para Dispositivos Móveis  
**Base:** Introdução ao React Native Paper  
**Onde praticar:** [Snack Expo](https://snack.expo.dev) ou projeto local com Expo (`npx create-expo-app@latest nomeProjeto`)  
**Dependência necessária:** `npx expo install react-native-paper react-native-safe-area-context`

---

## 🔧 Setup inicial

Antes de começar, instale as bibliotecas do Paper no seu projeto:

```bash
npx expo install react-native-paper react-native-safe-area-context
```

Depois, no arquivo `App.js` ou `App.tsx`, importe e use o `PaperProvider` para encapsular a aplicação:

```jsx
import * as React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Text>Olá, React Native Paper!</Text>
    </PaperProvider>
  );
}
```

> Dica: o `PaperProvider` costuma ser colocado na raiz do app para que os componentes do Paper tenham acesso ao tema e ao contexto correto.

---

## 📅 Cronograma sugerido

| Tempo | Atividade |
|---|---|
| 15 min | Setup e apresentação dos componentes principais |
| 25 min | Exercícios 1 a 3 — Text, Button e Card |
| 25 min | Exercícios 4 a 6 — TextInput, Checkbox e Switch |
| 20 min | Exercícios 7 a 8 — AppBar, FAB e desafio integrado |

---

## Parte 1 — Primeiros componentes do Paper

### Exercício 1 — Olá, Paper!
Crie uma tela simples com:
- `Appbar`
- `Text`
- `Button`

O app deve mostrar uma mensagem inicial e um botão com o texto **"Começar"**.

```jsx
import * as React from 'react';
import { Appbar, Button, Provider, Text } from 'react-native-paper';

export default function App() {
  return (
    <Provider>
      <Appbar>
        <Appbar.Content title="Meu App" />
      </Appbar>

      <Text style={{ margin: 20, fontSize: 20 }}>Olá, React Native Paper!</Text>

      <Button mode="contained" onPress={() => console.log('clicou')}>
        Começar
      </Button>
    </Provider>
  );
}
```

> Desafio: altere o botão para `mode="outlined"` e observe a diferença visual.

---

### Exercício 2 — Botões com variações
Crie uma tela com 3 botões diferentes:
- `contained`
- `outlined`
- `text`

Cada botão deve ter um texto e uma cor diferente. Use o `Button` do Paper.

```jsx
<Button mode="contained" buttonColor="#6200ee">
  Contained
</Button>

<Button mode="outlined" textColor="#6200ee">
  Outlined
</Button>

<Button mode="text" textColor="#03dac6">
  Text
</Button>
```

> Pergunta: qual a diferença visual entre `contained`, `outlined` e `text`?

---

### Exercício 3 — Card informativo
Crie um `Card` com:
- título
- subtítulo
- conteúdo
- botão de ação

Estruture o componente assim:

```jsx
import * as React from 'react';
import { Card, Button, Text } from 'react-native-paper';

export default function App() {
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">React Native Paper</Text>
        <Text variant="bodyMedium">Biblioteca de UI para apps mobile.</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Cancelar</Button>
        <Button>Salvar</Button>
      </Card.Actions>
    </Card>
  );
}
```

> Replique o card com informações sobre o curso, aluno ou turma.

---

## Parte 2 — Inputs e interação

### Exercício 4 — TextInput com label
Crie um formulário simples com:
- `TextInput` para nome
- `TextInput` para e-mail
- `Button` para enviar

Use `label` e `mode="outlined"`.

```jsx
import * as React from 'react';
import { TextInput, Button, Text } from 'react-native-paper';

export default function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
      />

      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={() => console.log(nome, email)}>
        Enviar
      </Button>
    </>
  );
}
```

> Dica: o `TextInput` do Paper é muito semelhante ao input do HTML, mas com visual de app mobile.

---

### Exercício 5 — Checkbox e Switch
Crie uma tela que permita:
- marcar uma opção com `Checkbox.Android` ou `Checkbox.Item`
- ativar/desativar uma opção com `Switch`

Exemplo base:

```jsx
import * as React from 'react';
import { Checkbox, Switch, Text } from 'react-native-paper';

export default function App() {
  const [checked, setChecked] = React.useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  return (
    <>
      <Checkbox.Item
        label="Aceito os termos"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => setChecked(!checked)}
      />

      <Text>Notificações</Text>
      <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
    </>
  );
}
```

> Observe que o `Checkbox` e o `Switch` usam o conceito de `state` para controlar a UI.

---

### Exercício 6 — Seleção de opções com SegmentedButtons
Crie uma tela com 3 opções de plano:
- Básico
- Pro
- Premium

Use `SegmentedButtons` para escolher uma opção e exibir na tela o valor selecionado.

```jsx
import * as React from 'react';
import { SegmentedButtons, Text } from 'react-native-paper';

export default function App() {
  const [value, setValue] = React.useState('basico');

  return (
    <>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { value: 'basico', label: 'Básico' },
          { value: 'pro', label: 'Pro' },
          { value: 'premium', label: 'Premium' },
        ]}
      />

      <Text style={{ marginTop: 20 }}>Plano selecionado: {value}</Text>
    </>
  );
}
```

> Desafio: personalize a tela para que o texto do plano apareça em destaque.

---

## Parte 3 — AppBar, FAB e diálogos

### Exercício 7 — AppBar e FAB
Crie uma tela com:
- `Appbar` no topo
- `FAB` no canto inferior direito
- mensagem central em `Text`

O FAB deve disparar um aviso simples ao ser pressionado.

```jsx
import * as React from 'react';
import { Appbar, FAB, Text } from 'react-native-paper';

export default function App() {
  return (
    <>
      <Appbar>
        <Appbar.Content title="Agenda" subtitle="Lista de tarefas" />
      </Appbar>

      <Text style={{ margin: 20, fontSize: 18 }}>Você não tem tarefas hoje.</Text>

      <FAB
        icon="plus"
        style={{ position: 'absolute', right: 20, bottom: 20 }}
        onPress={() => console.log('Adicionar tarefa')}
      />
    </>
  );
}
```

> O `FAB` é ótimo para ações rápidas, como adicionar, salvar ou confirmar.

---

### Exercício 8 — Modal/Diálogo simples
Crie um diálogo que abre ao clicar em um botão e pergunta: **"Deseja excluir este item?"**

Use o componente `Dialog`, `Portal` e `Button`.

```jsx
import * as React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

export default function App() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button mode="contained" onPress={() => setVisible(true)}>
        Excluir item
      </Button>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Confirmação</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Deseja excluir este item?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancelar</Button>
            <Button onPress={() => setVisible(false)}>Confirmar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}
```

> Importante: o `Portal` é usado para renderizar elementos acima do restante da interface.

---

## 🧩 Desafio integrador

### Exercício 9 🔥 — Tela de login moderna
Crie uma tela com:
1. `Appbar` com o título **"Login"**
2. `TextInput` para e-mail e senha
3. `Checkbox` para lembrar usuário
4. `Button` para entrar
5. `Text` para exibir mensagem de boas-vindas após o clique

Exemplo de fluxo:
- Usuário digita e-mail e senha
- Ao pressionar **Entrar**, mostra mensagem: `Bem-vindo(a), {nome}!`
- Use `Alert` ou `Snackbar` para feedback

```jsx
import * as React from 'react';
import { Appbar, Button, Checkbox, Text, TextInput, Snackbar } from 'react-native-paper';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [lembrar, setLembrar] = React.useState(false);
  const [mensagem, setMensagem] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const entrar = () => {
    setMensagem(`Bem-vindo(a), ${email}!`);
    setVisible(true);
  };

  return (
    <>
      <Appbar>
        <Appbar.Content title="Login" />
      </Appbar>

      <TextInput label="E-mail" value={email} onChangeText={setEmail} mode="outlined" />
      <TextInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry mode="outlined" />

      <Checkbox.Item
        label="Lembrar usuário"
        status={lembrar ? 'checked' : 'unchecked'}
        onPress={() => setLembrar(!lembrar)}
      />

      <Button mode="contained" onPress={entrar}>Entrar</Button>

      <Text style={{ marginTop: 20 }}>{mensagem}</Text>

      <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
        Login realizado com sucesso!
      </Snackbar>
    </>
  );
}
```

> Se terminar antes do tempo, tente criar uma segunda versão com `Avatar`, `Card` e botão de cadastro.

---

## 📋 Lista de presença de conceitos (autoavaliação)

Marque o que você consegue fazer sozinho ao final da aula:

- [ ] Configurar o `PaperProvider` em um projeto Expo
- [ ] Usar `Button`, `Text` e `Appbar` do React Native Paper
- [ ] Criar um `Card` com título, conteúdo e ações
- [ ] Trabalhar com `TextInput`, `Checkbox` e `Switch`
- [ ] Controlar componentes usando `useState`
- [ ] Criar diálogos com `Dialog` e `Portal`
- [ ] Usar `FAB` e `Snackbar` para ações rápidas
- [ ] Montar uma tela de login ou cadastro com componentes do Paper

---

## 💡 Dica final

O React Native Paper facilita muito a criação de interfaces mais bonitas e consistentes sem precisar escrever todo o visual do zero. A prática mais importante é combinar:

- `state` para controle da tela
- `PaperProvider` para o tema
- componentes de UI com hierarquia visual bem organizada

Agora é o momento de experimentar, testar e criar telas mais profissionais no Expo!
