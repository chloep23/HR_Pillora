import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset} from '../features/auth/authSlice'


const LoginPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        password: ''
    })

    const {name, phoneNumber, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            
        }
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            name,
            phoneNumber,
            password
        }

        dispatch(register(userData))
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-blue">
            
                <div className="flex flex-col w-85 h-2/3 bg-white rounded-2xl shadow-xl">
                    <img src="./assets/images/logo.png" alt="Logo" className="left-0 right-0 mx-auto mt-10 h-auto w-80" />

                    <form onSubmit={onSubmit}>
                    <div className="flex flex-col mt-10 w-80 left-0 right-0 mx-auto">
                        <label className="block ml-2 mb-1 font-spartan text-left text-2xl tracking-widest font-medium text-darkblue">
                        Name
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="What should we call you?"
                        id = 'name'
                        name = 'name'
                        value = {name}
                        onChange={onChange}
                        />
                    </div>

                    <div className="flex flex-col mt-10 w-80 left-0 right-0 mx-auto">
                        <label className="block ml-2 mb-1 text-2xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        Phone 
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="How can we reach you?"
                        id='phoneNumber'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={onChange}
                        />
                    </div>
                    {/* CHLOE FIX STYLING :) */}
                    <div className="flex flex-col mt-10 w-80 left-0 right-0 mx-auto">
                        <label className="block ml-2 mb-1 font-spartan text-left text-2xl tracking-widest font-medium text-darkblue">
                        Password
                        </label>
                        <input
                        type="password"
                        className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter password here"
                        id='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-10 w-80 px-4 py-2 font-medium font-spartan text-white text-xl bg-calendarblue rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-white"
                    >
                        Login
                    </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
