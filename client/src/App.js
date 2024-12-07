import React from "react";
import './App.css';
import Userpage from './screens/userpage';
import Loginpage from  './screens/loginpage';
import Pillpage from './screens/pillpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Calendarpage from './screens/calendarpage';
import axios from "axios";


axios.defaults.baseURL = "http://localhost:8080";

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Loginpage />}/>
            <Route path='/user' element={<Userpage />}/>
            <Route path='/pill' element={<Pillpage />}/>
            <Route path='/calendar' element={<Calendarpage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

