import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Signup = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const [signupError, setsignupError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                navigate(from, { replace: true })
            })
            .catch(error => setsignupError(error.message))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                setsignupError('')
                navigate('/')
            })
            .catch(e => {
                setsignupError(e.message);
            })
    }
    return (
        <div className='max-w-sm mx-auto'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        name='email'
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
                        name='password'
                        type="password"
                        required={true}
                    />
                </div>
                <p className='text-red-800'>{signupError}</p>
                <div className="flex items-center gap-2">
                    Already a user?<Link className='text-blue-800' to='/login'>Login</Link>
                </div>
                <Button type="submit">
                    Signup
                </Button>
            </form>
            <Button onClick={handleGoogleSignIn} type="submit" className='w-full mt-4'>
                Sign In with Google
            </Button>
        </div>
    );
};

export default Signup;