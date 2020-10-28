import React, { Component, useState } from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { TeluguLetters } from './data';
import { Images } from './images/images';
import EnglishS from './EnglishS';


const TeluguScreen = (props) => {
    const [letterID, SetLetterID] = useState(1);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/* <Text>{letterID}</Text> */}
            <FlatList
                keyExtractor={item => item.id}
                data={TeluguLetters.filter(d => d.id == letterID)}
                renderItem={({ item }) => {
                    const img1 = Images[item.img1url]

                    return (
                        <View>
                            <View style={{ flexDirection: "row", marginTop: 10}}>
                              
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        SetLetterID(letterID - 1)
                                        }}>
                                        <Image style={{ height: 95, width: 105 }} source={require("./images/English/arrowback.jpeg")} />
                                    </TouchableOpacity>
                                </View>
                              
                                <View style={{ marginLeft: 150 }}>
                                    <TouchableOpacity onPress={() => {
                                        SetLetterID(letterID + 1)

                                        console.log({ letterID })
                                    }}>
                                        <Image style={{ height: 95, width: 105 }} source={require("./images/English/arrow.jpeg")} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <Text style={{ fontSize: 200, textAlign: "center", color: "red", fontWeight: "bold" }}>
                                {item.name}
                            </Text>

                            <View>
                                <Image style={{ height: 200, width: 300, alignSelf: "center", borderRadius: 4 }} source={img1} />
                            </View>

                            <View>
                                <Text style={{ fontSize: 50, textAlign: "center", color: "blue", fontWeight: "bold" }}>
                                    {item.img1name}</Text>
                            </View>

                        </View>
                    );
                }
                }
            />

        </View>
    );
};

export default TeluguScreen;