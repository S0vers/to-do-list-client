import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='max-w-sm mx-auto'>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="potato@gmail.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    Already a user?<Link className='text-blue-800' to='/login'>Login</Link>
                </div>
                <Button type="submit">
                    Signup
                </Button>
            </form>
            <Button type="submit" className='w-full mt-4'>
                Sign In with Google
            </Button>
        </div>
    );
};

export default Signup;