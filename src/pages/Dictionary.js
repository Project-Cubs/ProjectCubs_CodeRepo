import React, { useState } from "react";
import Search from "../components/Dictionary/Search";
import Word from "../components/Dictionary/Word";
import WordList from "../components/Dictionary/WordList";
import WordQuiz from "../components/Dictionary/WordQuiz";
import { Navbar } from "../components/Navbar/Navbar";

export function Dictionary() {

    const [currentPage, setCurrentPage] = useState("search");
    const [searchedWord, setSearchedWord] = useState();
    const [addedWords, setAddedWords] = useState([]);

    // search, word, wordList, wordQuiz

    // input: word
    const handleSearchWord = (word) => {
        setSearchedWord(word);      // setting the state searchedWord
        setCurrentPage("word");     // going to next page
    };

    const handleAddWord = (word) => {
        /* [
            {안녕, hello, englishDefinition, koreanDefinition}
            {남자, boy, englishDefinition, koreanDefinition}
        ]
        */
        setAddedWords((prevWords) => [...prevWords, word]);
        // add to existing addedWords array
        setCurrentPage("wordList");
    };

    const handleStartQuiz = () => {
        setCurrentPage("wordQuiz");
    };

    const handleAnswerSelected = (option) => {
        console.log("Selected option:", option);
    };

    return (
        <div className="App">
            <Navbar/>
            {currentPage === "search" && (
                <Search onSearchWord={handleSearchWord} />
            )}
            {currentPage === "word" && (
                <Word word={searchedWord} onAddWord={handleAddWord} />
            )}
            {currentPage === "wordList" && (
                <WordList words={addedWords} onStartQuiz={handleStartQuiz} />
            )}
            {currentPage === "wordQuiz" && (
                <WordQuiz words={addedWords}/>
            )}
        </div>
    );
}

