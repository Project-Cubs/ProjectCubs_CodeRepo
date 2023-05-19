import { useEffect, useState } from "react";
import ChartCard from "./components/ChartCard/ChartCard";
import RecentSongs from "./components/RecentSongs/RecentSongs";
import RecentWords from "./components/RecentWords/RecentWords"
import { getUser } from "../../../../utils/Firebase/Users/users.firebase";
import { auth } from "../../../../utils/Firebase/Firebase";
import "./dashboard.css";

export default function Dashboard() {

  const [firstName, setFirstName] = useState("");
  const [recentWords, setRecentWords] = useState([])
  const [recentSongs, setRecentSongs] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dbUser = await getUser();
        console.log(dbUser);
        const bookmark = dbUser.bookmark || [];
        setRecentWords(bookmark.length > 3 ? bookmark.slice(-3) : bookmark);
        setRecentSongs(dbUser.recentSongs || []);
        setFirstName(dbUser.firstName);
      }
    })
  }, [])

  return (
    <div className="dashboard">
      <h2 className="h2">Welcome Back</h2>
      <h1 className="h1">{firstName}</h1>
      <section className="content-section">
        <ChartCard />
        <RecentSongs recentSongs={recentSongs} />
        <RecentWords recentWords={recentWords} />
      </section>
    </div>
  )
}