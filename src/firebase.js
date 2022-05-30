// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5fysOsJqweJU7Ix9NvYkq62SC1lfSj-c",
  authDomain: "fir-authentication-b19b9.firebaseapp.com",
  projectId: "fir-authentication-b19b9",
  storageBucket: "fir-authentication-b19b9.appspot.com",
  messagingSenderId: "338673992628",
  appId: "1:338673992628:web:321e610fcb5a5fdce728e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();