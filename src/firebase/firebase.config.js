// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsFTaoCNKoYOumc5TvTFByntee12q1SlE",
  authDomain: "user-email-password-auth-c1c17.firebaseapp.com",
  projectId: "user-email-password-auth-c1c17",
  storageBucket: "user-email-password-auth-c1c17.appspot.com",
  messagingSenderId: "1025166927588",
  appId: "1:1025166927588:web:809b634bca4d2519e16ef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;