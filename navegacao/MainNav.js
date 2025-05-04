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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="BusInfo" component={TelaInicial} />
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Registro" component={TelaRegistro} />
      <Stack.Screen name="Rotas" component={TelaRotas} />
      <Stack.Screen name="Chat" component={TelaChat} />
      <Stack.Screen name="Feedback" component={TelaFeedback} />
    </Stack.Navigator>
  );
}
