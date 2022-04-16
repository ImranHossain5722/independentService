// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAntl8nBoQaNZ3kHozdyp1LT64aM6xzaLQ",
  authDomain: "single-fitness-trainer.firebaseapp.com",
  projectId: "single-fitness-trainer",
  storageBucket: "single-fitness-trainer.appspot.com",
  messagingSenderId: "2205132606",
  appId: "1:2205132606:web:1d9754b5ecfbc478cb6e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;