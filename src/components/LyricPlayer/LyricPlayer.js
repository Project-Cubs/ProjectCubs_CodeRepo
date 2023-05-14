import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { parseStringPromise } from 'xml2js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LyricPlayer.css';
import { setSongScore } from '../../services/score/score.firebase';
import { get, push, ref, remove, set } from 'firebase/database';
import { auth, database } from '../../services/Firebase';

export const LyricPlayer = () => {
    const scoreState = useState(0);
    const [score, setScore] = useState(0);
    const location = useLocation();
    const song = location.state?.song;

    const { music_url, title, artist, album_url, lyrics } = { ...song }
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const contentRef = useRef(null);
    const audioRef = useRef(null);
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
        const time = audioRef.current.currentTime * 1000;
        //console.log(time);
        const past = lyrics.filter((item) => item.time < time);
        if (past.length !== currentLineIndex) {
            setCurrentLineIndex(past.length - 1);
            align();
        }
    };

    async function handleAudioEnd(){
        console.log("handleAudioEnd");
        const randomScore = Math.floor(Math.random() * 100);
        await setSongScore(randomScore);
        setScore(randomScore);
        const scoreDisplay = document.getElementsByClassName("score");
        scoreDisplay[0].style.display = "inline-block";
        audioRef.current.controls = false
        audioRef.current.currentTime = 0;
        //if database songsPlayed directory does not exists
        //create directory
        console.log(!!location.state?.songsPlayed)

        if (!!location.state?.songsPlayed) {
            set(ref(database, `users/${auth.currentUser.uid}/songsPlayed`), [song]);
          } else {
            // Get reference to songsPlayed
            const songsPlayedRef = ref(
              database,
              `users/${auth.currentUser.uid}/songsPlayed`
            );
        
            get(songsPlayedRef)
              .then((snapshot) => {
                let songsPlayedLength = 0;
                snapshot.forEach(() => {
                  songsPlayedLength++;
                });
                console.log("Length of songsPlayed:", songsPlayedLength);

                if (songsPlayedLength >= 3) {
                    // Remove first song
                    // remove(songsPlayedRef, snapshot.child("0").key);
                    
                }

        
                push(songsPlayedRef, song);
              })
          }
        
        
    }

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
                        <audio
                            ref={audioRef}
                            controls={true}
                            name={"media"}
                            autoPlay={true}
                            loop={false}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleAudioEnd}
                        >
                            <source src={music_url} type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>
            </div>

            <div className='score'>
                <h1 className='scoreDisplay'>Your Score</h1>
                <h1>{score}</h1>
                <div className='scoreaBoardNavBtn'>
                    <button onClick={function () {
                        alert("Scoreboard")
                    }}>Scoreboard</button>
                    <button onClick={function () {
                        setScore(0);
                        audioRef.current.currentTime = 0;
                        audioRef.current.controls = true
                        audioRef.current.play()
                        const scoreDisplay = document.getElementsByClassName("score");
                        scoreDisplay[0].style.display = "none";
                    }}>Practice Again</button>
                    <button onClick={function () {
                        audioRef.autoPlay = true;
                    }}>Other songs</button>
                </div>
            </div>

        </div>
    );
};