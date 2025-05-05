import React from 'react';
import { Text, View } from 'react-native';
import styles from '../style';

export default function TelaRotas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rotas disponíveis:</Text>
      <Text style={styles.mensagem}>- Centro ↔ Belas Artes</Text>
      <Text style={styles.mensagem}>- Centro ↔ Suarão</Text>
      <Text style={styles.mensagem}>- Centro ↔ Gaivota</Text>
    </View>
  );
}