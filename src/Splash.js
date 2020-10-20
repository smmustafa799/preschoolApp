import 'react-native-gesture-handler';
import React, { Component } from 'react'; 
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';


class Splash extends Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 3000);
  }

  render(){
    return (

      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={{height: 300, width : 300}} source={require('./images/1.jpeg')}
            />
            <Text style={styles.logotext}>
          <Text style ={{color : 'blue', }}>Learn </Text>
          <Text style ={{color : 'red', fontSize : 30}}>Alphabets</Text>
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
      fontSize : 30,
      fontWeight : "bold"
  }
});

export default Splash;