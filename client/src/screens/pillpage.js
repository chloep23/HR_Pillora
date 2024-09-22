import React, { useEffect, useState } from "react";
import Dropdown from '../components/Dropdown';

export default function PillPage() {
    const[isOpen, setIsOpen] = useState(false);

    const handleSelect = (selectedOption) => {
        console.log(`Selected: ${selectedOption}`);
        // You can perform other actions here based on the selected option
    }

    const generateDateOptions = (days) => {
        const options = [];
        for (let i = 0; i < days; i++) {
          const date = new Date();
          date.setDate(date.getDate() + i); // Increment date by i days
          options.push(date.toDateString()); // Convert date to string format
        }
        return options;
    };

    const dateOptions = generateDateOptions(7); // Generate dates for the next 7 days

    return(
        <div className="bg-blue min-h-screen">
            <div className = "flex flex-col overflow-y-scroll w-screen min-h-screen mb-20">
                <img src="/assets/images/Pillora_logo.png" alt="Main Icon" className = "left-0 right-0 mx-auto h-32 w-32 mt-5 "></img>
                <div className= "mt-5 left-0 right-0 mx-auto flex flex-col w-85 h-auto bg-white rounded-2xl shadow-xl">
                <form>
                    <div className="flex flex-col mt-2 w-80 left-0 right-0 mx-auto">
                    <label className="block mb-3 text-2xl text-left font-spartan tracking-widest font-medium text-darkblue">
                            Perscription Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-medium font-spartan text-white bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Prescription Name"
                            />
                    <label className="block mb-3 mt-3 text-2xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        Medication Type
                    </label>
                    <Dropdown
                        options={['Allergy', 'Antibiotic', 'Antidepressant', 'Antidiabetic', 'Antihypertensive', 'Anticoagulants', 'Birth Control']}
                        onSelect={handleSelect}
                        placeholder="What type of medication?"
                    />

                    <label className="block mb-3 mt-3 text-2xl text-left w-full font-spartan tracking-widest font-medium text-darkblue">
                        Reminder
                    </label>
                    <Dropdown
                        options={['Daily', 'Weekly', 'Monthly']}
                        onSelect={handleSelect}
                        placeholder="When do you need to be reminded?"
                    />

                    <label className="block mb-3 mt-3 text-2xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        Start Date
                    </label>
                    <Dropdown
                        options={dateOptions}
                        onSelect={handleSelect}
                        placeholder="Select a date"
                    />
                    <label className="block mb-1 text-2xl text-left font-spartan mt-2 tracking-widest font-medium text-darkblue">
                        End Date
                    </label>
                    <Dropdown
                        options={dateOptions}
                        onSelect={handleSelect}
                        placeholder="Select a date"
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
                        className="left-0 right-0 mx-auto mt-4 mb-4 w-80 px-4 py-2 font-medium font-spartan text-white bg-calendarblue rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-white"
                    >
                        Submit
                    </button>
                </form>
                </div>
            </div>
            <div>
                <p>
                </p>
            </div>
                

            
        </div>
    )
};
