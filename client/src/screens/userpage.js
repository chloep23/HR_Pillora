import React, { useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PillItem({name, type, frequency}) {
  return (
      <div className="flex justify-between items-center p-4 bg-gray-100 h-auto">
          <div>
              <p className="font-spartan text-3xl text-left text-darkblue ml-7 mt-3">{name}</p>
              <p className="font-spartan text-sm text-left text-darkblue ml-7 mb-3">{type}</p>
          </div>
          <div>
              <p className="font-spartan text-1xl text-right text-darkblue mr-5">{frequency}</p>
          </div>
          
      </div>
  )
}

export default function UserPage() {
    const { user } = useSelector((state) => state.auth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [messages, setMessages] = useState([]); // Chat history
    const [input, setInput] = useState('');     // User input
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [medications, setMedications] = useState([]);
    const messagesEndRef = useRef(null);

    const notify = () => {
        toast("This is your reminder!", {
          style: {
            backgroundColor: "#CEE8EA",
            color: "#5F97AB",
            fontWeight: "bold",
            padding: "20px",
            borderRadius: "8px",
          }
        });
    };

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setMessages([]);
      setInput('');
    };
    const fetchUser = async () => {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        try {
          const response = await axios.get('api/user/me', config);
          setName(response.data.name);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
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
            type: medication.type,
            frequency: medication.frequency,
          }));
          console.log(medicationsData);
          setMedications(medicationsData);
        } catch (error) {
          console.error('Error fetching medications:', error);
        }
      };
    
      useEffect(() => {
        fetchUser();
        fetchMedications();
      }, []); 
      
      useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [messages]);// Empty dependency array ensures this runs once when the component mounts
      
      const handleSend = async () => {
        if (!input.trim()) return; // Prevent sending empty messages
    
        const userMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');
        setIsLoading(true);
    
        try {
          const response = await axios.post('/api/chat', { messages: updatedMessages });
          const assistantMessage = response.data.reply;
          setMessages((prevMessages) => [...prevMessages, assistantMessage]);
        } catch (error) {
          console.error('Error communicating with chatbot:', error);
          setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: 'Sorry, something went wrong. Please try again later.' }]);
        } finally {
          setIsLoading(false);
        }
      };
    
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSend();
        }
      };
    
      const handleCallClick = () => {
        window.location.href = 'tel:+1234567890';
      };


    return(
        <div className="bg-blue min-h-screen">
            <div className = "flex flex-col overflow-y-scroll min-h-screen w-screen mb-20">
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-14 font-spartan">Welcome, </h1>
                <h1 className="text-darkblue text-5xl text-left tracking-widest ml-10 mt-4 font-spartan">{name}! </h1>

                <div className = "flex flex-col rounded-3xl drop-shadow-xl w-85 h-auto left-0 right-0 mx-auto mt-10 bg-white">
                    <div className = "flex justify-content">
                        <img src="/assets/images/prescription_icon.png" alt="Prescription Icon" className = "ml-5 mt-4 h-10 w-10 "></img>
                        <h1 className="text-darkblue text-3xl text-left tracking-widest ml-3 mt-5 font-spartan">Prescriptions </h1>
                    </div>
                    <div className="left-0 right-0 mx-auto w-11/12 divide-y divide-solid divide-lightgray">
                        {medications.length > 0 ? (
                            medications.map((med, index) => (
                                <PillItem
                                    key={index}
                                    name={med.name}
                                    type={med.type}
                                    frequency={med.frequency}
                                />
                            ))
                        ) : (
                            <p className="text-center text-sm font-spartan text-darkblue p-4">No medications found.</p>
                        )}
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
                        <button onClick={notify} className = "flex flex-col rounded-3xl drop-shadow-xl w-40 h-28 left-0 right-0 mx-auto bg-white">
                            <img src="/assets/images/notif_icon.png" alt="Notification Icon" className = "left-0 right-0 mx-auto mt-5 h-12 w-10 "></img>
                            <h1 className="text-darkblue text-base left-0 right-0 mx-auto tracking-widest mt-2 font-spartan">Notify </h1>
                        </button>
                        <button onClick={handleCallClick} className = "flex flex-col rounded-3xl drop-shadow-xl w-40 h-28 left-0 right-0 mx-auto mt-5 bg-white">
                            <img src="/assets/images/doctor_icon.png" alt="Doctor Icon" className = "left-0 right-0 mx-auto mt-5 h-12 w-11 "></img>
                            <h1 className="text-darkblue text-base left-0 right-0 mx-auto tracking-widest mt-2 font-spartan">Contact </h1>
                        </button>
                    </div>

                </div>
            </div>
            {/* AI Chatbot Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="flex flex-col bg-blue rounded-3xl shadow-lg w-5/6 h-3/4 max-w-md">
                    <div className="flex flex-col bg-calendarblue rounded-3xl shadow-lg w-full">
                        <button
                            className="text-2xl text-gray-600 hover:text-gray-900"
                            onClick={closeModal}
                        >
                            {/* < /> */}
                        </button>
                        <button onClick={closeModal}>
                            <img src="/assets/images/exit.png" alt="Exit Icon" className = "ml-auto mr-6 mt-5 h-5 w-5 "></img>
                        </button>
                        <div className="flex justify-between px-6 left-0 right-0 mx-auto w-full mb-5">
                            <img src="/assets/images/ai_icon.png" alt="AI Icon" className = "h-20 w-18 "></img>
                            <div className="flex flex-col mr-12">
                                <h2 className="text-white mt-2 text-2xl text-left font-spartan font-bold">Meet Pillora</h2>
                                <h2 className="text-white mt-2 text-lg text-left font-spartan font-bold">How can I help?</h2>
                            </div>
                        </div>
                    </div>
                    {/* Chat History */}
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                        {messages.map((msg, index) => (
                            <div
                            key={index}
                            className={`flex mb-4 items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                            {/* Icon for Chatbot on the left */}
                            {msg.role != 'user' && (
                                <img
                                src="/assets/images/Pillora_logo.png"
                                alt="Chatbot Icon"
                                className="w-10 h-10 mr-4 mb-1"
                                />
                            )}

                            {/* Message content */}
                            <div
                                className={`inline-block p-4 bg-white rounded-3xl ${msg.role === 'user' ? 'text-black' : 'mr-10 text-black'}`}
                            >
                                {msg.content}
                            </div>

                            {/* Icon for User on the right */}
                            {msg.role === 'user' && (
                                <img
                                src="/assets/images/profile_icon.png"
                                alt="User Icon"
                                className="w-8 h-8 ml-4 mb-1"
                                />
                            )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* <div className="flex-1 overflow-y-auto px-6 py-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block px-4 py-2 bg-white rounded-3xl ${msg.role === 'user' ? 'text-black' : 'text-gray'}`}>
                                {msg.content}
                            </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div> */}

                    {/* Input Area */}
                    <div className="flex items-center bg-calendarblue rounded-b-3xl shadow-lg w-full h-16 px-4">
                        <input
                            type="text"
                            className="flex-1 px-4 py-2 bg-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="What's on your mind?"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={handleSend} className="ml-2">
                            <img src="/assets/images/arrow.png" alt="Send" className="h-6 w-6" />
                        </button>
                    </div>

                    {isLoading && (
                        <div className="px-6 py-2 text-gray">
                            Assistant is typing...
                        </div>
                    )}
                </div>
                </div>
            )}
                    {/* <div className="flex flex-col items-center justify-between bg-calendarblue rounded-b-3xl shadow-lg w-full h-28 mt-auto mb-0">
                        <div className="mt-7 flex items-center justify-between w-11/12 h-14 px-4 py-2 left-0 right-0 mx-auto text-medium font-spartan text-calendarblue focus:outline-none focus:border-white bg-white rounded-3xl ">
                            <input
                            type="text"
                            className=""
                            placeholder="What's on your mind?"
                            value={input}
                            />
                            <button>
                                <img src="/assets/images/arrow.png" alt="AI Icon" className = "ml-5 h-8 w-88 "></img>
                            </button>
                        </div>
                    </div> */}
                    <ToastContainer 
                        position="top-right" 
                        autoClose={5000} 
                        hideProgressBar={false} 
                        newestOnTop={false} 
                        closeOnClick 
                        rtl={false} 
                        pauseOnFocusLoss 
                        draggable 
                        pauseOnHover 
                    />
        </div>
    );
  
};