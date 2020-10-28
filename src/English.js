import React, { Component, useState } from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import { EnglishLetters } from './data';
import { Images } from './images/images';
import EnglishS from './EnglishS';


const EnglishScreen = (navigation) => {
    const [letterID, SetLetterID] = useState(1);

    return (
        
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/* <Text>{letterID}</Text> */}
            <FlatList

                keyExtractor={item => item.id}
                // data={EnglishLetters.filter(d => d.id == this.state.letterID)}
                data={EnglishLetters.filter(d => d.id == letterID)}
                renderItem={({ item }) => {
                    const img1 = Images[item.img1url]
                    const img2 = Images[item.img2url]
                    const img3 = Images[item.img3url]
                    return (

                        <View>

                            <View style={{ flexDirection: "row", marginTop:10 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        SetLetterID(letterID - 1)

                                        console.log({ letterID })
                                    }}>
                                        <Image style={{ height: 95, width: 105 }} source={require("./images/English/arrowback.jpeg")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginLeft:150}}>
                                    <TouchableOpacity onPress={() => {
                                        SetLetterID(letterID + 1)

                                        console.log({ letterID })
                                    }}>
                                        <Image style={{ height: 95, width: 105 }} source={require("./images/English/arrow.jpeg")} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <Text style={{ fontSize: 350, marginLeft: 50, color: "red", fontWeight: "bold" }}>
                                {item.name}
                            </Text>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ marginRight: 20, marginBottom: 100 }}>

                                    <TouchableOpacity onPress={() => this.navigation.navigate('EnglishS')}>
                                        <Image style={{ height: 90, width: 100 }} source={img1} />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EnglishS')}>
                                        <Image style={{ height: 90, width: 100, borderRadius: 4 }} source={img2} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginLeft: 20 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Aeroplane')}>
                                        <Image style={{ height: 90, width: 100 }} source={img3} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    );
                }
                }
            />

        </View>
    );
};


function Homescreen({navigation})
{
  let data = {name:'subhani', email:'subhani.prince@gmail.com', address:'Subhani nagar'}
  return(
  <View>
    <Text style={{fontSize:50}}>Hello world!!</Text>
    <Button title="Go to details" onPress={()=>navigation.push('Details',data)}/>
  </View>
  )
}

function Detailscreen({route})
{
  console.warn(route.params)
  let data = route.params
  return(
  <View>
    <Text style={{fontSize:30}}>{data.name}</Text>
    <Text style={{fontSize:30}}>{data.email}</Text>
    <Text style={{fontSize:30}}>{data.address}</Text>
  </View>
  )
}

export default EnglishScreen;