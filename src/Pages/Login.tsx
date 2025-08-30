import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface LoginType {
    email: string
    password: string
    name: string
}

const Login = () => {
    const [currentState, setCurrentState] = useState('Login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const getApiUsers = async () => {
        const res = await axios.get("http://localhost:3000/users")
        setUsers(res.data)
    }

    useEffect(() => {
        getApiUsers()
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (currentState === 'Login') {
            const checkUser = users.some((item: LoginType) => (
                item.email === email && item.password === password
            ))
            checkUser ? navigate('/') : toast.error('Account does not exist')
        } else {
            const checkUser = users.some((item: LoginType) => (
                item.name === userName || item.email === email
            ))
            if (checkUser) return toast.error('Account does existed')
            axios.post("http://localhost:3000/users", {
                name: userName,
                email,
                password
            })
            getApiUsers()
            navigate('/')
            toast.success('Login success')
        }
    }

    return (
        <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
            onSubmit={handleSubmit}
        >
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>Login</p>
                <hr className="border-none h-[1.5px] w-8 bg-gray-800"></hr>
            </div>
            {currentState === 'Login' ? '' : (
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-800"
                    placeholder="Username"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    required
                />
            )}
            <input
                type="email"
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                className="w-full px-3 py-2 border border-gray-800"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className=" cursor-pointer">Forgot your password?</p>
                {currentState === 'Login' ? (
                    <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
                        Create account
                    </p>
                ) : (
                    <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
                        Login here
                    </p>
                )}
            </div>
            <button className="bg-black text-white font-light px-8 py-2 mt-4">
                {currentState === 'Login' ? 'Login' : 'Sign Up'}
            </button>
        </form>
    );
};

export default Login;
