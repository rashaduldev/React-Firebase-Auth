/* eslint-disable no-unused-vars */

import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [userData, setUserData] = useState(null);

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUserData(loggedUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignin}>Google SignIn</button>
      {/* Add a similar button and event handler for GitHub SignIn */}
      {/* <button onClick={handleGitHubSignin}>GitHub SignIn</button> */}
      {userData && <h3>Name: {userData.displayName}</h3>}
    </>
  );
}

export default App;
