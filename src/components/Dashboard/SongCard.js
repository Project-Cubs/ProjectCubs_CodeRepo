// src/components/SongCard.js
import React from 'react';

const SongCard = ({ album_url, title, artist }) => {
  return (
    <div className="song-card">
      <img src={album_url} alt="Album Cover" />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default SongCard;
