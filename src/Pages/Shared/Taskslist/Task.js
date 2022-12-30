import { Dialog, Transition } from '@headlessui/react';
import { Badge, Button, Card, FileInput, Label, TextInput } from 'flowbite-react';
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo, toggleTodo, updateTodo } from '../../../Redux/actions';
const Task = ({ todo }) => {
    let [isOpen, setIsOpen] = useState(false)
    const [disabled, setDisabled] = useState(true);
    const [image, setImage] = useState([]);
    const [title, setTitle] = useState(todo.title);
    const [details, setDetails] = useState('');
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleButton = (e) => {
        if (e.target.value) {
            setDisabled(false)
            setImage(e.target.files[0])
        }
    }
    const handleTitleChange = (e) => {
        if (e.target.value) {
            setTitle(e.target.value)
        }
    }
    const handleAddedDetails = (e) => {
        if (e.target.value) {
            setDetails(e.target.value)
        }
    }
    const dispatch = useDispatch();
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const onFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const info = {
                        image: imgData.data.url,
                        title: title,
                        details: details
                    }
                    dispatch(updateTodo(info, todo._id))
                }
            })
        form.reset()
    }
    const handlecomplete = () => {
        dispatch(toggleTodo(todo._id))
    }
    return (
        <div>
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {todo.title}
                </h5>
                <div className='flex justify-end gap-2'>
                    {todo?.iscomplete ?
                        <Badge color="success">
                            Completed
                        </Badge>
                        :
                        <Badge color="warning" onClick={handlecomplete}>
                            Complete
                        </Badge>
                    }
                    <Badge color="failure" onClick={() => dispatch(deleteToDo(todo._id))}>
                        Delete
                    </Badge>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {todo?.details}
                </p>
                {
                    todo?.image ? < img className='w-64 h-64'
                        src={todo.image}
                        alt="..."
                    /> :
                        <></>
                }
                <Button onClick={openModal} className='flex justify-start w-32'>
                    Edit or Add
                </Button>
            </Card>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {todo.title}
                                    </Dialog.Title>
                                    <form onSubmit={onFormSubmit}>
                                        <div className="mt-2">
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="Details"
                                                        value="Change Title"
                                                    />
                                                </div>
                                                <TextInput
                                                    onChange={handleTitleChange}
                                                    id="large"
                                                    type="text"
                                                    sizing="lg"
                                                    defaultValue={todo?.title}
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="Details"
                                                        value="Add Details"
                                                    />
                                                </div>
                                                <TextInput
                                                    onChange={handleAddedDetails}
                                                    name='details'
                                                    id="large"
                                                    type="text"
                                                    sizing="lg"
                                                    defaultValue={todo?.details}
                                                />
                                            </div>
                                            <div id="fileUpload">
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="file"
                                                        value="Upload file"
                                                    />
                                                </div>
                                                <FileInput
                                                    onChange={handleButton}
                                                    id="file"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                disabled={disabled}
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Make Changes!
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Task;