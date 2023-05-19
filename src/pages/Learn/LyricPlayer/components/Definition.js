import { push, ref } from '@firebase/database';
import React from 'react'
import { auth, database } from '../../../../utils/Firebase/Firebase';
import { addBookmark } from '../../../../utils/Firebase/Bookmark/bookmark.firebase';
import { Link } from 'react-router-dom';


// return { koreanWord, koreanDefinition, englishWord, englishDefinition }

export const Definition = ({popupInfo, setPopupInfo}) => {
    console.log("popup", popupInfo);
    return (
        <div className='definition'>
                <h1 className='koreanWord'>
                    {popupInfo.koreanWord}
                </h1>
                <h1 className='englishWord'>
                    {popupInfo.englishWord}
                </h1>
                <h1 className='englishDefinition'>
                    {popupInfo.englishDefinition}
                </h1>
                <h3 onClick={() => {
                    setPopupInfo(null);
                }}> Close
                </h3>
                <h1 onClick={async function(){
                    await addBookmark(popupInfo);
                    alert("Added!");
                    setPopupInfo(null);
                }}>⭐ Add to bookmark ⭐</h1>
            </div>
    )
}