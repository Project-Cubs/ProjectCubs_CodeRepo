import { getUser, updateUser } from "../Users/users.firebase";

export async function getRecentSongs() {
    const user = await getUser();
    return user.recentSongs;
}

export async function addRecentSong(song) {
    const recentSongs = await getRecentSongs() || [];
    if (recentSongs.length === 3) {
        recentSongs.shift();
    }
    recentSongs.push(song);
    return updateUser({
        recentSongs: recentSongs
    });
}