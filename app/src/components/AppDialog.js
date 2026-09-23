import React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

// Dialog genérico e reutilizável: com "onConfirm" mostra Cancelar/Confirmar,
// sem "onConfirm" mostra apenas um botão OK (útil para mensagens de sucesso).
export default function AppDialog({
  visible,
  title,
  message,
  onDismiss,
  onConfirm,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  okLabel = 'OK',
}) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text>{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          {onConfirm ? (
            <>
              <Button onPress={onDismiss}>{cancelLabel}</Button>
              <Button onPress={onConfirm}>{confirmLabel}</Button>
            </>
          ) : (
            <Button onPress={onDismiss}>{okLabel}</Button>
          )}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
