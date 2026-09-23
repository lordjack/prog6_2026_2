# App de Tarefas (To-Do List) — CRUD com Firebase Realtime Database v8

Projeto prático para a disciplina de Desenvolvimento Mobile. Usa **Expo**,
**React Native Paper**, **React Navigation** (tabs + stack) e **Firebase
Realtime Database** na sintaxe antiga (`^8.10.0`, API encadeada
`firebase.database().ref()...`). **Não usa Firestore.**

## Estrutura

```
app/
├── App.js                         (providers globais + navegação)
├── package.json                   (lista de dependências — referência)
└── src/
    ├── firebaseConfig.js           (config + inicialização do Firebase)
    ├── theme.js                    (tema fixo do React Native Paper)
    ├── navigation/
    │   └── AppNavigator.js         (tabs: Tarefas, GPS, Câmera, Clipboard, Notificações, Vibração)
    ├── utils/
    │   └── categorias.js           (lista fixa de categorias do Picker)
    ├── services/
    │   └── cloudinary.js           (upload "unsigned" de fotos)
    ├── components/
    │   └── TarefaItem.js           (linha da lista: checkbox + título/descrição/categoria + editar/excluir)
    └── screens/
        ├── ListaTarefasScreen.js   (lista + busca por título + FAB)
        ├── CadastroTarefaScreen.js (formulário de criar/editar tarefa com Picker de categoria)
        ├── LocalizacaoScreen.js    (GPS: coordenadas + endereço via reverseGeocode)
        ├── CameraScreen.js         (tirar foto + upload Cloudinary + galeria)
        ├── ClipboardScreen.js      (copiar/colar texto)
        ├── NotificacaoScreen.js    (notificação local)
        └── VibracaoScreen.js       (vibração do aparelho)
```

## Como rodar no Snack (snack.expo.dev)

1. Crie um novo Snack em https://snack.expo.dev.
2. No painel esquerdo, recrie a mesma estrutura de pastas/arquivos acima
   (botão "+" → New File / New Folder) e cole o conteúdo de cada arquivo.
3. Abra a aba **Dependencies** do Snack e adicione: `firebase` (fixando a
   versão **8.10.0** — o Snack tenta instalar a mais nova por padrão, que já
   é Firestore/v9 modular), `react-native-paper`, `react-native-safe-area-context`,
   `@react-navigation/native`, `@react-navigation/native-stack`,
   `@react-navigation/bottom-tabs`, `react-native-screens`,
   `react-native-gesture-handler`, `@react-native-picker/picker`,
   `expo-location`, `expo-image-picker`, `expo-clipboard`, `expo-notifications`.

## Como configurar o Firebase

1. Crie um projeto em https://console.firebase.google.com.
2. No menu lateral, vá em **Build > Realtime Database** e clique em
   **Criar banco de dados**. Escolha o modo de teste (regras abertas) só para
   fins didáticos — não usar em produção.
3. Em **Configurações do projeto > Seus apps**, registre um app Web (ícone `</>`)
   e copie o objeto `firebaseConfig`.
4. Cole os valores em [src/firebaseConfig.js](src/firebaseConfig.js), substituindo os placeholders.

## Como configurar o Cloudinary (tela de Câmera)

1. Crie uma conta gratuita em https://cloudinary.com.
2. No painel, anote o **Cloud name** (aparece no topo do Dashboard).
3. Vá em **Settings > Upload > Upload presets** e crie um preset com modo
   **Unsigned** (permite enviar fotos direto do app, sem chave secreta).
4. Cole os dois valores em [src/services/cloudinary.js](src/services/cloudinary.js), substituindo os placeholders `SEU_CLOUD_NAME` e `SEU_UPLOAD_PRESET`.

## Funcionalidades implementadas

- **Create**: tela de cadastro com título, descrição e categoria (Picker) grava com `tarefasRef.push(...)`.
- **Read**: `tarefasRef.on('value', ...)` mantém a lista sincronizada em tempo real, com busca por título.
- **Update**: checkbox alterna `concluida`; ícone de lápis abre a tela de cadastro em modo edição.
- **Delete**: ícone de lixeira remove o item com `tarefasRef.child(id).remove()`.
- **Navegação**: tabs na base da tela + stack interno na aba "Tarefas" (lista → cadastro).
- **GPS**: `expo-location` obtém coordenadas e converte em endereço (rua/bairro/cidade).
- **Câmera**: `expo-image-picker` tira a foto e envia para o Cloudinary; a galeria mostra as fotos enviadas.
- **Clipboard**: `expo-clipboard` copia e cola texto usando a área de transferência do sistema.
- **Notificações**: `expo-notifications` dispara uma notificação local (push remoto exige build, não funciona no Expo Go).
- **Vibração**: API `Vibration` do React Native aciona padrões de vibração do aparelho.

## Desafio para os alunos 🔥

- Crie filtros (chips ou botões) para mostrar "Todas", "Pendentes" e "Concluídas".
- Mostre a contagem de tarefas concluídas vs. total no topo da tela.
- Na tela de GPS, salve a última localização obtida junto com a tarefa (ex.: "criada em tal lugar").
- Na tela de Câmera, associe a foto tirada a uma tarefa específica em vez de uma galeria solta.

