// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaCO5zWRJOQsAGbHAFyQD3pvPiHoQ8Gpk",
    authDomain: "learning-firebase-8a8c0.firebaseapp.com",
    projectId: "learning-firebase-8a8c0",
    storageBucket: "learning-firebase-8a8c0.appspot.com",
    messagingSenderId: "678046909291",
    appId: "1:678046909291:web:a96fc388248d986f30c22e",
    measurementId: "G-JL4TPQZFZG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
