import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeStyles } from '../css/HomeSytles';


const HomeScreen = () => {
    return (
        <View style={HomeStyles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
export default HomeScreen

const styles = StyleSheet.create({})
