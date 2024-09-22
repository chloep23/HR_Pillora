import React from 'react';
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
                className={`p-4 rounded-full font-spartan  ${
                isToday ? 'bg-blue text-gray' : 'bg-white text-calendarblue'
                }`}
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

function Calendarpage() {
    return (
        <div className="flex flex-col items-center w-screen h-screen bg-blue">
            <div className = "flex flex-col rounded-b-3xl drop-shadow-xl w-screen h-auto left-0 right-0 mx-auto bg-calendarblue">
            <h1 className="text-white text-5xl text-left tracking-widest ml-7 mt-10 font-spartan">Pillora </h1>
                <CalendarHeader />
            </div>
            <div className = "flex flex-col rounded-3xl drop-shadow-xl w-85 h-60 left-0 right-0 mx-auto mt-10 bg-white">
                    <div className = "flex justify-content">
                        <h1 className="text-calendarblue text-3xl text-right tracking-widest ml-3 mt-5 font-spartan"> Pill A </h1>
                    </div>
                </div>
        </div>
    );
}

export default Calendarpage;
