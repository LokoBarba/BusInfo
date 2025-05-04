import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TelaLogin({ navegacao }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text>Senha</Text>
      <TextInput style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={() => navegacao.navigate('BusInfo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15 }
});
