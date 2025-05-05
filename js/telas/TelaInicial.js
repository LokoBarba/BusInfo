import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -24.1736,
          longitude: -46.7882,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Ionicons name="person-add" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubbles-outline" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Rotas')}>
          <MaterialCommunityIcons name="bus" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  icons: {
    position: 'absolute',
    top: 40,
    right: 20,
    gap: 20
  }
});
