import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { HomeStyles } from '../css/HomeSytles';
import { Context as HomeContext } from '../context/HomeContext';
import { useNavigation } from '@react-navigation/native';
import ButtonCat from '../components/ButtonCat';
import FastImage from 'react-native-fast-image'

const HomeScreen = () => {
    const { state, getMovieList } = useContext(HomeContext);
    const navigation = useNavigation();
    useEffect(() => {
        getMovieList(state.lenguage)
    }, []);

    const renderContent = () => {
        return (
            <View style={HomeStyles.container}>
                <View style={HomeStyles.containerItem}>
                    <Text style={HomeStyles.title}>MovieScroll</Text>
                    <View style={HomeStyles.containerItemMovies}>
                        <ButtonCat />
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
                                            <FastImage
                                                style={HomeStyles.image}
                                                source={{
                                                    uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                                                    priority: FastImage.priority.normal,
                                                }}
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

    return (
        !state.fetchingData
            ?
            !state.error
                ?
                renderContent()
                :
                <View style={{ flex: 1, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', marginBottom: 3, fontSize: 16 }}>
                        {state.message}
                    </Text>
                    <Button
                        containerStyle={{ width: 120 }}
                        buttonStyle={[{ backgroundColor: '#118ea6' }]}
                        title="Actualizar"
                        onPress={() => getMovieList(state.lenguage)}
                    />
                </View>
            :
            <View style={{ flex: 1, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#118EA6" style={{ marginTop: 5 }} />
            </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({})
