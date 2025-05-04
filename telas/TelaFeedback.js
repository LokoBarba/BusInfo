import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TelaFeedback() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>

      <Text style={styles.subtitle}>Sobre o App:</Text>
      <TextInput placeholder="Descreva sua experiência" multiline style={styles.input} />

      <Text style={styles.subtitle}>Sobre o Transporte:</Text>
      <TextInput placeholder="Rota utilizada e experiência" multiline style={styles.input} />

      <Button title="Enviar Feedback" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 15 },
  subtitle: { fontSize: 18, marginTop: 15 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5, minHeight: 80 },
});
