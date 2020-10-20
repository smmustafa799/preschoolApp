import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';


class task2screen extends Component {
    
    render() {
        
        return (
            <View style={{ flex: 1,justifyContent:"center",alignItems:"center"}}>
                <Button title="Next" />
                <Text style={{fontSize:350, color:"red",fontWeight:"bold" }}>B</Text>
                <View style={{flexDirection:"row"}}>
                    <View style={{marginRight:20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Apple')}>
                        <Image style={{height: 75, width : 75}} source={require('./images/Apple.jpeg')}/>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Ant')}>
                        <Image style={{height: 75, width : 105}} source={require('./images/Ant.jpeg')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginLeft:20}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Aeroplane')}>
                        <Image style={{height: 75, width : 120}} source={require('./images/Aeroplane.jpeg')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        );
    }
}

export default task2screen;