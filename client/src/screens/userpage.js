import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function UserPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return(
        <div className="bg-blue h-screen">
            {/*----------HEADER------------*/}
            <div className = "flex flex-col w-screen h-screen ">
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-14 font-spartan">Welcome, </h1>
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-4 font-spartan">Chloe! </h1>

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
                <div className="flex flex-col bg-blue p-6 rounded-3xl shadow-lg w-5/6 h-1/2 max-w-md">
                    <button
                        className="text-2xl text-gray-600 hover:text-gray-900"
                        onClick={closeModal}
                    >
                        {/* < /> */}
                    </button>
                    <div className="flex justify-between items-center mr-5">
                        <img src="/assets/images/ai_icon.png" alt="AI Icon" className = "h-20 w-18 "></img>
                        <div className="flex flex-col">
                            <h2 className="text-darkblue text-2xl text-left font-spartan font-bold">Meet Pillora</h2>
                            <h2 className="text-darkblue text-lg text-left font-spartan font-bold">How can I help?</h2>
                        </div>
                    </div>
                    <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                    Close
                    </button>
                </div>
                </div>
            )}
        </div>
    )
};
