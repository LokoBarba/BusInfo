import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../style';

export default function TelaLogin() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login no BusInfo</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}