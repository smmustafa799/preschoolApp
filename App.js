import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/Splash';
import Home from './src/Home';
import English from './src/English';
import EnglishS from './src/EnglishS';
import Numbers from './src/Numbers';
import Telugu from './src/Telugu';
import Hindi from './src/Hindi';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash"  component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="English"  component={English} />
        <Stack.Screen name="EnglishS"  component={EnglishS} />
        <Stack.Screen name="Numbers"  component={Numbers} />
        <Stack.Screen name="Telugu" component={Telugu} />
        <Stack.Screen name="Hindi" component={Hindi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
