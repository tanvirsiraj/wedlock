// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE4RdzbJGmcVSRPKY-fCdbuVSlFZ6MUNo",
  authDomain: "wedlock-1a901.firebaseapp.com",
  projectId: "wedlock-1a901",
  storageBucket: "wedlock-1a901.appspot.com",
  messagingSenderId: "451666897018",
  appId: "1:451666897018:web:944fd9e130d0b5542673c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
