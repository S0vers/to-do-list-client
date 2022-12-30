import { ADDNEW_TODO, GETALL_TODO, TOGGLE_Complete, TOGGLE_Delete, GETALL_COMPLETED, UPDATETODO } from "./type";
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
export const updateTodo = (data, id) => async (dispatch) => {
    try {
        const res = await axios.put(`${api_url}/updatetodos/${id}`, { data })
        dispatch({ type: UPDATETODO, payload: res.data })
    }
    catch (error) {
        console.log('Error while calling updatetodo', error.message)
    }

}
export const getAllTodos = (email) => async (dispatch) => {
    try {
        const res = await axios.get(`${api_url}/todosmail?email=${email}`)
        dispatch({ type: GETALL_TODO, payload: res.data })
    }
    catch (error) {
        console.log('Error while calling Get all todos', error.message)
    }


}
export const getCompleted = (email) => async (dispatch) => {
    try {
        const res = await axios.get(`${api_url}/completedtodo?email=${email}`)
        dispatch({ type: GETALL_COMPLETED, payload: res.data })
    }
    catch (error) {
        console.log('Error while calling Get all todos', error.message)
    }


}
export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.post(`${api_url}/todos/${id}`);

        dispatch({ type: TOGGLE_Complete, payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}
export const deleteToDo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${api_url}/todos/${id}`);

        dispatch({ type: TOGGLE_Delete, payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}