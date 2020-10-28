import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class task2screen extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1, alignItems:"center"}}>
                 
                <View style={{flexDirection: 'row', marginTop:150}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('English')}>
                        <View style={{backgroundColor:"#ff4d4d",paddingVertical : 12, paddingHorizontal : 12,
                        borderRadius : 25, width : 300, marginRight:5, marginLeft:5}}>
                            <Text style={{textAlign:"center", color:"white", fontSize:30}}>Alphabets</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop:50}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Hindi')}>
                        <View style={{backgroundColor:"#FF9F33",paddingVertical : 12, paddingHorizontal : 12,
                        borderRadius : 25, width : 300, marginRight:10, marginLeft:10}}>
                            <Text style={{textAlign:"center", color:"white", fontSize:30}}>Hindi</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop:50}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Telugu')}>
                        <View style={{backgroundColor:"#67AE54",paddingVertical : 12, paddingHorizontal : 12,
                        borderRadius : 25, width : 300, marginRight:10, marginLeft:10}}>
                            <Text style={{textAlign:"center", color:"white", fontSize:30}}>Telugu</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginTop:50}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Numbers')}>
                        <View style={{backgroundColor:"#29A8CE",paddingVertical : 12, paddingHorizontal : 12,
                        borderRadius : 25, width : 300, marginRight:10, marginLeft:10}}>
                            <Text style={{textAlign:"center", color:"white", fontSize:30}}>Numbers</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },

  buttonStyle:{
      backgroundColor : "red",
      paddingVertical : 12,
      paddingHorizontal : 12,
      borderRadius : 25
  },

  buttonText:{
      color : "white",
      fontSize : 18
  }
});
export default task2screen;