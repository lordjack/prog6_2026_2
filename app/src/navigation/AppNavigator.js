import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListaTarefasScreen from '../screens/ListaTarefasScreen';
import CadastroTarefaScreen from '../screens/CadastroTarefaScreen';
import LocalizacaoScreen from '../screens/LocalizacaoScreen';
import CameraScreen from '../screens/CameraScreen';
import ClipboardScreen from '../screens/ClipboardScreen';
import NotificacaoScreen from '../screens/NotificacaoScreen';
import VibracaoScreen from '../screens/VibracaoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack da aba "Tarefas": lista + formulário de cadastro/edição.
function TarefasStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListaTarefas" component={ListaTarefasScreen} />
      <Stack.Screen name="CadastroTarefa" component={CadastroTarefaScreen} />
    </Stack.Navigator>
  );
}

// Ícone de cada aba, indexado pelo nome da rota (MaterialCommunityIcons).
const ICONES = {
  Tarefas: 'checkbox-marked-outline',
  Localizacao: 'map-marker-outline',
  Camera: 'camera-outline',
  Clipboard: 'clipboard-text-outline',
  Notificacoes: 'bell-outline',
  Vibracao: 'vibrate',
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name={ICONES[route.name]} color={color} size={size} />
        ),
      })}
    >
      <Tab.Screen name="Tarefas" component={TarefasStack} />
      <Tab.Screen name="Localizacao" component={LocalizacaoScreen} options={{ title: 'GPS' }} />
      <Tab.Screen name="Camera" component={CameraScreen} options={{ title: 'Câmera' }} />
      <Tab.Screen name="Clipboard" component={ClipboardScreen} options={{ title: 'Clipboard' }} />
      <Tab.Screen
        name="Notificacoes"
        component={NotificacaoScreen}
        options={{ title: 'Notificações' }}
      />
      <Tab.Screen name="Vibracao" component={VibracaoScreen} options={{ title: 'Vibração' }} />
    </Tab.Navigator>
  );
}
