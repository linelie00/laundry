import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components.css';

const BottomBar = () => {
    return (
        <div className="bottom-bar">
            <Link to="/" className="bottom-button">등록</Link>
            <Link to="/task" className="bottom-button">업무</Link>
            <Link to="/schedule" className="bottom-button">스케줄</Link>
            <Link to="/profile" className="bottom-button">내 정보</Link>
        </div>
    );
};

export default BottomBar;
