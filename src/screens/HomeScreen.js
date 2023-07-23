import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { HomeStyles } from '../css/HomeSytles';
import { Context as HomeContext } from '../context/HomeContext';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const { state, getList } = useContext(HomeContext);
    const navigation = useNavigation();
    useEffect(() => {
        getList(state.lenguage)
    }, []);

    return (
        <View style={HomeStyles.container}>
            <View style={HomeStyles.containerItem}>
                <Text style={HomeStyles.title}>MovieScroll</Text>
                <View style={HomeStyles.containerItemMovies}>
                    {
                        state.listMovie != null
                            ?
                            <FlatList
                                data={state.listMovie}
                                numColumns={3}
                                columnWrapperStyle={{ flexWrap: 'wrap', flex: 1, marginTop: 5 }}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('MovieItemScreen', item)}
                                        style={HomeStyles.imageContainer}
                                    >
                                        <Image
                                            style={HomeStyles.image}
                                            source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                                        />
                                    </TouchableOpacity>
                                }

                            />
                            : null
                    }
                </View>
            </View>
        </View >
    );
}
export default HomeScreen

const styles = StyleSheet.create({})
