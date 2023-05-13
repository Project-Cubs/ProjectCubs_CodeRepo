import { useNavigate } from 'react-router-dom';

export const RecentWordCard = ({ koreanWord, englishWord }) => {
    return (
        <div className="word-card">
            <p>{koreanWord}</p>
            <p>{englishWord}</p>
        </div>
    );
};

export const RecentSongCard = ({ album_url, title, artist }) => {
    return (
        <div className="song-card">
            <img src={album_url} alt="Album Cover" />
            <h3>{title}</h3>
            <p>{artist}</p>
        </div>
    );
};

export const SongCard = ({ song }) => {
    const { album_url, artist, title } = { ...song };
    const navigate = useNavigate();
    return (
        <aside>
            <h3> {title} </h3>
            <figure>
                <img src={album_url} alt='album' />
                <figcaption>
                    <i> Artist: {artist} </i>
                </figcaption>
            </figure>
            <button onClick={() => {
                navigate("/lyric-player", { state: { song } })
            }}>
                Sing!
            </button>
        </aside>
    );
}