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

            const response = await httpClient.get(`&s=batman`, {
               
            });

           console.log(response);
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