// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA61-DaOzaA1J9gccrc4REsa6Lt3QbO2sw",

  authDomain: "med-tracker-c2d12.firebaseapp.com",

  projectId: "med-tracker-c2d12",

  storageBucket: "med-tracker-c2d12.appspot.com",

  messagingSenderId: "394159631195",

  appId: "1:394159631195:web:c93b3417810b321bbbc87e",

  measurementId: "G-KVXEWQ70K6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);