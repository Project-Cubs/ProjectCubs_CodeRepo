import React, { useState, useEffect, useRef } from 'react';
export const LyricPlayer = ({ music_url, title, artist, album_url, lyrics }) => {
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
        if (videoRef.current.currentTime > videoRef.current.duration-0.2) {
            alert("Your Score is: " + Math.floor(Math.random()*100))
        }
    };
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
                                {item.line === '' ? '•' : item.line}
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