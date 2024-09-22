import React, { useEffect, useState } from "react";

export default function PillPage() {
    const[isOpen, setIsOpen] = useState(false);
    return(
        <div className="bg-blue h-screen">
            <div className = "flex flex-col w-screen h-screen ">
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mb-2 font-spartan">Pill A </h1>

                <div className= "left-0 right-0 mx-auto mt-10 flex flex-col w-85 h-auto bg-white rounded-2xl shadow-xl">
                <form>
                    <div className="flex flex-col mt-2 w-80 left-0 right-0 mx-auto">
                    <label className="block mb-1 text-2xl text-left font-spartan tracking-widest font-medium text-darkblue">
                            Perscription Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Prescription Name"
                            />
                    {/* insert type dropdown*/}
                    <label className="block mb-1 text-2xl text-left font-spartan tracking-widest font-medium text-darkblue">
                            Types
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Prescription Name"
                            />
                    <label className="block mb-1 text-2xl text-left font-spartan mt-2 tracking-widest font-medium text-darkblue">
                        Reminder
                    </label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="How often do you want to be reminded?"
                        />
                    <label className="block mb-1 text-2xl text-left font-spartan mt-2 tracking-widest font-medium text-darkblue">
                        Start Date
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="When do you start?"
                    />
                    <label className="block mb-1 text-2xl text-left font-spartan mt-2 tracking-widest font-medium text-darkblue">
                        End Date
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="When are you done?"
                    />
                    <label className="block mb-1 text-2xl text-left font-spartan mt-2 tracking-widest font-medium text-darkblue">
                        Symptoms
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-8 text-medium font-spartan mt-2 text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="How have you been feeling?"
                    />
                    <label className="block mb-1 text-2xl text-left font-spartan mt-2 tracking-widest font-medium text-darkblue">
                        Emergency Contact
                    </label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Who can we call for you?"
                    />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 mb-4 w-80 px-4 py-2 font-medium font-spartan text-white bg-calendarblue rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-white"
                    >
                        Submit
                    </button>
                </form>
                </div>
            </div>
                

            
        </div>
    )
};
