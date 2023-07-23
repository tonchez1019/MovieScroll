import createDataContext from './createDataContext'
import httpClient from '../services/httpClient'

const initialState = {
    error: false,
    message: null,
    fetchingData: false,
    listMovie: null,
    lenguage: null,
    data: []
}

const LocationReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CLEAR_STATE':
            return { ...initialState }
        case 'FETCHING_DATA':
            return { ...state, fetchingData: action.payload.fetchingData }
        case 'SET_REQUEST_ERROR':
            return {
                ...state,
                error: true,
                message: action.payload.message,
                fetchingData: false
            }
        case 'GET_LIST_MOVIE':
            return {
                ...state,
                listMovie: action.payload.response,
                fetchingData: false
            }
        case 'GET_LENGUAGE':
            return {
                ...state,
                lenguage: action.payload.lengu
            }
        default:
            return state
    }

}

const clearState = (dispatch) => {
    return () => {
        dispatch({ type: 'CLEAR_STATE' });
    }
}

const getMovieList = (dispatch) => {
    return async (lengu) => {
        try {
            dispatch({ type: 'FETCHING_DATA', payload: { fetchingData: true } });
            const response = await httpClient.get(`/movie/popular?language=${lengu}`, {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmE4M2FjZGE0ZDU5ZDkyNDdkMzY5ZjY3MmNjZiIsInN1YiI6IjY0YmIzYmZmZWI3OWMyMDBmZjljNDBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fGEr3DwoR7JmuO8N17stMCYzvLJTraX9Ve2T1dfjrKQ`,
            });
            console.log('results' in response);
            if ('results' in response) {
                dispatch({
                    type: 'GET_LIST_MOVIE',
                    payload: { response: response.results }
                });
            }
            //console.log(JSON.stringify(response.results, null, 2));
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_REQUEST_ERROR',
                payload: {
                    error: true,
                    message: 'Por el momento el servicio no está disponible, inténtelo mas tarde.'
                }
            })
        }
    }

}
const getTopReateMovieList = (dispatch) => {
    return async (item) => {
        try {
            dispatch({ type: 'FETCHING_DATA', payload: { fetchingData: true } });
            const response = await httpClient.get(`/movie/${item.type}?language=${item.language}`, {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmE4M2FjZGE0ZDU5ZDkyNDdkMzY5ZjY3MmNjZiIsInN1YiI6IjY0YmIzYmZmZWI3OWMyMDBmZjljNDBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fGEr3DwoR7JmuO8N17stMCYzvLJTraX9Ve2T1dfjrKQ`,
            });
            if (!response.ok) {
                dispatch({
                    type: 'GET_LIST_MOVIE',
                    payload: { response: response.results }
                });
            }
            //console.log(JSON.stringify(response.results, null, 2));
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_REQUEST_ERROR',
                payload: {
                    error: true,
                    message: 'Por el momento el servicio no está disponible, inténtelo mas tarde.'
                }
            })
        }
    }

}
const setLenguage = (dispatch) => {
    return async (lengu) => {
        dispatch({
            type: 'GET_LENGUAGE',
            payload: { lengu }
        })
    }
}




export const { Context, Provider } = createDataContext(
    LocationReducer,
    {
        clearState,
        getMovieList,
        getTopReateMovieList,
        setLenguage


    },
    initialState
);