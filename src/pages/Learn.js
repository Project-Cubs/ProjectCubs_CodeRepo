import { useEffect, useState } from "react";
import { LyricPlayer } from "../components/LyricPlayer";
import Navbar from "../components/Navbar";
import { db_get } from "../services/Database";
=======
import { SongCard } from "../components/Cards/Cards";
import { Navbar } from "../components/Navbar/Navbar";
import { downloadSongs } from "../Firebase/Songs/songs.firebase";
>>>>>>> Stashed changes

export const Learn = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        downloadSongs().then(s => setSongs(s))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <main>
                <h1> Learn </h1>
                <section>
                    {songs.map((song, i) => {
                        return (<SongCard key={i} song={song} />)
                    })}
                </section>
            </main>
        </div>
    )
}

