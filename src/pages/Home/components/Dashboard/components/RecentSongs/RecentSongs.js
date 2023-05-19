import { RecentSongCard } from "../../../../../../components/Cards/Cards";
import { Link } from "react-router-dom";
import "../../dashboard.css";

export default function RecentSongs({recentSongs}) {
  
  return (
    <div className="recent-songs">
      <h2>
        Recent Songs
        <Link to={"/learn"}>View All</Link>
      </h2>
      {recentSongs.map((song, index) => (
        <RecentSongCard key={index} {...song} />
      ))}
    </div>
  )
}