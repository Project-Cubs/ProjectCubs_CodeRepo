/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { parseStringPromise } from 'xml2js';

export const Lyrics = ({ lyrics, currentLineIndex }) => {

    const getKoreanDefinition = async (event, word) => {
        event.stopPropagation();
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
