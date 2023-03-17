import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC8IcExRwnNOGTe3NoGmb8hf5Dg_sqRTUs",
  authDomain: "projectcubs-8105c.firebaseapp.com",
  databaseURL: "https://projectcubs-8105c-default-rtdb.firebaseio.com",
  projectId: "projectcubs-8105c",
  storageBucket: "projectcubs-8105c.appspot.com",
  messagingSenderId: "480758805013",
  appId: "1:480758805013:web:4242325c1e525a8d37541c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);