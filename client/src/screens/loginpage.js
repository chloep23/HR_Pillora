import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle input change for username
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    // Handle input change for password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
    };

    // so it only shows on the first visit
    const [isFirstTime, setIsFirstTime] = useState(false);

    useEffect(() => {
        // Check if the user has visited before by looking for a flag in local storage
        const hasVisited = localStorage.getItem('hasVisited');
        
        if (!hasVisited) {
          // If not visited, set the state to true and mark as visited in local storage
          setIsFirstTime(true);
          localStorage.setItem('hasVisited', 'true');
        }
    }, []);


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-blue">
            
                <div className="flex flex-col w-85 h-auto bg-white rounded-2xl shadow-xl">
                    <img src="./assets/images/logo.png" alt="Logo" className="left-0 right-0 mx-auto mt-10 h-auto w-80" />

                    <form>
                    <div className="flex flex-col mt-10 w-80 left-0 right-0 mx-auto">
                        <label className="block ml-2 mb-1 font-spartan text-left text-2xl tracking-widest font-medium text-darkblue">
                        Name
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="What should we call you?"
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
                        />
                    </div>
                    {/* <div className="flex flex-col mt-10 w-80 left-0 right-0 mx-auto">
                        <label className="block ml-2 mb-1 text-2xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        Password 
                        </label>
                        <input
                        type="password"
                        className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Create a password"
                        />
                    </div> */}
                    <button
                        type="submit"
                        className="flex items-center justify-center mt-10 mb-5 w-80 px-4 py-2 left-0 right-0 mx-auto font-medium font-spartan text-white text-center text-xl bg-calendarblue rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-white"
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
