import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { Appbar, Button, Text } from 'react-native-paper';

// Tela de GPS: pede permissão, lê a posição atual e converte em endereço legível.
export default function LocalizacaoScreen() {
  const [coordenadas, setCoordenadas] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarLocalizacao = async () => {
    setErro(null);
    setCarregando(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErro('Permissão de localização negada.');
      setCarregando(false);
      return;
    }

    const posicao = await Location.getCurrentPositionAsync({});
    setCoordenadas(posicao.coords);

    // Geocodificação reversa: transforma latitude/longitude em rua, bairro, cidade...
    const [local] = await Location.reverseGeocodeAsync(posicao.coords);
    setEndereco(local);
    setCarregando(false);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Localização (GPS)" />
      </Appbar.Header>

      <View style={styles.conteudo}>
        <Button mode="contained" onPress={buscarLocalizacao} loading={carregando}>
          Obter localização atual
        </Button>

        {erro && <Text style={styles.erro}>{erro}</Text>}

        {coordenadas && (
          <Text style={styles.texto}>
            Latitude: {coordenadas.latitude.toFixed(6)}
            {'\n'}
            Longitude: {coordenadas.longitude.toFixed(6)}
          </Text>
        )}

        {endereco && (
          <Text style={styles.texto}>
            Rua: {endereco.street || 'não encontrada'}
            {'\n'}
            Bairro: {endereco.district || '-'}
            {'\n'}
            Cidade: {endereco.city || '-'}
            {'\n'}
            Estado: {endereco.region || '-'}
                {'\n'}
            CEP: {endereco.postalCode || '-'}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  conteudo: { padding: 16 },
  texto: { color: '#1C1B1F', marginTop: 16, lineHeight: 20 },
  erro: { color: '#B3261E', marginTop: 16 },
});
