import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVlETDwe351c2j-d_b6bwsJ5nsNS00LCk",
  authDomain: "cubs-71e77.firebaseapp.com",
  databaseURL: "https://cubs-71e77-default-rtdb.firebaseio.com",
  projectId: "cubs-71e77",
  storageBucket: "cubs-71e77.appspot.com",
  messagingSenderId: "166593409094",
  appId: "1:166593409094:web:75a69a1f5e98c7604a9a47",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);