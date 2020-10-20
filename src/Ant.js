import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';


class task2screen extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1,justifyContent:"center",alignItems:"center"}}>
                
                <Image style={{height: 250, width : 350}} source={require('./images/Ant.jpeg')}/>
                <Text style={{fontSize:72, fontWeight:"bold", color:"red"}}>Ant</Text>
            </View>
            
        );
    }
}

export default task2screen;