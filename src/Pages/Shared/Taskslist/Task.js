import { Badge, Button, Card } from 'flowbite-react';
import React from 'react';

const Task = ({ todo }) => {
    return (
        <div>
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {todo.title}
                </h5>
                <div className='flex justify-end gap-2'>
                    <Badge color="success">
                        Task Complete
                    </Badge>
                    <Badge color="failure">
                        Delete
                    </Badge>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {todo?.details}
                </p>
                <Button className='flex justify-start w-32'>
                    Add Info
                </Button>
            </Card>
        </div>
    );
};

export default Task;