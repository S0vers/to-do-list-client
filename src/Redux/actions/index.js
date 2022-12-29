import { ADDNEW_TODO, GETALL_TODO } from "./type";
import axios from "axios";
const api_url = 'http://localhost:5000'


export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${api_url}/todos`, { data })
        dispatch({ type: ADDNEW_TODO, payload: res.data })
    }
    catch (error) {
        console.log('Error while calling addnewtodo', error.message)
    }

}
export const getAllTodos = (email) => async (dispatch) => {
    try {
        const res = await axios.get(`${api_url}/todosmail?email=${email}`)
        console.log(`${api_url}/todosmail?email=${email}`)
        dispatch({ type: GETALL_TODO, payload: res.data })
    }
    catch (error) {
        console.log('Error while calling Get all todos', error.message)
    }
}