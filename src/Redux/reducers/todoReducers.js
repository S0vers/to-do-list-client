import * as actionTypes from '../actions/type'

export const todoReducers = (state = [], action) => {

    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state]
        case actionTypes.GETALL_TODO:
            return action.payload
        default:
            return state;
    }
}