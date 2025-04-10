import React, { useState, useEffect } from 'react';
import SmokeFreeCard from './SmokeFreeCard';

function App() {
  const [daysSmokeFree, setDaysSmokeFree] = useState(0); // 금연한 일 수
  const [goalDays, setGoalDays] = useState(30); // 목표 금연 기간
  const [isEditingGoal, setIsEditingGoal] = useState(false); // 목표 수정 상태

  const startDate = new Date('2025-04-01');
  const today = new Date();
  const username = "홍길동";
  const motivation = "더 건강한 삶을 위해! 💪";

  useEffect(() => {
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysSmokeFree(diffDays);
  }, []);

  const handleGoalChange = (e) => {
    setGoalDays(Number(e.target.value));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🚭 금연 다이어리</h1>
      <SmokeFreeCard 
        username={username} 
        startDate={startDate.toDateString()} 
        motivation={motivation}
        daysSmokeFree={daysSmokeFree}
        goalDays={goalDays}
      />
      {isEditingGoal ? (
        <div>
          <input 
            type="number" 
            value={goalDays} 
            onChange={handleGoalChange} 
          />
          <button onClick={() => setIsEditingGoal(false)}>저장</button>
        </div>
      ) : (
        <button onClick={() => setIsEditingGoal(true)}>목표 수정</button>
      )}
    </div>
  );
}

export default App;