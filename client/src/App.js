import logo from './logo.svg';
import React from "react";
import './App.css';
import Userpage from './screens/userpage';
import LoginPage from  './screens/loginpage';
import NavBar from './components/NavBar';
import PillPage from './screens/pillpage';


function App() {
  return (
    <div className="App">
      <LoginPage />
      <Userpage />
      <PillPage />
      <NavBar />
    </div>
  );
}

export default App;

