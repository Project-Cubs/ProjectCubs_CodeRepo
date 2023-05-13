import React, { useEffect, useState } from "react";

const WordList = ({ words, onStartQuiz }) => {

  return (
    <div>
      <h1>Bookmark</h1>
      <section className="word-list">
        {words.map((word, index) => {

          const { koreanWord, koreanDefinition, englishWord, englishDefinition } = word;

          return (
            <aside key={index}>
              <h2> {koreanWord} </h2>
              <h3> {englishWord} </h3>
              <p> {koreanDefinition} </p>
            </aside>
          )
        })}
      </section>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default WordList;
