// import React from 'react';

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const Heroregister = () => {

  const [registerError,setRegisterError] =useState('');
  const [success,setSuccess] = useState('');
  console.log(registerError);
  const handleRegistration=e=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email, password);
    setRegisterError('');

    if (password.length <6 ) {
      setRegisterError('Password should be at least 6 characters');
      return;
    } 

    

    // Create user
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      console.log(result.user);
      setSuccess("User created successfully");
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message);
      setRegisterError(err.message);
    })
   
    // console.log('heroregister');
    // console.log(registerError);
};

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegistration} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {  registerError && <div className="text-red-600 pb-5">
          {registerError}
        </div>
      }
      {
        success && <div className="text-green-600 pb-5">
          {success}
        </div>
      }
    </div>
  </div>
</div>
        </div>
    );
};

export default Heroregister;