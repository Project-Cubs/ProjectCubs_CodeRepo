import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth, database} from "../Firebase";
import { get, ref, set, update } from "firebase/database";
//signInUser
export async function registerUser({email, password, firstName, lastName}) {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const db_ref = ref(database, "/users/" + response.user.uid);
    await set(db_ref, {email: email, firstName, lastName, highScore: {song: 0, quiz: 0}, bookmark:[]});
    return response;
}
//RegisterUser - ({email, password, firstname, lastname})
export async function signInUser({email, password}) {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("user", JSON.stringify(user));
            
            console.log("Signed in as user:", user);
            return user;
        });
}

//getUser - currently logged in user    
export async function getUser() {
    const uid = auth.currentUser.uid;
    console.log(uid);
    const db_ref = ref(database, "/users/" + uid);
    return (await get(db_ref)).val();
}

export function updateUser(data){
    const uid = auth.currentUser.uid;
    console.log(uid);
    const db_ref = ref(database, "/users/" + uid);
    return update(db_ref, data)
}

