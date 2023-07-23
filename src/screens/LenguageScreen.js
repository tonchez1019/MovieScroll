import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LenguageStyles } from '../css/LenguageSytles';
import { Context as HomeContext } from '../context/HomeContext';

const LenguageScreen = () => {
    const { state, setLenguage } = useContext(HomeContext);
    const navigation = useNavigation()
    return (
        <View style={LenguageStyles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('HomeScreen'), setLenguage('es-MX') }}
                style={LenguageStyles.button}>
                <Text style={LenguageStyles.text}>Español</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('HomeScreen'), setLenguage('en-US') }}
                style={LenguageStyles.button}>
                <Text style={LenguageStyles.text}>English</Text>
            </TouchableOpacity>
        </View >
    );
}
export default LenguageScreen

const styles = StyleSheet.create({})
