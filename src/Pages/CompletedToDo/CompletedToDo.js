import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../Context/AuthProvider';
import { getCompleted } from '../../Redux/actions';
import CompleteTask from './CompleteTask';

const CompletedToDo = () => {
    const { user, loading } = useContext(AuthContext)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const todos = useSelector(state => state.todos);
    console.log(todos)
    useEffect(() => {
        if (user?.email) {
            setEmail(user.email)
            if (email) {
                dispatch(getCompleted(email))
            }
        }
    }, [email, loading, user?.email])
    return (
        <div>
            <p>there are total  tasks left</p>
            {
                todos.map(todo => <CompleteTask key={todo._id} todo={todo}></CompleteTask>)
            }
        </div>
    );
};

export default CompletedToDo;