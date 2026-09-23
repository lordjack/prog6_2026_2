import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Appbar, Button, Text, TextInput } from 'react-native-paper';

import firebase from '../firebaseConfig';
import AppDialog from '../components/AppDialog';
import { CATEGORIAS } from '../utils/categorias';

const tarefasRef = firebase.database().ref('tarefas');

// Tela única para CREATE e UPDATE: se vier "tarefa" pelos params, é edição.
export default function CadastroTarefaScreen({ navigation, route }) {
  const tarefaEditando = route.params?.tarefa;

  const [titulo, setTitulo] = useState(tarefaEditando?.titulo || '');
  const [descricao, setDescricao] = useState(tarefaEditando?.descricao || '');
  const [categoria, setCategoria] = useState(tarefaEditando?.categoria || CATEGORIAS[0]);

  // Controla o Dialog de sucesso exibido após salvar.
  const [sucessoVisivel, setSucessoVisivel] = useState(false);

  const salvar = () => {
    if (!titulo.trim()) return;

    const dados = { titulo: titulo.trim(), descricao: descricao.trim(), categoria };

    if (tarefaEditando) {
      tarefasRef.child(tarefaEditando.id).update(dados);
    } else {
      tarefasRef.push({ ...dados, concluida: false, criadaEm: Date.now() });
    }

    setSucessoVisivel(true);
  };

  const fecharSucesso = () => {
    setSucessoVisivel(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={tarefaEditando ? 'Editar tarefa' : 'Nova tarefa'} />
      </Appbar.Header>

      <View style={styles.formulario}>
        <TextInput
          mode="outlined"
          label="Título"
          value={titulo}
          onChangeText={setTitulo}
          style={styles.campo}
        />

        <TextInput
          mode="outlined"
          label="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
          style={styles.campo}
        />

        <Text style={styles.rotulo}>Categoria</Text>
        <View style={styles.picker}>
          <Picker selectedValue={categoria} onValueChange={setCategoria}>
            {CATEGORIAS.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </View>

        <Button mode="contained" onPress={salvar} style={styles.botao}>
          Salvar
        </Button>
      </View>

      <AppDialog
        visible={sucessoVisivel}
        title="Sucesso"
        message={tarefaEditando ? 'Tarefa atualizada com sucesso!' : 'Tarefa cadastrada com sucesso!'}
        onDismiss={fecharSucesso}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  formulario: { padding: 16 },
  campo: { marginBottom: 12 },
  rotulo: { marginBottom: 4, color: '#49454F' },
  picker: { borderWidth: 1, borderColor: '#79747E', borderRadius: 4, marginBottom: 16 },
  botao: { marginTop: 8 },
});
