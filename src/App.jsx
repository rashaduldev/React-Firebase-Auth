/* eslint-disable no-unused-vars */

import './App.css';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();

function App() {
  const [userData, setUserData] = useState(null);
  const [githubUserData, setgithubUserData] = useState(null);
console.log(githubUserData);
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
  const handleGitHubSignin=() => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      const loggedUser = result.user;
      setgithubUserData(loggedUser);
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <>
      <h1>Firebase + React</h1>
      <button style={{border:'1px solid gray'}} className='btn btn-neutral' onClick={handleGoogleSignin}>Google SignIn</button>
      <button onClick={handleGitHubSignin}>GitHub SignIn</button>
      {userData && <h3>Name: {userData.displayName}</h3>}
    </>
  );
}

export default App;
