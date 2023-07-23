import React, { useState, useContext, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context as HomeContext } from "../context/HomeContext";
import catalog from "../config/schemas";


const ButtonCat = ({ onPress }) => {

    const { state, getTopReateMovieList } = useContext(HomeContext);
    const type = state.lenguage == 'en-US' ? "ingles" : "español"
    console.log(type);
    console.log(catalog[type]);
    return (
        catalog[type].map((item) => (
            < TouchableOpacity
                key={item.description}
                style={{ backgroundColor: '#7DA9BC', borderRadius: 8, marginBottom: 7, padding: 5 }
                }
                onPress={() => getTopReateMovieList(item)} >
                <Text style={styles.text}>{item.description}</Text>
            </TouchableOpacity >
        ))
    )
}

export default ButtonCat
const styles = StyleSheet.create({

    text: {
        fontSize: 16,
        color: '#fff'
    }
});