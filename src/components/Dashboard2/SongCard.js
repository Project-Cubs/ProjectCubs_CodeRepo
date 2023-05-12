const SongCard = ({album_url, title, artist}) => {
    return (
        <div className="song-card">
            <img src={album_url} alt="album cover"/>
            <h3> {title} </h3>
            <p><i><b>Artist: </b></i>{artist} </p>
        </div>
    )
}

export default SongCard