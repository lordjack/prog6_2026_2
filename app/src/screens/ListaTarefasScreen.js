import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Appbar, FAB, Searchbar, Text } from 'react-native-paper';

import firebase from '../firebaseConfig';
import AppDialog from '../components/AppDialog';
import TarefaItem from '../components/TarefaItem';

// Referência fixa do nó "tarefas" no Realtime Database (sintaxe v8 encadeada).
const tarefasRef = firebase.database().ref('tarefas');

export default function ListaTarefasScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');

  // Tarefa selecionada para exclusão (controla a visibilidade do Dialog de confirmação).
  const [tarefaParaExcluir, setTarefaParaExcluir] = useState(null);

  // READ (tempo real): assina o nó "tarefas" e atualiza a lista sempre que o
  // banco mudar — seja por esse app ou por outro dispositivo.
  useEffect(() => {
    const aoReceberDados = (snapshot) => {
      const dados = snapshot.val() || {};

      const lista = Object.keys(dados).map((id) => ({
        id,
        ...dados[id],
      }));

      lista.sort((a, b) => (b.criadaEm || 0) - (a.criadaEm || 0));

      setTarefas(lista);
      setCarregando(false);
    };

    tarefasRef.on('value', aoReceberDados);

    // Cleanup: remove o listener quando a tela desmonta (evita vazamento de memória).
    return () => tarefasRef.off('value', aoReceberDados);
  }, []);

  // UPDATE (status de conclusão)
  const alternarConcluida = (tarefa) => {
    tarefasRef.child(tarefa.id).update({
      concluida: !tarefa.concluida,
    });
  };

  // DELETE — abre o Dialog de confirmação antes de remover de fato.
  const pedirConfirmacaoExclusao = (tarefa) => {
    setTarefaParaExcluir(tarefa);
  };

  const confirmarExclusao = () => {
    tarefasRef.child(tarefaParaExcluir.id).remove();
    setTarefaParaExcluir(null);
  };

  const cancelarExclusao = () => {
    setTarefaParaExcluir(null);
  };

  // Filtra a lista pelo título digitado na busca (case-insensitive).
  const tarefasFiltradas = tarefas.filter((tarefa) =>
    (tarefa.titulo || '').toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>

      <Searchbar
        style={styles.busca}
        placeholder="Buscar por título..."
        value={busca}
        onChangeText={setBusca}
      />

      {carregando && <Text style={styles.mensagem}>Carregando tarefas...</Text>}

      {!carregando && tarefasFiltradas.length === 0 && (
        <Text style={styles.mensagem}>Nenhuma tarefa encontrada.</Text>
      )}

      <FlatList
        data={tarefasFiltradas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TarefaItem
            tarefa={item}
            onAlternar={alternarConcluida}
            onEditar={(tarefa) => navigation.navigate('CadastroTarefa', { tarefa })}
            onRemover={pedirConfirmacaoExclusao}
          />
        )}
      />

      <FAB
        style={styles.fab}
        icon="plus"
        label="Nova tarefa"
        onPress={() => navigation.navigate('CadastroTarefa')}
      />

      <AppDialog
        visible={!!tarefaParaExcluir}
        title="Excluir tarefa"
        message={`Deseja realmente excluir "${tarefaParaExcluir?.titulo}"?`}
        onDismiss={cancelarExclusao}
        onConfirm={confirmarExclusao}
        confirmLabel="Excluir"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  busca: {
    margin: 12,
  },
  mensagem: {
    textAlign: 'center',
    marginTop: 24,
    color: '#666',
  },
  lista: {
    paddingBottom: 96,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});
