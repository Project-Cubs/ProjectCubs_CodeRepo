import React from 'react';

export const Player = ({
  music_url,
  album_url,
  title,
  artist,
  videoRef,
  handleTimeUpdate,
}) => {
    
  return (
    <div className="player">
      <div className="left" style={{ backgroundImage: `url(${album_url})` }}></div>
      <div className="right">
        <div className="top">
          <a className="song">{title}</a>
          <a className="artist">{artist}</a>
        </div>
        <div className="bottom">
          <audio
            ref={videoRef}
            controls={true}
            autoPlay={true}
            name={'media'}
            loop={true}
            onTimeUpdate={handleTimeUpdate}
          >
            <source src={music_url} type="audio/mpeg"></source>
          </audio>
        </div>
      </div>
    </div>
  );
};
