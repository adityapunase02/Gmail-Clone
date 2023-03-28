import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwv3jJm-S7kPEAG6z2O2RdDbbSNiV0sZY",
  authDomain: "clone-yt-a5aa3.firebaseapp.com",
  projectId: "clone-yt-a5aa3",
  storageBucket: "clone-yt-a5aa3.appspot.com",
  messagingSenderId: "5447195656",
  appId: "1:5447195656:web:6aeaf5f0c36cd0bd1c05bd",
  measurementId: "G-BMSBNW08JJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
