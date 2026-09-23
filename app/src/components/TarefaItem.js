import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox, Chip, IconButton, Text } from 'react-native-paper';

// Componente "burro": só recebe dados e funções via props, não fala com o Firebase.
export default function TarefaItem({ tarefa, onAlternar, onEditar, onRemover }) {
  return (
    <View style={styles.linha}>
      <Checkbox
        status={tarefa.concluida ? 'checked' : 'unchecked'}
        onPress={() => onAlternar(tarefa)}
      />

      <View style={styles.conteudo}>
        <Text
          variant="titleMedium"
          style={[styles.titulo, tarefa.concluida && styles.textoConcluido]}
          numberOfLines={1}
        >
          {tarefa.titulo}
        </Text>

        {!!tarefa.descricao && (
          <Text variant="bodySmall" style={styles.descricao} numberOfLines={2}>
            {tarefa.descricao}
          </Text>
        )}

        {!!tarefa.categoria && (
          <Chip style={styles.chip} compact textStyle={styles.chipTexto}>
            {tarefa.categoria}
          </Chip>
        )}
      </View>

      <IconButton icon="pencil" size={20} onPress={() => onEditar(tarefa)} />
      <IconButton icon="delete" size={20} iconColor="#B3261E" onPress={() => onRemover(tarefa)} />
    </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  conteudo: { flex: 1 },
  titulo: { color: '#1C1B1F' },
  descricao: { color: '#49454F', marginTop: 2 },
  textoConcluido: { textDecorationLine: 'line-through', color: '#999' },
  chip: { alignSelf: 'flex-start', marginTop: 4, backgroundColor: '#EADDFF' },
  chipTexto: { fontSize: 12 },
});
