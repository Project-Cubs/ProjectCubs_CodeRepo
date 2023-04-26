import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Scoreboard = () => {
  const navigate = useNavigate();
  return (
    <div className="score">
      <h1 className="scoreDisplay"></h1>
      <div className="scoreaBoardNavBtn">
        <button onClick={() => navigate("/scoreboard")}>Scoreboard</button>
        <button onClick={() => alert('Practice Again')}>Practice Again</button>
        <button onClick={() => navigate("/learn")}>Other songs</button>
      </div>
    </div>
  );
};
