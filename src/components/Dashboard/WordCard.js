// src/components/WordCard.js
import React from 'react';

const WordCard = ({ koreanWord, englishWord }) => {
  return (
    <div className="word-card">
      <p>{koreanWord}</p>
      <p>{englishWord}</p>
    </div>
  );
};

export default WordCard;
