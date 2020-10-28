import React, { Component, useState } from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { EnglishLetters } from './data';
import { Images } from './images/images';
import EnglishS from './EnglishS'


const EnglishScreen = (props) => {
    const [counter, SetCounter] = useState(1);
    var converter = require('number-to-words');
    const numSpelling = converter.toWords(counter);
    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>

                <View style={{ flexDirection: "row", marginTop: 3 }}>
                    <View>
                        <TouchableOpacity onPress={() => {
                            SetCounter(counter - 1)
                        }}>
                            <Image style={{ height: 95, width: 105 }} source={require("./images/English/arrowback.jpeg")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 150 }}>
                        <TouchableOpacity onPress={() => {
                            SetCounter(counter + 1)

                        }}>
                            <Image style={{ height: 95, width: 105 }} source={require("./images/English/arrow.jpeg")} />
                        </TouchableOpacity>
                    </View>

                </View>
                <Text style={{ fontSize: 45, textAlign: "center", color: "blue", fontWeight: "bold" }}>
                    {numSpelling}
                </Text>

                <Text style={{ fontSize: 350, textAlign: "center", color: "red", fontWeight: "bold", marginTop:-40 }}>
                    {counter}
                </Text>
                <View style={{ flexDirection: "row" }}>



                    {/* <View style={{ marginRight: 20, marginBottom: 100 }}>

                              <TouchableOpacity onPress={() => this.props.navigation.navigate('EnglishS')}>
                                  <Image style={{ height: 75, width: 75 }} source={img1} />
                              </TouchableOpacity>
                          </View> */}

                </View>
            </View>

        </View>
    );
};

export default EnglishScreen;