import React, { useEffect, useState } from "react";

function WordQuiz({ words }) {

    

    //   const words = [
    //     { word: "한글", meaning: "Korean" },
    //     { word: "기린", meaning: "Giraffe" },
    //     { word: "검은색", meaning: "Black" },
    //     { word: "애국가", meaning: "National anthem" },
    //     { word: "하늘", meaning: "Sky" },
    //     { word: "공부", meaning: "Study" },
    //   ]

    const [score, setScore] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [options, setOptions] = useState([])

    useEffect(
        () => {
            const currentWord = words[currentWordIndex];
            const otherWords = words.filter((_, index) => {
                return index !== currentWordIndex;
            })
            const shuffledOtherWords = shuffle(otherWords).slice(0, 3);
            setOptions(shuffle([...shuffledOtherWords, currentWord]));
        },
        [currentWordIndex]
    )

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array;
    }

    function handleSelected(meaning) {
        setSelectedOption(meaning);
    }

    function handleClicked() {
        const currentAnswer = words[currentWordIndex].meaning;
        if (selectedOption === currentAnswer) {
            setScore(score + 1);
        }
        if (currentWordIndex === words.length - 1) {
            alert(`Your score is : ${score}`)
        } else {
            setCurrentWordIndex(currentWordIndex + 1);
        }
    }

    return (
        <div>
            <h1>Word Quiz</h1>
            <hr />
            <h2> {words[currentWordIndex].koreanWord} </h2>
            <p> Score: {score} </p>
            <div>
                {
                    options.map((word, i) => {
                        return <label key={i}>
                            <input
                                type="radio"
                                name="option"
                                value={word.englishWord}
                                onChange={() => {
                                    handleSelected(word.englishWord)
                                }}
                            />
                            {word.englishWord}
                        </label>
                    })
                }
            </div>
            <button onClick={handleClicked} > Answer </button>
        </div>
    );
}

export default WordQuiz;
