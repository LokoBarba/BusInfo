import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TelaChat from '../telas/TelaChat';
import TelaFeedback from '../telas/TelaFeedback';
import TelaInicial from '../telas/TelaInicial';
import TelaLogin from '../telas/TelaLogin';
import TelaRegistro from '../telas/TelaRegistro';
import TelaRotas from '../telas/TelaRotas';

const Stack = createNativeStackNavigator();

export default function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaRegistro" component={TelaRegistro} />
        <Stack.Screen name="TelaChat" component={TelaChat} />
        <Stack.Screen name="TelaRotas" component={TelaRotas} />
        <Stack.Screen name="TelaFeedback" component={TelaFeedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}