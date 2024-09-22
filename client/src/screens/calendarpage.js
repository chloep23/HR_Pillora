import React, { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';

const getFiveDayRange = () => {
    const today = new Date();
    const days = [];
    for (let i = -2; i <= 2; i++) {
        days.push(addDays(today, i));
    }
    return days;
};

function CalendarHeader() {
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
                className={`p-4 rounded-full font-spartan  ${ isToday ? 'bg-blue text-gray' : 'bg-white text-calendarblue'}`}
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

// needs to get the info from the backend
function TakePillItem() {
    const[isRecalled, setIsRecalled] = useState(false);

    return (
        <div className="flex flex-col rounded-3xl drop-shadow-xl w-85 hs-auto left-0 right-0 mx-auto mt-10 bg-white">
            <div className="flex justify-between items-center p-1 bg-gray-100 h-auto">
                <div>
                <p className="text-left font-spartan text-calendarblue text-medium ml-5 mt-5 ${ isRecalled ? 'text-red-500' : 'text-green-500'}">Recalled?</p>   
                </div>
                <div>
                <p className="text-calendarblue text-sm text-right font-spartan tracking-widest mr-6 mt-4 ">Time</p>
                <h1 className="text-calendarblue text-3xl text-right tracking-widest mr-4 font-spartan"> Pill A </h1>
                </div>
            </div>
        <div className="flex flex-row">
            <button
                type="submit"
                className="flex items-center justify-center mt-5 w-80 px-4 py-2 left-0 right-0 mx-auto font-medium font-spartan text-white text-center text-xl bg-calendarblue rounded-l-3xl hover:bg-blue-600 focus:outline-none focus:bg-opacity-25"
            >
                Skip
            </button>
            <button
                type="submit"
                className="flex items-center justify-center mt-5 w-80 px-4 py-2 left-0 right-0 mx-auto font-medium font-spartan text-white text-center text-xl bg-calendarblue rounded-r-3xl hover:bg-blue-600 focus:outline-none focus:bg-opacity-25"
            >
                Take
            </button>
        </div>
        </div>
    );
}

function Calendarpage() {
    return (
        <div className="flex flex-col items-center overflow-y-scroll w-screen h-screen bg-blue">
            <div className = "flex flex-col rounded-b-3xl drop-shadow-xl w-screen h-auto left-0 right-0 mx-auto bg-calendarblue">
            <h1 className="text-white text-5xl text-left tracking-widest ml-7 mt-10 font-spartan">Pillora </h1>
                <CalendarHeader />
            </div>
            <TakePillItem />
        </div>
    );
}

export default Calendarpage;
