import 'react-native-gesture-handler';
import React, { Component } from 'react'; 
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import HomeScreen from '.src/Home';

export default class Ppp extends Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 2000);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={{height: 300, width : 300}} source={require('./images/1.jpeg')}
            />
            <Text style={styles.logotext}>
          <Text style ={{color : 'blue', }}>Alpha</Text>
          <Text style ={{color : 'red', fontSize : 20}}>Bets</Text>
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