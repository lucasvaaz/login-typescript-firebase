
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2OZTuCPvs1JFxaPvHaI0zjVFHlKoe04I",
  authDomain: "login-with-firebase-acf58.firebaseapp.com",
  projectId: "login-with-firebase-acf58",
  storageBucket: "login-with-firebase-acf58.appspot.com",
  messagingSenderId: "361998309406",
  appId: "1:361998309406:web:1219c61a6e2420a1fab60f",
  measurementId: "G-Q9B56M2G6N"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);