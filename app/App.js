import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme as NavDefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './src/theme';
import AppNavigator from './src/navigation/AppNavigator';

// Tema da navegação alinhado ao tema do Paper (fundo branco, mesma cor primária).
const navigationTheme = {
  ...NavDefaultTheme,
  colors: { ...NavDefaultTheme.colors, background: '#fff', primary: theme.colors.primary },
};

// Ponto de entrada do app: monta os providers globais e a navegação (tabs + stack).
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          <StatusBar barStyle="dark-content" />
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
