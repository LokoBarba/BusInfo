import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

// Lista de palavras proibidas e variações comuns
const palavrasProibidas = [
  'puta', 'filho da puta', 'caralho', 'arrombado', 'viado', 'biscate',
  'sua mãe é minha', 'pau no cu', 'p@u no cu', 'car@lho', 'v1ado',
  'p*u', 'p@rra', 'b!scate', 'arrombad@', 'f!lho da p*ta'
];

// Função para verificar se a mensagem contém palavrões
function contemPalavrao(texto) {
  const mensagem = texto.toLowerCase().replace(/[^a-zA-Z0-9çáàâãéèêíïóôõöúçñ@!* ]/g, '');

  return palavrasProibidas.some(palavra => mensagem.includes(palavra));
}

export default function TelaChat() {
  const [mensagem, setMensagem] = useState('');
  const [historico, setHistorico] = useState([]);

  const enviarMensagem = () => {
    if (contemPalavrao(mensagem)) {
      Alert.alert('Mensagem bloqueada', 'Palavrões ou ofensas não são permitidos.');
      setMensagem('');
      return;
    }

    setHistorico([...historico, { id: Date.now().toString(), texto: mensagem }]);
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat da Rota</Text>
      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.mensagem}>{item.texto}</Text>}
        style={styles.lista}
      />
      <TextInput
        style={styles.input}
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Digite sua mensagem..."
      />
      <Button title="Enviar" onPress={enviarMensagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  lista: { flex: 1, marginBottom: 10 },
  mensagem: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
});
