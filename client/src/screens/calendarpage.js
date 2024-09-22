// import React from 'react';
// import { format, addDays, subDays } from 'date-fns';

// const getFiveDayRange = () => {
//     const today = new Date();
//     const days = [];
//     for (let i = -2; i <= 2; i++) {
//         days.push(addDays(today, i));
//     }
//     return days;
// };

// function CalendarHeader() {
//     const days = getFiveDayRange();

//     return (
//         <div className="flex justify-center items-center space-x-4 bg-gray-200 p-4 rounded-md">
//         {days.map((day, index) => {
//             const isToday = format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
//             return (
//             <div
//                 key={index}
//                 className={`p-4 rounded-md ${
//                 isToday ? 'bg-blue-500 text-white font-bold' : 'bg-white text-gray-700'
//                 }`}
//             >
//                 <div className="text-lg">{format(day, 'MMM dd')}</div>
//             </div>
//             );
//         })}
//         </div>
//     );
// }

// function Calendarpage() {
//     return (
//         <div className="flex flex-col items-center justify-center w-screen h-screen bg-blue">
//             <div className = "flex flex-col rounded-3xl drop-shadow-xl w-screen h-60 left-0 right-0 mx-auto bg-calendarblue">
//                 <CalendarHeader />
//             </div>
//         <div className="mt-16 p-4 text-center">
//             {/* Additional content below the fixed header */}
//             <h1 className="text-2xl font-bold mb-4">Content Below Calendar Header</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat est nec urna fermentum.</p>
//             <p>Scroll down to see more content...</p>
//             <div className="mt-32">
//             <p>More content here...</p>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Calendarpage;
