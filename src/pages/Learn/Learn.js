import { useEffect, useState } from "react";
import { SongCard } from "../../components/Cards/Cards";
import { Navbar } from "../../components/Navbar/Navbar";
import { downloadSongs } from "../../utils/Firebase/Songs/songs.firebase";

export function Learn() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        downloadSongs().then(s => setSongs(s))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <main className="loggedIn">
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

