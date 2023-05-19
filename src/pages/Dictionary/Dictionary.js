import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import Word from "./components/Word";
import WordList from "./components/WordList";
import WordQuiz from "./components/WordQuiz";
import Search from "./components/Search";
import { addBookmark, getBookmark } from "../../utils/Firebase/Bookmark/bookmark.firebase";
import { getUser } from "../../utils/Firebase/Users/users.firebase";

export function Dictionary() {

    const [currentPage, setCurrentPage] = useState(0);
    const [searchedWord, setSearchedWord] = useState();
    const [addedWords, setAddedWords] = useState([]);
    const [direct, isDirect] = useState(false);

    const getBookmarkedWords = async () => {
        const user = await getUser();
        return user.bookmark;
    }

    const directNav = async (number) => {
        const bookmarks = await getBookmarkedWords();
        setCurrentPage(number);
        setAddedWords(bookmarks);
        isDirect(true);
    }

    const gotoNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const gotoPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const backToDefault = () => {
        setCurrentPage(0);
        isDirect(false);
    };

    const handleSearchWord = (word) => {
        setSearchedWord(word);
        gotoNextPage();
    };

    const handleAddWord = async (word) => {
        await addBookmark(word);
        setAddedWords(await getBookmark());
        gotoNextPage();
    };

    const handleStartQuiz = () => {
        gotoNextPage();
    };

    return (
        <div>
            <Navbar />
            <div className="loggedIn">
                {currentPage !== 0 && direct && (<Link onClick={backToDefault} className="Links backButton">
                    <FontAwesomeIcon
                        icon="fa-solid fa-arrow-left"
                        style={{ color: '#ffffff' }}
                        className="icons"
                    />
                </Link>)}
                {currentPage !== 0 && !direct && (<Link onClick={gotoPreviousPage} className="Links backButton">
                    <FontAwesomeIcon
                        icon="fa-solid fa-arrow-left"
                        style={{ color: '#ffffff' }}
                        className="icons"
                    />
                </Link>)}
                {currentPage === 0 && (
                    <>
                        <Search onSearchWord={handleSearchWord} />
                        <button onClick={() => { directNav(2) }} className="directNavButton">See Word List</button>
                    </>
                )}
                {currentPage === 1 && (
                    <Word word={searchedWord} onAddWord={handleAddWord} />
                )}
                {currentPage === 2 && (
                    <WordList words={addedWords} onStartQuiz={handleStartQuiz} />
                )}
                {currentPage === 3 && (
                    <WordQuiz words={addedWords} />
                )}
            </div>
        </div>
    );
}

/*direct ? (currentPage !== 0 && (<Link onClick={backToDefault()} className="Links backButton"><FontAwesomeIcon
                    icon="fa-solid fa-arrow-left"
                    style={{ color: '#ffffff' }}
                    className="icons"
                /></Link>)) : (currentPage !== 0 && <Link onClick={gotoPreviousPage} className="Links backButton">
                    <FontAwesomeIcon
                        icon="fa-solid fa-arrow-left"
                        style={{ color: '#ffffff' }}
                        className="icons"
                    />
    </Link>)*/