import React from "react";
import { Bookmark } from "../components/Bookmark/Bookmark";
import { Navbar } from "../components/Navbar/Navbar";
import { useState } from "react";
import Search from "../components/Dictionary/Search";
import Word from "../components/Dictionary/Word";
import WordList from "../components/Dictionary/WordList";
import WordQuiz from "../components/Dictionary/WordQuiz";

export function Dictionary() {

    const [currentPage, setCurrentPage] = useState("search");
    const [searchedWord, setSearchedWord] = useState();
    const [addedWords, setAddedWords] = useState([]);

    const handleSearchWord = (word) => {
        setSearchedWord(word);
        setCurrentPage("word");
    };

    const handleAddWord = (word) => {
        setAddedWords((prevWords) => [...prevWords, word]);
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

