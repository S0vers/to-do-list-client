import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn, setLoading } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                navigate(from, { replace: true })
            })
            .catch(error => setLoginError(error.message))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                setLoginError('');
                navigate(from, { replace: true })
            })
            .catch(e => {
                setLoginError(e.message);
            })
            .finally(() => {
                setLoading(false)
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
                        name='email'
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
                        name='password'
                        type="password"
                        required={true}
                    />
                </div>
                <p className='text-red-800'>{loginError}</p>
                <div className="flex items-center gap-2">
                    New User?<Link className='text-blue-800' to='/signup'>Sign up</Link>
                </div>
                <Button type="submit">
                    Login
                </Button>
            </form>
            <Button onClick={handleGoogleSignIn} type="submit" className='w-full mt-4'>
                Sign In with Google
            </Button>
        </div>
    );
};

export default Login;