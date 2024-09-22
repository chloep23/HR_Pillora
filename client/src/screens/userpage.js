import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";

function PillItem() {
    
}


export default function UserPage() {
    const { user } = useSelector((state) => state.auth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const fetchUser = async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        try {
          const response = await axios.get('api/user/me', config);
          setName(response.data.name);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
      useEffect(() => {
        fetchUser();
      }, []); // Empty dependency array ensures this runs once when the component mounts

    
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     axios.get('http://localhost:8080') 
    //     .then(response => {
    //         setName(response.data.name); 
    //         setLoading(false); 
    //     })
    //     .catch(err => {
    //         setError(err.message); 
    //         setLoading(false);
    //     });
    // }, []); 

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    return(
        <div className="bg-blue h-screen">
            <div className = "flex flex-col w-screen h-screen ">
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-14 font-spartan">Welcome, </h1>
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-4 font-spartan">{name}! </h1>

                <div className = "flex flex-col rounded-3xl drop-shadow-xl w-85 h-60 left-0 right-0 mx-auto mt-10 bg-white">
                    <div className = "flex justify-content">
                        <img src="/assets/images/prescription_icon.png" alt="Prescription Icon" className = "ml-5 mt-4 h-10 w-10 "></img>
                        <h1 className="text-darkblue text-3xl text-left tracking-widest ml-3 mt-5 font-spartan">Prescriptions </h1>
                        
                    </div>
                    
                </div>

                <div className = "grid grid-cols-2 gap-5 w-85 mt-7 left-0 right-0 mx-auto ">
                    <button onClick={openModal} // Open modal on button click 
                        className = "flex flex-col rounded-3xl drop-shadow-xl w-44 h-60 left-0 right-0 mx-auto bg-white">
                        <img src="/assets/images/ai_icon.png" alt="AI Icon" className = "left-0 right-0 mx-auto mt-7 h-30 w-28 "></img>
                        <h1 className="text-darkblue text-2xl left-0 right-0 mx-auto tracking-widest mt-auto font-spartan ">Need Help </h1>
                        <h2 className="text-darkblue text-base left-0 right-0 mx-auto tracking-widest mb-3 font-spartan">AI ChatBot </h2>
                    </button>
                    <div className = "flex flex-col w-44 h-60">
                        <button className = "flex flex-col rounded-3xl drop-shadow-xl w-40 h-28 left-0 right-0 mx-auto bg-white">
                            <img src="/assets/images/notif_icon.png" alt="Notification Icon" className = "left-0 right-0 mx-auto mt-5 h-12 w-10 "></img>
                            <h1 className="text-darkblue text-base left-0 right-0 mx-auto tracking-widest mt-2 font-spartan">Notify </h1>
                        </button>
                        <button className = "flex flex-col rounded-3xl drop-shadow-xl w-40 h-28 left-0 right-0 mx-auto mt-5 bg-white">
                            <img src="/assets/images/doctor_icon.png" alt="Doctor Icon" className = "left-0 right-0 mx-auto mt-5 h-12 w-11 "></img>
                            <h1 className="text-darkblue text-base left-0 right-0 mx-auto tracking-widest mt-2 font-spartan">Doctor </h1>
                        </button>
                    </div>

                </div>
            </div>
            {/* AI Chatbot Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="flex flex-col overflow-y-scroll bg-blue rounded-3xl shadow-lg w-5/6 h-1/2 max-w-md">
                    <button
                        className="text-2xl text-gray-600 hover:text-gray-900"
                        onClick={closeModal}
                    >
                        {/* < /> */}
                    </button>
                    <button onClick={closeModal}>
                        <img src="/assets/images/exit.png" alt="Exit Icon" className = "ml-auto mr-6 mt-7 h-5 w-5 "></img>
                    </button>
                    <div className="flex justify-between px-6 left-0 right-0 mx-auto w-full mt-1">
                        <img src="/assets/images/ai_icon.png" alt="AI Icon" className = "h-20 w-18 "></img>
                        <div className="flex flex-col mr-12">
                            <h2 className="text-darkblue mt-2 text-2xl text-left font-spartan font-bold">Meet Pillora</h2>
                            <h2 className="text-darkblue mt-2 text-lg text-left font-spartan font-bold">How can I help?</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between bg-calendarblue rounded-b-3xl shadow-lg w-full h-28 mt-auto mb-0">
                        <div className="mt-7 flex items-center justify-between w-11/12 h-14 px-4 py-2 left-0 right-0 mx-auto text-medium font-spartan text-calendarblue focus:outline-none focus:border-white bg-white rounded-3xl ">
                            <input
                            type="text"
                            className=""
                            placeholder="What's on your mind?"
                            />
                            <button>
                                <img src="/assets/images/arrow.png" alt="AI Icon" className = "ml-5 h-8 w-88 "></img>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    )
};
