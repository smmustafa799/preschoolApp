import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from './components/imageDetail'


const ImageScreen = () => {
    return <View>
        <ImageDetail title ="Apple"/>
        <ImageDetail title ="Ant"/>
        <ImageDetail title ="Aeroplane"/>

    </View>
};

export default ImageScreen;

