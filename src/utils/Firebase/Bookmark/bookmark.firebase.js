import { getUser, updateUser } from "../Users/users.firebase";

export async function addBookmark(word) {
    const bookmark = await getBookmark() || [];
    // Check if word is already bookmarked
    for (let i = 0; i < bookmark.length; i++) {
        if (bookmark[i].koreanWord === word.koreanWord) {
            alert("Word already bookmarked!");
            return;
        }
    }
    // Add word to bookmark
    await updateUser({
        bookmark: [...bookmark, word]
    })
}

export async function getBookmark() {
    // Get user's bookmark
    const user = await getUser();
    return user.bookmark;
}