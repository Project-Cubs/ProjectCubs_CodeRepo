import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { parseStringPromise } from 'xml2js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LyricPlayer.css';

export const LyricPlayer = () => {

    const location = useLocation();
    const song = location.state?.song;

    const { music_url, title, artist, album_url, lyrics } = { ...song }
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const contentRef = useRef(null);
    const videoRef = useRef(null);
    const align = () => {
        const highlightedElement = document.querySelector('.highlighted');
        if (highlightedElement && contentRef.current) {
            const highlightedHeight = highlightedElement.offsetHeight;
            const contentHeight = contentRef.current.offsetHeight;
            const highlightedTop = highlightedElement.offsetTop;
            const scrollValue = highlightedTop - (contentHeight - highlightedHeight) / 2;
            contentRef.current.scrollTop = scrollValue;
        }
    };
    const handleTimeUpdate = () => {
        const time = videoRef.current.currentTime * 1000;
        const past = lyrics.filter((item) => item.time < time);
        if (past.length !== currentLineIndex) {
            setCurrentLineIndex(past.length - 1);
            align();
        }
        // console.log(videoRef.current.currentTime + '/' + videoRef.current.duration);
        if (videoRef.current.currentTime > videoRef.current.duration - 0.2) {
            let score = Math.floor(Math.random() * 100);
            const scoreBoard = document.getElementsByClassName("score");
            const scoreBoardText = document.getElementsByClassName("scoreDisplay");
            scoreBoard[0].style.opacity = 1;
            scoreBoardText[0].innerHTML = "Score: " + score + "%";
        }
    };
    useEffect(() => {
        window.addEventListener('resize', align);
        return () => {
            window.removeEventListener('resize', align);
        };
    }, []);

    async function getKoreanDefinition(word) {
        const url = process.env.REACT_APP_DICT_URL;
        const key = process.env.REACT_APP_DICT_KEY;

        const q = word;
        const translated = "y";
        const trans_lang = "1";
        const response = await fetch(`${url}?key=${key}&q=${q}&translated=${translated}&trans_lang=${trans_lang}`);

        const text = await response.text();

        const json = await parseStringPromise(text);
        const definition = json.channel.item?.[0].sense?.[0].translation?.[0].trans_dfn;
        definition ? alert(`Definition: ${definition}`) : alert("No definition found");
    }
    /*
    async function getOriginalForm(word) {
        const url = process.env.REACT_APP_DICT_URL2;
        const key = process.env.REACT_APP_DICT_KEY2;

        const q = word;
        const response = await fetch(`${url}?key=${key}&q=${q}`);
        
        const test = await response.text();

        const json = await parseStringPromise(test);
        
        const basic = json.channel.item?.[0].sense?.[0].basicformat?.[0].basic_form;
    }
    */

    function extractKoreanWords(sentence) {
        const koreanRegex = /[\uAC00-\uD7AF]+/g;
        const matches = sentence.match(koreanRegex);
        return matches;
    }

    function generateLyric(sentence) {
        if (sentence === "") {
            return '•'
        } else {
            const words = sentence.split(/\s+/);
            // console.log("words", words);
            const koreanWords = extractKoreanWords(sentence);
            // console.log("korean words", koreanWords);
            const lyrics = words.map((word, i) => {
                if (koreanWords?.includes(word)) {
                    return (
                        <a key={i} onClick={() => getKoreanDefinition(word)}> {` ${word} `} &nbsp;</a>
                    )
                } else {
                    return ` ${word} `
                }
            });
            return lyrics;
        }
    }

    return (
        <div className="pbody">
            <div><NavLink to="/learn" className="Links backButton"><FontAwesomeIcon icon="fa-solid fa-arrow-left" style={{ color: "#ffffff", }} className="icons" /></NavLink></div>
            <div className="content" ref={contentRef}>
                <div className="lyrics">
                    {lyrics.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={currentLineIndex === index ? 'highlighted' : ''}
                                note={item.note}
                            >
                                {generateLyric(item.line)}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="player">
                <div className="left" style={{ backgroundImage: `url(${album_url})` }}></div>
                <div className="right">
                    <div className="top">
                        <a className="song">{title}</a>
                        <a className="artist">{artist}</a>
                    </div>
                    <div className="bottom">
                        <video
                            ref={videoRef}
                            controls={true}
                            autoPlay={true}
                            name={"media"}
                            loop={true}
                            onTimeUpdate={handleTimeUpdate}
                        >
                            <source src={music_url} type="audio/mpeg"></source>
                        </video>
                    </div>
                </div>
            </div>

            <div className='score'>
                <h1 className='scoreDisplay'></h1>
                <div className='scoreaBoardNavBtn'>
                    <button onClick={function () {
                        alert("Scoreboard")
                    }}>Scoreboard</button>
                    <button onClick={function () {
                        alert("Practice Again")
                    }}>Practice Again</button>
                    <button onClick={function () {
                        alert("Other songs")
                    }}>Other songs</button>
                </div>
            </div>
        </div>
    );
};