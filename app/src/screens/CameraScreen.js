import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar, Button, Text } from 'react-native-paper';

import { enviarFotoParaCloudinary } from '../services/cloudinary';

// Tela de Câmera: tira foto, envia para o Cloudinary e lista as fotos salvas.
export default function CameraScreen() {
  const [fotos, setFotos] = useState([]);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);

  const tirarFoto = async () => {
    setErro(null);

    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      setErro('Permissão de câmera negada.');
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({ quality: 0.6 });
    if (resultado.canceled) return;

    try {
      setEnviando(true);
      const url = await enviarFotoParaCloudinary(resultado.assets[0].uri);
      setFotos((atual) => [{ id: String(Date.now()), url }, ...atual]);
    } catch (e) {
      setErro(e.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Câmera + Cloudinary" />
      </Appbar.Header>

      <View style={styles.conteudo}>
        <Button mode="contained" onPress={tirarFoto} loading={enviando}>
          Tirar foto e enviar
        </Button>

        {erro && <Text style={styles.erro}>{erro}</Text>}

        {fotos.length === 0 && <Text style={styles.mensagem}>Nenhuma foto enviada ainda.</Text>}

        <FlatList
          data={fotos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => <Image source={{ uri: item.url }} style={styles.foto} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  conteudo: { flex: 1, padding: 16 },
  mensagem: { textAlign: 'center', marginTop: 24, color: '#666' },
  erro: { color: '#B3261E', marginTop: 12 },
  lista: { gap: 8, marginTop: 12 },
  foto: { width: '48%', aspectRatio: 1, margin: '1%', borderRadius: 8 },
});
