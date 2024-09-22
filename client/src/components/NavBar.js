import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-0 w-full bg-white rounded flex justify-around p-4">
        <button
            className="bg-gray-200 font-spartan text-darkblue py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
        >
            Calendar
        </button>
        <button
            className="bg-gray-200 font-spartan text-darkblue py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
            >
            User
        </button>
        </div>
    );
};

export default NavBar;
