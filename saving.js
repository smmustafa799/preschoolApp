import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View, Button} from 'react-native';
import Ammulu from './src/ammulu';
import splash from './src/splash';

const Stack= createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        fontSize:30,
        headerStyle:{
          backgroundColor:'red'
        },
        headerTintColor:'white'
      }}>
        <Stack.Screen name="Home" component={Homescreen} ></Stack.Screen>
        <Stack.Screen name="Ammulu" component={Ammulu} ></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};



function Homescreen({navigation})
{
  let data = {name:'subhani', email:'subhani.prince@gmail.com', address:'Subhani nagar'}
  return(
  <View>
    <Text style={{fontSize:50}}>Hello world!!</Text>
    <Button title="Go to First Screen" onPress={()=>navigation.navigate('Ammulu')}/>

  </View>
  )
}



export default App;