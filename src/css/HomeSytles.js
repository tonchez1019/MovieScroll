import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E2747',
        padding: 10
    },
    header: {
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        elevation: 4, 
    },
    containerItem: {
        flex: 1,
        padding: 20,
    },
    containerItemMovies: {
        flex: 1,

    },
    title: {
        fontSize: 35,
        color: '#8DA0BC',
        textAlign: 'center',
        marginBottom: 5,
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,

    },
})