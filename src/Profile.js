import 'react-native-gesture-handler';
import React, { Component } from 'react'; 
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default class Ppp extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={{height: 500, width : 300}} source={require('./src/images/ammulu.jpeg')}
            />
            <Text style={styles.logotext}>
          <Text style ={{color : 'blue', }}>My</Text>
          <Text style ={{color : 'red', fontSize : 20}}>Family</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white'
  },
  logo : {
    alignItems : "center",
    flexGrow : 1,
    justifyContent : 'center'
  },
    logotext : {
      fontSize : 20,
      fontWeight : "bold"
  }
});

AppRegistry.registerComponent('Ppp', () => Ppp);