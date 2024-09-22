import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import axios from 'axios';
import { useSelector } from "react-redux";

const getFiveDayRange = () => {
    const today = new Date();
    const days = [];
    for (let i = -2; i <= 2; i++) {
        days.push(addDays(today, i));
    }
    return days;
};

function CalendarHeader({ medications }) {
    const days = getFiveDayRange();
    const today = new Date();

    return (
        <>
            <div className="text-left text-lg font-spartan text-white ml-7 font-bold">
                {format(today, 'EEEE, MMM dd, yyyy')}
            </div>
            <div className="flex justify-center items-center space-x-4 bg-gray-200 p-4 rounded-md mb-10">
                {days.map((day, index) => {
                    const isToday = format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
                    return (
                        <div
                            key={index}
                            className={`p-4 rounded-full font-spartan ${isToday ? 'bg-blue text-gray' : 'bg-white text-calendarblue'}`}
                        >
                            <div className="text-lg mt-2">{format(day, 'dd')}</div>
                            <div className="text-sm mb-2">{format(day, 'EEE')}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

function TakePillItem({ medications, onTake, onSkip }) {
    return (
        <>
            {medications.length === 0 ? (
                <div className="text-center font-spartan text-darkblue text-xl mt-10">No medications yet!</div>
            ) : (
                medications.map((medication, index) => (
                    <div
                        key={index}
                        className={`flex flex-col rounded-3xl drop-shadow-xl w-85 hs-auto left-0 right-0 mx-auto mt-10 bg-white ${medication.skipped ? 'opacity-50' : 'opacity-100'}`}
                    >
                        <div className="flex justify-between items-center p-1 bg-gray-100 h-auto">
                            <div>
                                <p className={`text-left font-spartan text-medium ml-5 mt-5 ${medication.recallStatus ? 'text-red' : 'text-green'}`}>
                                    {medication.recallStatus ? 'Recalled' : 'Not Recalled'}
                                </p>
                            </div>
                            <div>
                                <p className="text-calendarblue text-sm text-right font-spartan tracking-widest mr-6 mt-4">{medication.time.join(', ')}</p>
                                <h1 className="text-calendarblue text-3xl text-right tracking-widest mr-4 font-spartan">{medication.name}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <button
                                type="button"
                                onClick={() => onSkip(index)}
                                className="flex items-center justify-center mt-5 w-80 px-4 py-2 left-0 right-0 mx-auto font-medium font-spartan text-white text-center text-xl bg-calendarblue rounded-l-3xl hover:bg-blue-600 focus:outline-none focus:bg-opacity-25"
                            >
                                Skip
                            </button>
                            <button
                                type="button"
                                onClick={() => onTake(index)}
                                className="flex items-center justify-center mt-5 w-80 px-4 py-2 left-0 right-0 mx-auto font-medium font-spartan text-white text-center text-xl bg-calendarblue rounded-r-3xl hover:bg-blue-600 focus:outline-none focus:bg-opacity-25"
                            >
                                Take
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

function Calendarpage() {
    const [medications, setMedications] = useState([]);
    const { user } = useSelector((state) => state.auth);

    const fetchMedications = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        try {
            const response = await axios.get('api/user/allmedications', config);
            const medicationsData = response.data.map(medication => ({
                name: medication.name,
                time: medication.time,
                recallStatus: medication.recallStatus,
                skipped: false, // Add skipped state to each medication
                taken: false // Add taken state to each medication
            }));
            setMedications(medicationsData);
        } catch (error) {
            console.error('Error fetching medications:', error);
        }
    };

    const handleTake = (index) => {
        // Remove the medication when "Take" is clicked
        setMedications(medications.filter((_, i) => i !== index));
    };

    const handleSkip = (index) => {
        // Mark the medication as skipped (set opacity to 50%)
        setMedications(medications.map((med, i) => i === index ? { ...med, skipped: true } : med));
    };

    useEffect(() => {
        fetchMedications();
    }, []);

    return (
        <div className="flex flex-col items-center overflow-y-scroll w-screen min-h-screen bg-blue">
            <div className="flex flex-col rounded-b-3xl drop-shadow-xl w-screen h-auto left-0 right-0 mx-auto bg-calendarblue">
                <h1 className="text-white text-5xl text-left tracking-widest ml-7 mt-10 font-spartan">Pillora</h1>
                <CalendarHeader medications={medications} />
            </div>
            <TakePillItem medications={medications} onTake={handleTake} onSkip={handleSkip} />
            <div className="mb-40"></div>
        </div>
    );
}

export default Calendarpage;
