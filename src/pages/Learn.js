import { useEffect, useState } from "react";
import { downloadSongs } from "../Firebase/Songs/songs.firebase";
import { SongCard } from "../components/Cards/Cards";
import { Navbar } from "../components/Navbar/Navbar";

export function Learn () {

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

