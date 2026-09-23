import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Appbar, Button, TextInput } from 'react-native-paper';

// Tela de Clipboard: copia e cola texto usando a área de transferência do sistema.
export default function ClipboardScreen() {
  const [texto, setTexto] = useState('');

  const copiar = async () => {
    await Clipboard.setStringAsync(texto);
  };

  const colar = async () => {
    const copiado = await Clipboard.getStringAsync();
    setTexto(copiado);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Área de Transferência" />
      </Appbar.Header>

      <View style={styles.conteudo}>
        <TextInput
          mode="outlined"
          label="Texto"
          value={texto}
          onChangeText={setTexto}
          multiline
          style={styles.campo}
        />

        <View style={styles.botoes}>
          <Button mode="contained" onPress={copiar}>
            Copiar
          </Button>
          <Button mode="outlined" onPress={colar}>
            Colar
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  conteudo: { padding: 16 },
  campo: { marginBottom: 12 },
  botoes: { flexDirection: 'row', gap: 12 },
});
