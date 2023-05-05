import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../Firebase/Firebase";
import { Navbar } from "../components/Navbar/Navbar";


export function Scoreboard() {

  const [scores, setScores] = useState([]);

  function getHighestScore(user) {
    const songScore = user.highScore.song;
    const quizScore = user.highScore.quiz;

    if (songScore > quizScore) {
      // do something when songScore > quizScore
      return {
        name: `${user.firstName} ${user.lastName}`,
        type: "song",
        score: songScore
      }
    } else {
      // do something when quizScore > songScore
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
        // ADD ROWS
        const highestScores = users
          .map(user => getHighestScore(user))
          .sort((a, b) => b.score - a.score)
          .slice(0, 10)
        setScores(highestScores);
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
              <th> Name </th>
              <th> Type </th>
              <th> Score </th>
            </tr>
          </thead>
          <tbody>
            {scores.map(score => {
              return (
                <tr>
                  <td> {score.name} </td>
                  <td> {score.type} </td>
                  <td> {score.score} </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};
