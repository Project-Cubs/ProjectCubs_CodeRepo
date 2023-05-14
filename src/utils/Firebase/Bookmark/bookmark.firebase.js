import { getUser, updateUser } from "../Users/users.firebase";

export async function addBookmark(word) {
    // Get user's bookmark
    const bookmark = await getBookmark() || [];
    for (let i = 0; i < bookmark.length; i++) {
        if (bookmark[i].koreanWord === word.koreanWord) {
            alert("Already bookmarked");
            return;
        }
    }

    await updateUser({
        bookmark: [...bookmark, word]
    })
}

export async function getBookmark() {
    // Get user's bookmark
    const user = await getUser();
    // ADD CODE HERE
    console.log(user);
    return user.bookmark;
}