import { Badge, Card } from 'flowbite-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToDo } from '../../Redux/actions/index'
const CompleteTask = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {todo.title}
                </h5>
                <div className='flex justify-end gap-2'>
                    <Badge color="warning">
                        <Link to='/todolist'>Unfinised Tasks</Link>
                    </Badge>
                    <Badge color="failure" onClick={() => dispatch(deleteToDo(todo._id))}>
                        Delete
                    </Badge>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {todo?.details}
                </p>
            </Card>
        </div>
    );
};

export default CompleteTask;