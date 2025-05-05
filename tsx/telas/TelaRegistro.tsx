import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../style';

export default function TelaRegistro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro no BusInfo</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}