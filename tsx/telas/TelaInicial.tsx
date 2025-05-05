import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../style';

export default function TelaInicial({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao BusInfo</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaRegistro')}>
        <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaChat')}>
        <Text style={styles.buttonText}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaRotas')}>
        <Text style={styles.buttonText}>Rotas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaFeedback')}>
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>
    </View>
  );
}
