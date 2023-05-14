import { getUser, updateUser } from "../Users/users.firebase";

export async function addBookmark(word) {
    // Get user's bookmark
    const bookmark = await getBookmark();;
}

export async function getBookmark() {
    // Get user's bookmark
    const user = await getUser();
    // ADD CODE HERE
}