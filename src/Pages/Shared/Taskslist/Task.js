import { Dialog, Transition } from '@headlessui/react';
import { Badge, Button, Card, FileInput, Label, TextInput } from 'flowbite-react';
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
const Task = ({ todo }) => {
    let [isOpen, setIsOpen] = useState(false)
    const [disabled, setDisabled] = useState(true);
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleButton = (e) => {
        if (e.target.value) {
            setDisabled(false)
        }
    }
    const dispatch = useDispatch();
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
                        <Badge color="warning">
                            Complete
                        </Badge>
                    }
                    <Badge color="failure">
                        Delete
                    </Badge>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {todo?.details}
                </p>
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
                                    <form>
                                        <div className="mt-2">
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        htmlFor="Details"
                                                        value="Add Details"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="large"
                                                    type="text"
                                                    sizing="lg"
                                                    defaultValue={todo?.details}
                                                />
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
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                disabled={disabled}
                                                type="button"
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