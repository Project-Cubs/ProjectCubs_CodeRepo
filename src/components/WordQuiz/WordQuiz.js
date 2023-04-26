import React, { useState, useEffect } from 'react';

const WORDS = [
    { word: 'abate', meaning: 'to reduce or lessen' },
    { word: 'abdicate', meaning: 'to give up a position or responsibility' },
    { word: 'aberration', meaning: 'a departure from what is normal or expected' }
];

function WordQuiz() {
    const [words, setWords] = useState([]);
    const [score, setScore] = useState(0);
    const [currentWord, setCurrentWord] = useState(null);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        setWords(shuffleArray(WORDS));
        setCurrentWord(0);
    }, []);

    useEffect(() => {
        if (currentWord !== null) {
            generateOptions();
        }
    }, [currentWord]);

    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    function generateOptions() {
        const currentMeaning = words[currentWord].meaning;
        const otherMeanings = words
            .filter((word) => word.meaning !== currentMeaning)
            .map((word) => word.meaning)
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(words.length - 1, 3));
        setOptions(shuffleArray([currentMeaning, ...otherMeanings]));
    }


    function handleOptionSelect(option) {
        setSelectedOption(option);
    }

    function handleAnswer() {
        const currentAnswer = words[currentWord].meaning;
        if (selectedOption === currentAnswer) {
            setScore(score + 1);
        }
        if (currentWord + 1 === words.length) {
            alert(`Your score is ${parseInt(100 * (score / words.length))}`)
        } else {
            setCurrentWord(currentWord + 1);
            setSelectedOption('');
        }
    }

    if (!words.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Word Quiz</h1>
            <hr />
            <h2>{words[currentWord].word}</h2>
            <p>Correct: {score}</p>
            {options.map((option) => (
                <div key={option}>
                    <label>
                        <input type="radio" name="option" value={option} checked={selectedOption === option} onChange={() => handleOptionSelect(option)} />
                        {option}
                    </label>
                </div>
            ))}
            <button onClick={handleAnswer}> Answer </button>
        </div>
    )
}

export default WordQuiz;