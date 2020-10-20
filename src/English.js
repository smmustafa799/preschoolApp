import { TouchableOpacity } from 'react-native-gesture-handler';
import * as React from 'react';
import { Image, Button, View, Text, StyleSheet, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const data = require('./models/data.js');

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        <Stack.Screen name="AScreen" component={AScreen} />
        <Stack.Screen name="AppleScreen"  component={AppleScreen} />
        <Stack.Screen name="AntScreen"  component={AntScreen} />
        <Stack.Screen name="AeroplaneScreen"  component={AeroplaneScreen} />
      </Stack.Navigator>
  );
}

function AScreen({navigation})
{
json_function = () => {
    Alert.alert(
        'Json Text',
        json_fragment
    );
}
    
    return (
        <View style={{ flex: 1,justifyContent:"center",alignItems:"center"}}>
            <View style={{marginLeft:250, marginTop:70}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Bscreen')}>
                        <Image style={{height: 100, width : 120}} source={require('./images/Next.jpeg')}/>
                    </TouchableOpacity>
            </View>
            <Text style={{fontSize:350, color:"red",fontWeight:"bold" }}>A</Text>
            <View style={{flexDirection:"row"}}>
                <View style={{marginRight:20,marginBottom:100}}>
                    <TouchableOpacity onPress={() => navigation.navigate('AppleScreen')}>
                        <Image style={{height: 75, width : 75}} source={require('./images/Apple.jpeg')}/>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('AntScreen')}>
                    <Image style={{height: 75, width : 105}} source={require('./images/Ant.jpeg')}/>
                    </TouchableOpacity>
                </View>

                <View style={{marginLeft:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('AeroplaneScreen')}>
                    <Image style={{height: 75, width : 120}} source={require('./images/Aeroplane.jpeg')}/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        
    );
}


function AppleScreen({navigation})
{
   
    return (
        <View style={{ flex: 1,justifyContent:"center",alignItems:"center"}}>
            
            <Image style={{height: 250, width : 250}} source={require('./images/Apple.jpeg')}/>
            <Text style={{fontSize:72, fontWeight:"bold", color:"red"}}>Apple</Text>
        </View>
        
    );
}

function AntScreen({navigation})
{
   
    return (
        <View style={{ flex: 1,justifyContent:"center",alignItems:"center"}}>
            
            <Image style={{height: 250, width : 400}} source={require('./images/Ant.jpeg')}/>
            <Text style={{fontSize:72, fontWeight:"bold", color:"red"}}>Ant</Text>
        </View>
        
    );
}

function AeroplaneScreen({navigation})
{
   
    return (
        <View style={{ flex: 1,justifyContent:"center",alignItems:"center"}}>
            
            <Image style={{height: 250, width : 400}} source={require('./images/Aeroplane.jpeg')}/>
            <Text style={{fontSize:72, fontWeight:"bold", color:"red"}}>Aeroplane</Text>
        </View>
        
    );
}

export default App;