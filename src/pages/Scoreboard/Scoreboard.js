
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { onValue, ref } from "firebase/database";
import { database } from "../../utils/Firebase/Firebase";


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
              <th> Ranking </th>
              <th> Name </th>
              <th> Type </th>
              <th> Score </th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1} </td>
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
