import React, { useState, useEffect, useRef } from 'react';
import { parseString } from 'xml2js';

    const location = useLocation();
    const song = location.state?.song;

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
=======
    const handleTimeUpdate = async () => {
>>>>>>> Stashed changes:src/components/LyricPlayer/LyricPlayer.js
        const time = videoRef.current.currentTime * 1000;
        const past = lyrics.filter((item) => item.time < time);
        if (past.length !== currentLineIndex) {
            setCurrentLineIndex(past.length - 1);
            align();
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

    useEffect(() => {
        window.addEventListener('resize', align);
        return () => {
            window.removeEventListener('resize', align);
        };
    }, []);

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