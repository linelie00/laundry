import React, { useState, useEffect } from 'react';

const TaskPage = () => {
    const [options, setOptions] = useState([]); // 드롭다운 옵션 목록
    const [selectedOption, setSelectedOption] = useState(''); // 선택된 옵션

    useEffect(() => {
        // 예시 데이터를 가져오는 함수
        const fetchData = async () => {
            // 실제 DB 요청을 대체할 예시 데이터
            const exampleData = [
                { id: 1, label: '옵션 1' },
                { id: 2, label: '옵션 2' },
                { id: 3, label: '옵션 3' },
            ];
            setOptions(exampleData); // 상태에 데이터 설정
        };

        fetchData();
    }, []); // 컴포넌트가 처음 렌더링될 때 한 번 실행

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value); // 선택된 값 업데이트
    };

    return (
        <>
            <div className="box text">
                안녕하세요 00님!
            </div>
            <div className="box bord-box">
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="" disabled>
                        공정을 선택해주세요
                    </option>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {selectedOption && (
                    <p>
                        선택된 옵션: {options.find((opt) => opt.id.toString() === selectedOption)?.label}
                    </p>
                )}
            </div>
        </>
    );
};

export default TaskPage;
