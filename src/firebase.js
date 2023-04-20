// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBZ2k1ffcFP6zOAdfHXO06NxX5dYFlf4ok",
  authDomain: "doctor1-a2f84.firebaseapp.com",
  projectId: "doctor1-a2f84",
  storageBucket: "doctor1-a2f84.appspot.com",
  messagingSenderId: "568051671114",
  appId: "1:568051671114:web:f55f962ec206e9f24886b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app)
