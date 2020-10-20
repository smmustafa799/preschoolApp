import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { max } from 'react-native-reanimated';


class task2screen extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1,justifyContent:"center",alignItems:"center"}}>
                
                <Image style={{height: 250, width : 400}} source={require('./images/Aeroplane.jpeg')}/>
                <Text style={{fontSize:72, fontWeight:"bold", color:"red"}}>Aeroplane</Text>
            </View>
            
        );
    }
}

export default task2screen;