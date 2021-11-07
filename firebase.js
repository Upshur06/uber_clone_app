// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsYn3sWhx2Zal2AxqadK-BdBHa1PzFLJQ",
  authDomain: "uber-next-clone-17d69.firebaseapp.com",
  projectId: "uber-next-clone-17d69",
  storageBucket: "uber-next-clone-17d69.appspot.com",
  messagingSenderId: "1087579323026",
  appId: "1:1087579323026:web:7822901cfe72438f9a844b",
  measurementId: "G-2RPNBNEME0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider,auth }
