import { MD3LightTheme } from 'react-native-paper';

// Tema fixo (sempre claro) — garante contraste de texto/ícones em qualquer dispositivo,
// independente do modo escuro do sistema.
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6750A4',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    onSurface: '#1C1B1F',
    onSurfaceVariant: '#49454F',
    error: '#B3261E',
  },
};

export default theme;
