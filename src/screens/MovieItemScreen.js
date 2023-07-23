import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { ItemMovieStyles } from '../css/ItemMovieStyles';
import { Context as HomeContext } from '../context/HomeContext';
import { Icon, AirbnbRating } from 'react-native-elements'



const MovieItemScreen = (props) => {
    const { state, getList } = useContext(HomeContext);
    const { title, overview, release_date, poster_path, vote_average } = props.route.params
    console.log(JSON.stringify(props.route.params, null, 2));
    return (
        state.lenguage != 'en-US'
            ?
            <View style={ItemMovieStyles.container}>
                <Image
                    style={ItemMovieStyles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
                />
                <AirbnbRating showRating={false} />
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Nombre: </Text>{title}</Text>
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Fecha de salida: </Text>{release_date}</Text>
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Me gustas: </Text>{vote_average}</Text>
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Resumen: </Text> {overview}</Text>

            </View >
            :
            <View style={ItemMovieStyles.container}>
                <Image
                    style={ItemMovieStyles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/original/${poster_path}` }}
                />
                <AirbnbRating showRating={false} />
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Name: </Text>{title}</Text>
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Release date: </Text>{release_date}</Text>
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Rate: </Text>{vote_average}</Text>
                <Text style={ItemMovieStyles.textItem}><Text style={{ fontSize: 17, fontWeight: '700' }}>Overview: </Text>{overview}</Text>

            </View >
    );
}
export default MovieItemScreen

const styles = StyleSheet.create({})
