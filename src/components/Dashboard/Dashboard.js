import { useEffect, useState } from "react";
import ChartCard from "./Components/ChartCard/ChartCard";
import RecentSongs from "./Components/RecentSongs/RecentSongs";
import RecentWords from "./Components/RecentWords/RecentWords"
import { getUser } from "../../utils/Firebase/Users/users.firebase";
import { auth } from "../../utils/Firebase/Firebase";
import "./dashboard.css";

export default function Dashboard() {

  const [firstName, setFirstName] = useState("John");

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dbUser = await getUser();
        const firstname = dbUser.firstName || "John";
        setFirstName(firstname);
      }
    })
  }, [])

  return (
    <div className="dashboard">
      <h2 className="h2">Welcome Back</h2>
      <h1 className="h1">{firstName}</h1>
      <section className="content-section">
        <ChartCard />
        <RecentSongs />
        <RecentWords />
      </section>
    </div>
  )
}