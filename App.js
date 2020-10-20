import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import English from './src/English';
import Learn from './src/Learn';
import Splash from './src/Splash';
import test from './src/Test';
import read from './src/Read';
import apple from './src/Apple';
import ant from './src/Ant';
import Aeroplane from './src/Aeroplane';
import B from './src/B';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash"  component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="English"  component={English} />
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen name="Test" component={test} />
        <Stack.Screen name="Read" component={read} />
        <Stack.Screen name="Apple"  component={apple} />
        <Stack.Screen name="Ant" component={ant} />
        <Stack.Screen name="Aeroplane" component={Aeroplane} />
        <Stack.Screen name="B" component={B} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
