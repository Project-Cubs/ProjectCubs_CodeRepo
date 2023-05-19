/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { parseStringPromise } from 'xml2js';
import { searchDictionary } from '../../../../utils/Dictionary/searchDictionary';

export const Lyrics = ({ lyrics, currentLineIndex, setPopupInfo }) => {

    const getKoreanDefinition = async (event, word) => {
        event.stopPropagation();
        console.log("word", word)
        const info = await searchDictionary(word);
        info.englishWord && setPopupInfo(info);
    };

    const extractKoreanWords = (sentence) => sentence.match(/[\uAC00-\uD7AF]+/g);

    const generateLyric = (sentence) => {
        if (sentence === "") {
            return '•';
        } else {
            const words = sentence.split(/\s+/);
            const koreanWords = extractKoreanWords(sentence);
            const lyrics = words.map((word, i) => {
                if (koreanWords?.includes(word)) {
                    return <a key={i} onClick={(event) => getKoreanDefinition(event, word)}> {` ${word} `} &nbsp;</a>;
                } else {
                    return ` ${word} `;
                }
            });
            return lyrics;
        }
    };
    return (
        <div className="lyrics">
            {lyrics.map((item, index) => (
                <div
                    key={index}
                    className={currentLineIndex === index ? 'highlighted' : ''}
                    note={item.note}
                >
                    {generateLyric(item.line)}
                </div>
            ))}
        </div>
    );
};
