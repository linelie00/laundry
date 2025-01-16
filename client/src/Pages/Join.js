import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Auth.css';

const Join = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleLoginClick = () => {
        navigate('/'); // '/' 경로로 이동
    };

    return (
        <>
            <div className="login">
                <h1>회원가입</h1>
                <form>
                    <div>
                        <input type="text" placeholder="아이디" />
                        <button className="check" type="submit">중복확인</button>
                    </div>
                    <input type="text" placeholder="이름" />
                    <input type="text" placeholder="닉네임" />
                    <input type="password" placeholder="비밀번호" />
                    <input type="password" placeholder="비밀번호 확인" />
                    <button type="submit">회원가입</button>
                </form>
                <p className="login-link" onClick={handleLoginClick}>로그인하기</p>
            </div>
        </>
    );
};

export default Join;
