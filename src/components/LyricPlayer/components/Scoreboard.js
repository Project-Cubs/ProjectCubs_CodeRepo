import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Scoreboard = ({ score }) => {
  const navigate = useNavigate();
  return score && (
    <div className="score">
      <>
        <h1 className="scoreDisplay"> Your score: <br /> 🎤 {score} 🎤</h1>
        <div className="scoreBoardNavBtn">
          <button onClick={() => navigate("/scoreboard")}>Scoreboard</button>
          <button onClick={() => alert('Practice Again')}>Practice Again</button>
          <button onClick={() => navigate("/learn")}>Other songs</button>
        </div>
      </>
    </div>
  )
};
