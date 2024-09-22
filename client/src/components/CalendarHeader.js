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

    return (
        <div className="flex justify-center items-center space-x-4 bg-gray-200 p-4 rounded-md">
        {days.map((day, index) => {
            const isToday = format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
            return (
            <div
                key={index}
                className={`p-4 rounded-md ${
                isToday ? 'bg-blue-500 text-white font-bold' : 'bg-white text-gray-700'
                }`}
            >
                <div className="text-sm">{format(day, 'EEE')}</div>
                <div className="text-lg">{format(day, 'dd')}</div>
            </div>
            );
        })}
        </div>
    );
    }


}

export default App;
