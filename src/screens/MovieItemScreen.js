import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { ItemMovieStyles } from '../css/ItemMovieStyles';
import { Context as HomeContext } from '../context/HomeContext';


const MovieItemScreen = (props) => {
    const { state, getList } = useContext(HomeContext);
    const { title, overview, release_date, poster_path, vote_average } = props.route.params
    console.log(JSON.stringify(props.route.params, null, 2));
    return (
        <View style={ItemMovieStyles.container}>
            <Image
                style={ItemMovieStyles.image}
                source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
            />
            <Text style={ItemMovieStyles.textItem}>{title} </Text>
            <Text style={ItemMovieStyles.textItem}>{release_date} </Text>
            <Text style={ItemMovieStyles.textItem}>{vote_average} </Text>
            <Text style={ItemMovieStyles.textItem}>{overview} </Text>

        </View >
    );
}
export default MovieItemScreen

const styles = StyleSheet.create({})
