import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth.css';

const Login = () => {
    const navigate = useNavigate(); 

    const handleLoginClick = () => {
        navigate('/join'); 
    };

    return (
        <>
            <div className="login">
                <h1>laundry</h1>
                <form>
                    <input type="text" placeholder="아이디" />
                    <input type="password" placeholder="비밀번호" />
                    <button type="submit">로그인</button>
                </form>
                <p className="login-link" onClick={handleLoginClick}>회원가입</p>
            </div>
        </>
    );
};

export default Login;
