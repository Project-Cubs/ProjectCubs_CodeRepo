import { getUser, updateUser } from "../users/users.firebase";

export async function setSongScore(newScore){
    // getUser().then((data) => {
    //     if(data.highScore["song"] < newScore) return updateUser(newScore)
    // })

    const user = await getUser();
    console.log(user);
    const songScore = user.highScore.song;

    if(songScore < newScore) return await updateUser({highScore: {song: newScore, quiz: user.highScore.quiz}})
}

export async function setQuizScore(newScore){
    // getUser().then((data) => {
    //     if(data.highScore["quiz"] < newScore) return updateUser(db_ref, {RecentSongs: newScore})
    // })

    const user = await getUser();
    const quizScore = user.highScore.quiz;

    if(quizScore < newScore) return await updateUser({highScore: {song: user.highScore.song, quiz: newScore}})
}
