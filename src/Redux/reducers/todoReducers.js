import * as actionTypes from '../actions/type'

export const todoReducers = (state = [], action) => {

    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.payload, ...state]
        case actionTypes.GETALL_TODO:
            return action.payload
        case actionTypes.GETALL_COMPLETED:
            return action.payload
        // case actionTypes.TOGGLE_Complete:
        //     return state.map(todo => (
        //         todo._id === action.payload._id ? { ...todo, todo.iscomplete: !todo.iscomplete} : todo
        //     ))
        default:
            return state;
    }
}