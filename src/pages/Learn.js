import { useEffect, useState } from "react";
import { SongCard } from "../components/Cards/Cards";
import { Navbar } from "../components/Navbar/Navbar";
import { db_get } from "../services/Database";

export const Learn = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        db_get("songs").then(songs => {
            setSongs(songs)
        })
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

