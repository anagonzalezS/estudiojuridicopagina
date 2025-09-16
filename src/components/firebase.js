import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUfg80OndPduk6tqbHMBh2mS7a9nuX9w4",
  authDomain: "comentarios-app-14bb9.firebaseapp.com",
  projectId: "comentarios-app-14bb9",
  storageBucket: "comentarios-app-14bb9.appspot.com",
  messagingSenderId: "844674872480",
  appId: "1:844674872480:web:cb87422e8a0d3d0933c5c5",
  measurementId: "G-0MS591P2DC",
  databaseURL: "https://comentarios-app-14bb9-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
