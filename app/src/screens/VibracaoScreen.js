import React from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import { Appbar, Button, Text } from 'react-native-paper';

// Padrão de vibração: pausa, vibra, pausa, vibra... (em milissegundos).
const PADRAO = [0, 300, 200, 300];

// Tela de Vibração: usa a API nativa do React Native (não precisa de pacote extra).
export default function VibracaoScreen() {
  const vibrarCurto = () => Vibration.vibrate(400);
  const vibrarPadrao = () => Vibration.vibrate(PADRAO);
  const pararVibracao = () => Vibration.cancel();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Vibração" />
      </Appbar.Header>

      <View style={styles.conteudo}>
        <Text style={styles.texto}>Teste os diferentes tipos de vibração do aparelho.</Text>

        <Button mode="contained" onPress={vibrarCurto} style={styles.botao}>
          Vibrar curto
        </Button>
        <Button mode="contained" onPress={vibrarPadrao} style={styles.botao}>
          Vibrar em padrão
        </Button>
        <Button mode="outlined" onPress={pararVibracao} style={styles.botao}>
          Parar vibração
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  conteudo: { padding: 16 },
  texto: { color: '#1C1B1F', marginBottom: 16 },
  botao: { marginBottom: 12 },
});
