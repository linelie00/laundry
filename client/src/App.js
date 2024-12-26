import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Styles/App.css';
import Register from './Pages/Register';
import Task from './Pages/Task';
import Schedule from './Pages/Schedule';
import Profile from './Pages/Profile';
import BottomBar from './Components/BottomBar';

function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/task" element={<Task />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <BottomBar />
        </div>
    </Router>
);
};

export default App;
