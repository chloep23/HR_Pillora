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
        <nav className="w-full flex items-center rounded-t--3xl py-5 fixed top-0 z-20">
        <div className="fixed bottom-0 w-full bg-white rounded-t-3xl flex justify-around p-4">
          <Link to ="/calendar">
            <button className = "h-10 w-10 ">
              <img src="/assets/images/pills_icon.png" alt="Pills Icon" className = "mt-2 h-10 w-10 "></img>
            </button>
          </Link>
          <Link to ="/pill">
          <button className = "flex mt-auto">
            <img src="/assets/images/pill_main.png" alt="Pills Icon" className = "h-16 w-14"></img>
          </button>
        </Link>
          <Link to ="/user">
            <button className = "h-10 w-10 ">
              <img src="/assets/images/profile_icon.png" alt="Pills Icon" className = "mt-2 h-10 w-10 "></img>
            </button>
          </Link>
        </div>
        </nav>
    );
};

export default NavBar;
