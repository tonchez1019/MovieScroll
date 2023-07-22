import createDataContext from './createDataContext'

const initialState = {
    error: false,
    message: null,
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




export const { Context, Provider } = createDataContext(
    LocationReducer,
    {
        clearState,


    },
    initialState
);