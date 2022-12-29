import React, { useContext, useEffect, useState } from 'react';
import { getAllTodos } from '../../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../../Context/AuthProvider';
import Task from './Task';
const TaskList = () => {
    const { user, loading } = useContext(AuthContext)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const todos = useSelector(state => state.todos);
    useEffect(() => {
        if (user?.email) {
            setEmail(user.email)
            if (email) {
                dispatch(getAllTodos(email))
            }
        }
    }, [email, loading, user?.email])
    return (
        <div>
            <p>there are total {todos.length} tasks left</p>
            {
                todos.map(todo => <Task key={todo._id} todo={todo}></Task>)
            }
        </div>
    );
};

export default TaskList;