import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../Firebase/Firebase";
import { Navbar } from "../components/Navbar/Navbar";


export function Scoreboard() {

  const [scores, setScores] = useState([]);

  function getHighestScore(user) {
    const songScore = user.highScore.song || 0;
    const quizScore = user.highScore.quiz || 0;
    if (songScore > quizScore) {
      return {
        name: `${user.firstName} ${user.lastName}`,
        type: "song",
        score: songScore
      }
    } else {
      return {
        name: `${user.firstName} ${user.lastName}`,
        type: "quiz",
        score: quizScore
      }
    }
  }

  useEffect(() => {
    onValue(ref(database, "/users"), (snapshot) => {
      const users = Object.values(snapshot.val());
      if (users) {
        setScores(users
          .map(u => getHighestScore(u))
          .sort((a, b) => b.score - a.score)
          .slice(0, 9)
        )
      }
    })
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <h1> Scoreboard </h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, i) => {
              return <tr key={i}>
                <td>{s.name}</td>
                <td>{s.type}</td>
                <td>{s.score}</td>
              </tr>
            }
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};
