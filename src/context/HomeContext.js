import createDataContext from './createDataContext'
import httpClient from '../services/httpClient'

const initialState = {
    error: false,
    message: null,
    data: []
}

const LocationReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CLEAR_STATE':
            return { ...initialState }
        default:
            return state
    }

}

const clearState = (dispatch) => {
    return () => {
        dispatch({ type: 'CLEAR_STATE' });
    }
}

const getList = (dispatch) => {
    return async () => {
        try {

            const response = await httpClient.get(`/movie/top_rated?language=es-MX`, {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE1NmE4M2FjZGE0ZDU5ZDkyNDdkMzY5ZjY3MmNjZiIsInN1YiI6IjY0YmIzYmZmZWI3OWMyMDBmZjljNDBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fGEr3DwoR7JmuO8N17stMCYzvLJTraX9Ve2T1dfjrKQ`,
            });

            console.log(JSON.stringify(response, null, 2));
        } catch (error) {
            console.log(error);
        }
    }

}




export const { Context, Provider } = createDataContext(
    LocationReducer,
    {
        clearState,
        getList


    },
    initialState
);