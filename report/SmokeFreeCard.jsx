import React from 'react';

function SmokeFreeCard({ username, startDate, motivation, daysSmokeFree, goalDays }) {
  return (
    <div style={{
      border: '2px solid #4CAF50',
      padding: '1rem',
      borderRadius: '10px',
      backgroundColor: '#f0fff0',
      marginTop: '1rem'
    }}>
      <h2>안녕하세요, {username}님!</h2>
      <p>금연 시작일: <strong>{startDate}</strong></p>
      <p>금연한 지 <strong>{daysSmokeFree}일</strong>이 지났어요.</p>
      <p>목표는 <strong>{goalDays}일</strong> 금연입니다.</p>
      <blockquote style={{ fontStyle: 'italic', color: '#2e7d32' }}>
        "{motivation}"
      </blockquote>
    </div>
  );
}

export default SmokeFreeCard;