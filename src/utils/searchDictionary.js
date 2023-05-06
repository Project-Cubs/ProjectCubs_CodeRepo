import { parseStringPromise } from "xml2js";

export const searchDictionary = async (word) => {
    const url = process.env.REACT_APP_DICT_URL;
    const key = process.env.REACT_APP_DICT_KEY;
    const q = word;
    const translated = "y";
    const trans_lang = "1";
    const response = await fetch(`${url}?key=${key}&q=${q}&translated=${translated}&trans_lang=${trans_lang}`);
    const text = await response.text();
    const json = await parseStringPromise(text);
    console.log(json);
    const wordObj = json.channel.item?.[0].sense?.[0];

    const koreanWord = word;
    const koreanDefinition = wordObj.definition[0];
    const englishWord = wordObj.translation?.[0].trans_word[0];
    const englishDefinition = wordObj.translation?.[0].trans_dfn[0];

    return { koreanWord, koreanDefinition, englishWord, englishDefinition }
};