import React, { useState } from 'react';
import { setSongScore } from '../../../Firebase/Score/score.firebase';

export const Player = ({
  music_url,
  album_url,
  title,
  artist,
  audioRef,
  handleTimeUpdate,
  handleAudioEnd
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
            ref={audioRef}
            controls={true}
            autoPlay={true}
            name={'media'}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleAudioEnd}
          >
            <source src={music_url} type="audio/mpeg"></source>
          </audio>
        </div>
      </div>
    </div>
  );
};