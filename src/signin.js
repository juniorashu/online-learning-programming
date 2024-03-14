import React, { useState } from "react";
 import { auth }  from "./firebaseConfig";
 import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//  import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Sign = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const signin = (e) => {
    // function
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((usercredential) => {
        console.log(usercredential)
            }).catch((error) => {
                console.log(error);
            })
  }

    return (
        <div className="signin">
            <form onSubmit={signin}>
                <h1>Log in</h1>
                <input type="email" 
                placeholder="enter your email"                
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />
                <input type="password" 
                placeholder="password should be atleast 6 characters"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 / > 
                 <button type="submit">Log In</button>
            </form>
        </div>
    )
}
 
export default Sign;