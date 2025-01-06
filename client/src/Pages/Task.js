import React, { useState, useEffect } from 'react';

const TaskPage = () => {
    const [options, setOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('선택해주세요');

    useEffect(() => {
        // 예시 데이터를 가져오는 함수
        const fetchData = async () => {
            // 실제 DB 요청을 대체할 예시 데이터
            const exampleData = [
                { id: 1, label: '옵션 1' },
                { id: 2, label: '옵션 2' },
                { id: 3, label: '옵션 3' },
                { id: 4, label: '옵션 4' },
                { id: 5, label: '옵션 5' },
                { id: 6, label: '옵션 6' },
            ];
            setOptions(exampleData); // 상태에 데이터 설정
        };

        fetchData();
    }, []); // 컴포넌트가 처음 렌더링될 때 한 번 실행

    const handleSelect = (option) => {
        setSelectedOption(option.label);
        setIsOpen(false); // 드롭다운 닫기
    };

    return (
        <>
            <div className="box text">
                안녕하세요 00님!
            </div>
            <div className="box bord-box">
                <div className="custom-dropdown-container">
                    <div
                        className="custom-dropdown-selected"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {selectedOption}
                    </div>
                    {isOpen && (
                        <ul className="custom-dropdown-options">
                            {options.map((option) => (
                                <li
                                    key={option.id}
                                    className="custom-dropdown-option"
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default TaskPage;
