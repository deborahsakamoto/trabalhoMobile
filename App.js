import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Calculadora from './screens/Calculadora';
import Tabuada from './screens/Tabuada';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculadora" component={Calculadora} />
        <Stack.Screen name="Tabuada" component={Tabuada} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
