import React from "react";
import { Link } from 'react-router-dom';

export default function UserPage() {
    return(
        <div className="bg-blue min-h-screen">
            {/*----------HEADER------------*/}
            <div className = "flex flex-col overflow-y-scroll w-screen min-h-screen ">
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-14 font-spartan">Welcome, </h1>
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-4 font-spartan">Chloe! </h1>

                <div className = "flex flex-col rounded-3xl drop-shadow-xl w-85 h-60 left-0 right-0 mx-auto mt-10 bg-white">
                    <div className = "flex justify-content">
                        <img src="/assets/images/prescription_icon.png" alt="Prescription Icon" className = "ml-5 mt-4 h-10 w-10 "></img>
                        <h1 className="text-darkblue text-3xl text-left tracking-widest ml-3 mt-5 font-spartan">Prescriptions </h1>
                    </div>
                    
                </div>

                <div className = "grid grid-cols-2 gap-5 w-85 mt-7 left-0 right-0 mx-auto ">
                    <button 
                    
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
             
            
        </div>
    )
};
