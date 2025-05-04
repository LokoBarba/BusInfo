import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const rotas = [
  { id: '1', nome: 'Rota Centro - Gaivota' },
  { id: '2', nome: 'Rota Centro - Belas Artes' },
  { id: '3', nome: 'Rota Gaivota - Jardim Suarão' },
];

export default function TelaRotas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rotas Disponíveis</Text>
      <FlatList
        data={rotas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 15 },
  item: { padding: 10, borderBottomWidth: 1 },
});
