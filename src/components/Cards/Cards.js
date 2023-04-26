import { useNavigate } from 'react-router-dom';

export function SongCard({ song }) {
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