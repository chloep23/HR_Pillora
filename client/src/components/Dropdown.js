import React, { useState } from 'react';

const Dropdown = ({ options, onSelect, placeholder = 'Select an option' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(placeholder);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedValue(option);
        setIsOpen(false);
        if (onSelect) {
        onSelect(option); // Call the callback function with the selected option
        }
    };

    return (
        <div className="relative inline-block text-left">
        <div>
            <button
            type="button"
            className="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-blue font-spartan font-medium text-lightgray hover:bg-gray-50 focus:outline-none"
            onClick={toggleDropdown}
            >
            {selectedValue}
            <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                clipRule="evenodd"
                />
            </svg>
            </button>
        </div>

        {isOpen && (
            <div
            className="text-gray origin-top-right absolute right-0 w-80 rounded-b-md shadow-lg bg-white focus:outline-none z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
            >
            <div className="py-1" role="none">
                {options.map((option) => (
                <button
                    key={option}
                    className="font-spartan text-darkblue block px-4 py-2 text-sm w-full text-left hover:blue"
                    role="menuitem"
                    tabIndex="-1"
                    onClick={() => handleOptionClick(option)}
                >
                    {option}
                </button>
                ))}
            </div>
            </div>
        )}
        </div>
    );
};

export default Dropdown;
