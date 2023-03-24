import { useEffect, useState } from "react";
import { LyricPlayer } from "../components/LyricsPlayer";
import { Navbar } from "../components/Navbar";
import { db_get } from "../services/Database";

export const Learn = () => {

    const [song, setSong] = useState();

    useEffect(() => {
        db_get("songs").then(songs => {
            setSong(songs[0])
        })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            {song ? <LyricPlayer {...song} /> : <h1> Learn </h1>}
        </div>
    )
}

