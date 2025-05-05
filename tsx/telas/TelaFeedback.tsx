import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../style';

export default function TelaFeedback() {
  const [feedbackApp, setFeedbackApp] = useState('');
  const [feedbackTransporte, setFeedbackTransporte] = useState('');

  const enviarFeedback = () => {
    console.log('Feedback App:', feedbackApp);
    console.log('Feedback Transporte:', feedbackTransporte);
    setFeedbackApp('');
    setFeedbackTransporte('');
    alert('Obrigado pelo seu feedback!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Feedback</Text>
      <TextInput
        value={feedbackApp}
        onChangeText={setFeedbackApp}
        placeholder="Sobre o app"
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <TextInput
        value={feedbackTransporte}
        onChangeText={setFeedbackTransporte}
        placeholder="Sobre o transporte"
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={enviarFeedback}>
        <Text style={styles.buttonText}>Enviar Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}
