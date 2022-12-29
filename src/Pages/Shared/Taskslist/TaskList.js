import React, { useContext, useEffect, useState } from 'react';
import { getAllTodos } from '../../../Redux/actions';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../Context/AuthProvider';
const TaskList = () => {
    const { user, loading } = useContext(AuthContext)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    useEffect(() => {
        if (user?.email) {
            setEmail(user.email)
            dispatch(getAllTodos(email))
        }
    }, [email, loading, user?.email])
    return (
        <div>
            <h3>Hello There</h3>
        </div>
    );
};

export default TaskList;