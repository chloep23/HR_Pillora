import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Userpage from './screens/userpage';
import Loginpage from  './screens/loginpage';
import Pillpage from './screens/pillpage';
import Chatpage from './screens/chatpage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
          <Route path='/login' element={<Loginpage />}/>
          <Route path='/user' element={<Userpage />}/>
          <Route path='/pill' element={<Pillpage />}/>
          <Route path='/chat' element={<Chatpage />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
