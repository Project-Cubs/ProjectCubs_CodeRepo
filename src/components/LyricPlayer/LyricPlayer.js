import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { parseStringPromise } from 'xml2js';
import './LyricPlayer.css'

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
        console.log(videoRef.current.currentTime + '/' + videoRef.current.duration);
        if (videoRef.current.currentTime > videoRef.current.duration - 0.2) {
            alert("Your Score is: " + Math.floor(Math.random() * 100))
        }
    };
    useEffect(() => {
        window.addEventListener('resize', align);
        return () => {
            window.removeEventListener('resize', align);
        };
    }, []);

    async function getKoreanDefinition(word) {
        const url = "https://krdict.korean.go.kr/api/search";
        const key = "313D5A71F45A553EE6F384880AD5CB9C";
        const q = word;
        const translated = "y";
        const trans_lang = "1";
        const result = await fetch(`${url}?key=${key}&q=${q}&translated=${translated}&trans_lang=${trans_lang}`);
        const text = await result.text();
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
            console.log("words", words);
            const koreanWords = extractKoreanWords(sentence);
            console.log("korean words", koreanWords);
            const lyrics = words.map(word => {
                if (koreanWords?.includes(word)) {
                    return (
                        <a onClick={() => getKoreanDefinition(word)}> {` ${word} `} &nbsp;</a>
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
        </div>
    );
};