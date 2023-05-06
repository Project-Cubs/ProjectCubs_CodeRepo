import React from "react";

const Word = ({ word, onAddWord }) => {

  const { koreanWord, koreanDefinition, englishWord, englishDefinition } = word;

  return (
    <div>
      <h1>{koreanWord}</h1>
      <div className="full-page-card">
        <h3>{englishWord} </h3>
        <p>{koreanDefinition}</p>
        <p>{englishDefinition}</p>
        <button onClick={() => onAddWord(word)}>Add Word</button>
      </div>
    </div>
  );
};

export default Word;
