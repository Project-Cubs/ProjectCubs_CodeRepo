import { Link } from "react-router-dom"
import DonutChart from "./DonutChart" //why error
import SongCard from "./SongCard"
import WordCard from "./WordCard"
import './Dashboard.css'
import { auth } from "../../services/Firebase"
import { ref } from "firebase/database"

const donutChartData = {
    labels: ["Completed", "Remaining"],
    datasets: [{
        label: "Weekly Goal",
        data: [34, 6],
        backgroundColor: ["#26C221", "#FF8711"]

    }]
}


const songs = [
    {album_url:"", title:"Song 1", artist:"Artist 1"},
    {album_url:"", title:"Song 1", artist:"Artist 2"},
    {album_url:"", title:"Song 1", artist:"Artist 3"}
]

const words = [
    {koreanWord:"안녕", englishWord:"hey"},
    {koreanWord:"안녕", englishWord:"hey"},
    {koreanWord:"안녕", englishWord:"hey"}
]

const Dashboard = () => {
    function getName(){
        const user = auth.currentUser
        console.log(user)
        return user ? user.displayName : "User"
    }
    return (
        <div className="dashboard">
            <div className="name-section">
                <h2>Welcome Back, </h2>
                <h1>{getName()}</h1>
            </div>

            <h2>Weekly Goal</h2>

            <div className="chart-section">
                <DonutChart data={donutChartData}/>
            </div>

            <section className="content-section">
                <div className="recent-songs">
                    <h2>
                        Recent Songs
                        <Link to={"/learn"}>View All</Link>
                    </h2>
                    {
                        songs.map((song, index) => {
                            return(
                                <SongCard key={index} {...song}></SongCard>
                            )
                        })
                    }
                </div>
                
                <div className="recent-words">
                    <h2>
                        Recent Words
                        <Link to={"/dictionary"}>View All</Link>
                    </h2>
                    {
                        words.map((word, index) => (
                            <WordCard key={index} {...word}></WordCard>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Dashboard