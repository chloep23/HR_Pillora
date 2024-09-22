
import React, { useEffect, useState } from "react";
import Dropdown from '../components/Dropdown';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function PillPage() {
    const[isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        time: '',
        type: '',
        frequency: '',
        start: '',
        end: '',
        symptoms: '',
        emergencyContact: '',
      });

      const { name, time, type, frequency, start, end, symptoms, emergencyContact } = formData;

      const navigate = useNavigate();
      const { user } = useSelector((state) => state.auth);

      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSelect = (selectedOption, field) => {
        setFormData({ ...formData, [field]: selectedOption });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        try {
          const response = await axios.post('http://localhost:8080/api/medications/add', formData, config);
          console.log('Medication added:', response.data);
          navigate('/user'); // Redirect to medications page or any other page
        } catch (error) {
          console.error('Error adding medication:', error);
        }
      };

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
                <img src="/assets/images/Pillora_logo.png" alt="Main Icon" className = "left-0 right-0 mx-auto h-32 w-32 mt-5"></img>
                <div className= "mt-5 left-0 right-0 mx-auto flex flex-col w-85 h-auto bg-white rounded-2xl shadow-xl mb-20">
                <form onSubmit={onSubmit}>
                <div className="flex flex-col mt-8 w-80 left-0 right-0 mx-auto">
                <label className="block mb-3 text-xl text-left font-spartan tracking-widest font-medium text-darkblue">
                Prescription 
                </label>
                <input
                type="text"
                className="w-full px-4 py-2 mb-5 text-medium font-spartan text-lightgray bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Prescription Name"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
              {/* TODO STYLE THIS */}
              <label className="block mb-3 text-xl text-left font-spartan tracking-widest font-medium text-darkblue">
                Time
                </label>
                <input
                type="text"
                className="w-full px-4 py-2 mb-5 text-medium font-spartan text-lightgray bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Ex: 5:00 PM "
                name="time"
                value={time}
                onChange={onChange}
                required
              />

                <label className="block mb-3 text-xl text-left font-spartan tracking-widest font-medium text-darkblue">
                Medication Type
                </label>
                <Dropdown
                className="w-full px-4 py-2 text-medium font-spartan text-lightgray bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                options={['Allergy', 'Antibiotic', 'Antidepressant', 'Antidiabetic', 'Antihypertensive', 'Anticoagulants', 'Birth Control']}
                onSelect={(option) => handleSelect(option, 'type')}
                value={type}
                placeholder="What type of medication?"
              />

                    <label className="block mt-5 mb-3 text-xl text-left w-full font-spartan tracking-widest font-medium text-darkblue">
                        Reminder
                    </label>
                    <Dropdown
                options={['Daily', 'Weekly', 'Monthly']}
                onSelect={(option) => handleSelect(option, 'frequency')}
                value={frequency}
                placeholder="When do you need to be reminded?"
              />

                    <label className="block mb-3 mt-5 text-xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        Start Date
                    </label>
                    <Dropdown

                options={dateOptions}
                onSelect={(option) => handleSelect(option, 'start')}
                value={start}
                placeholder="Select a date"
              />
                    <label className="block mb-3 mt-5 text-xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        End Date
                    </label>
                    <Dropdown
                options={dateOptions}
                onSelect={(option) => handleSelect(option, 'end')}
                value={end}
                placeholder="Select a date"
              />
                    <label className="block mb-3 mt-5 text-xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        Symptoms
                    </label>
                    <input
                type="text"
                className="w-full px-4 py-8 mb-5 text-medium font-spartan text-lightgray bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="How have you been feeling?"
                name="symptoms"
                value={symptoms}
                onChange={onChange}
              />
                    <label className="block mb-3 text-xl text-left font-spartan tracking-widest font-medium text-darkblue">
                        Emergency Contact
                    </label>
                    <input
                type="text"
                className="w-full px-4 py-2 text-medium font-spartan text-lightgray bg-blue rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Who can we call for you?"
                name="emergencyContact"
                value={emergencyContact}
                onChange={onChange}
              />
                    </div>
                    <button
                        type="submit"
                        className="flex flex-col items-center justify-center left-0 right-0 mx-auto mt-8 mb-4 w-80 px-4 py-2 font-medium font-spartan text-white text-center bg-calendarblue rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-white"
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
    );
};