import { Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { addNewTodo } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../Context/AuthProvider';
import TaskList from '../Shared/Taskslist/TaskList';
const Addtodo = () => {
    const { user } = useContext(AuthContext);
    const [text, setText] = useState('')
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const email = user.email;
        const title = text;
        const info = {
            email,
            title,
            createdAt: Date.now(),
            iscomplete: false
        }
        dispatch(addNewTodo(info))
        form.reset()
    }
    const onInputChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className='mx-0 my-5 md:mx-5 lg:mx-5'>
            <form onSubmit={onFormSubmit}>
                <div className="mb-2 block">
                    <Label
                        htmlFor="task"
                        value="Add Task"
                    />
                </div>
                <TextInput
                    onChange={onInputChange}
                    id="task"
                    type="text"
                    placeholder="enter new task"
                    required={true}
                />
            </form>
            <div className='mx-0 my-5 md:mx-5 lg:mx-5'>
                <TaskList></TaskList>
            </div>
        </div>
    );
};

export default Addtodo;