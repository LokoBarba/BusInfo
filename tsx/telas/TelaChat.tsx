import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../style';

const PALAVROES = ['puta', 'caralho', 'arrombado', 'viado', 'biscate', 'pau no cu'];

function contemPalavrao(mensagem: string) {
  const normalizada = mensagem.toLowerCase().normalize('NFD').replace(/[^\w\s]/gi, '').replace(/[\u0300-\u036f]/g, '');
  return PALAVROES.some((palavrao) => normalizada.includes(palavrao));
}

export default function TelaChat() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState<string[]>([]);

  const enviarMensagem = () => {
    if (contemPalavrao(mensagem)) {
      Alert.alert('Mensagem bloqueada', 'Sua mensagem contém palavras ofensivas.');
      return;
    }
    setMensagens([...mensagens, mensagem]);
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mensagens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.mensagem}>{item}</Text>}
      />
      <TextInput
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Digite sua mensagem"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={enviarMensagem}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}