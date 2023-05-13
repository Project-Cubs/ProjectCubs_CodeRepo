// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import DonutChart from '../../../components/Charts/DonutChart';

import { Link } from 'react-router-dom';
import { RecentSongCard, RecentWordCard } from '../../../components/Cards/Cards';
import "./Dashboard.css";
import { auth } from '../../../utils/Firebase/Firebase';
import { getUser } from '../../../utils/Firebase/Users/users.firebase';

const Dashboard = () => {

    const [name, setName] = useState("")
    const [recentWords, setRecentWords] = useState([])

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const dbUser = await getUser();
                const bookmark = dbUser.bookmark || [];
                setRecentWords(bookmark.length > 3 ? bookmark.slice(-3) : bookmark);
                setName(dbUser.firstName);
            }
        })
    }, [])

    const donutChartData = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: [75, 25],
                backgroundColor: ['#36A2EB', '#FFCE56'],
            },
        ],
    };

    const songs = [
        // album_url, artist, title
        { album_url: 'https://lh3.googleusercontent.com/vYnAGmLOhdCYC3qj7VYkEXAsY6lu2VE0LGOBhPgSS__GjdgMwu2CZDlDjJd4up21_sCMUxovlzvrnG7i4t_o1-GRxP4nEu-w_e83brKewKL_BFiX=w960-rj-nu-e365', title: 'Song 1', artist: 'Singer 1' },
        { album_url: 'https://external-preview.redd.it/MY3_HQFLzswJrX8tYEEbBuodnWH67nqf5gDYSZrFh0s.jpg?auto=webp&s=c75ba2d2994db81df63721b8da0af2316dd3df86', title: 'Song 2', artist: 'Singer 2' },
        { album_url: 'https://media.pitchfork.com/photos/6092f075f85a3980dcfb9b04/1:1/w_3000,h_3000,c_limit/itzy_guess_who_album_artwork.jpg', title: 'Song 3', artist: 'Singer 3' },
    ];

    return (
        <div className="dashboard">
            <div className="name-section">
                <h2>Welcome back,</h2>
                <h1>{name}</h1>
            </div>

            <h2>Weekly goal</h2>
            <div className="chart-section">
                <DonutChart data={donutChartData} />
            </div>

            <section className="content-section">
                <div className="recent-songs">
                    <h2>
                        Recent Songs
                        <Link to={"/learn"}>View All</Link>
                    </h2>
                    {songs.map((song, index) => (
                        <RecentSongCard key={index} {...song} />
                    ))}
                </div>
                <div className="recent-words">
                    <h2>
                        Recent Words
                        <Link to={"/dictionary"}>View All</Link>
                    </h2>
                    {recentWords.map((word, index) => (
                        <RecentWordCard key={index} {...word} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
