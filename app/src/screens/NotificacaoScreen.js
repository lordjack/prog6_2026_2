import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Appbar, Button, Text } from 'react-native-paper';

// Define como a notificação deve se comportar quando o app está aberto (em primeiro plano).
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Tela de Notificações: dispara uma notificação local de teste.
// Observação: no Expo Go, apenas notificações locais funcionam (push remoto exige build).
export default function NotificacaoScreen() {
  useEffect(() => {
    Notifications.requestPermissionsAsync();
  }, []);

  const enviarNotificacao = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Lembrete de tarefa 📋',
        body: 'Você tem tarefas pendentes na sua lista!',
      },
      trigger: null, // null = dispara imediatamente
    });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Notificações" />
      </Appbar.Header>

      <View style={styles.conteudo}>
        <Text style={styles.texto}>
          Toque no botão para receber uma notificação local de teste.
        </Text>
        <Button mode="contained" onPress={enviarNotificacao}>
          Enviar notificação
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  conteudo: { padding: 16 },
  texto: { color: '#1C1B1F', marginBottom: 16 },
});
