import React, { useContext } from 'react';
import { Disclosure, } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className=" sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <Link
                                            to='/'
                                            className={' text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                        >
                                            Add Task
                                        </Link>
                                        <Link
                                            to='/todolist'
                                            className={' text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                        >
                                            Task List
                                        </Link>
                                        <Link
                                            to='/completed'
                                            className={' text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                        >
                                            Completed Task
                                        </Link>
                                        {
                                            user?.uid ?
                                                <p onClick={handleLogOut}
                                                    className={' text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                                >
                                                    Signout
                                                </p>
                                                : <Link
                                                    to='/Login'
                                                    className={' text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                                >
                                                    Login
                                                </Link>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>

    );
};

export default Navbar;