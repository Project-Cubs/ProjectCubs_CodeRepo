import { getUser, updateUser } from "../Users/users.firebase";

export async function addBookmark(word) {
    const bookmark = await getBookmark() || [];
    await updateUser({
        bookmark: [...bookmark, word]
    })
}

export async function getBookmark() {
    const user = await getUser();
    return user.bookmark;
}