import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { HomeStyles } from '../css/HomeSytles';
import { Context as HomeContext } from '../context/HomeContext';


const HomeScreen = () => {
    const { state, getList } = useContext(HomeContext);


    useEffect(() => {
        getList()
    }, []);

    console.log(state.data);
    return (
        <View style={HomeStyles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
export default HomeScreen

const styles = StyleSheet.create({})
