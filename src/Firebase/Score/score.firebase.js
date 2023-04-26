import { getUser, updateUser } from "../Users/users.firebase";

export async function setSongScore(newScore) {
    const user = await getUser();
    const songScore = user.highScore.song || 0;
    newScore > songScore && await updateUser({
        highScore: {
            song: newScore
        }
    })
}

export async function setQuizScore(newScore) {
    const user = await getUser();
    const quizScore = user.highScore.quiz || 0;
    newScore > quizScore && await updateUser({
        highScore: {
            quiz: newScore
        }
    })
}