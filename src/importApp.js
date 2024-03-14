
import { useEffect, useState } from 'react';
import { app } from './importfirebaseConfig';
import {
  
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged} from 'firebase/auth';
import './App.css'
import 'firebase/auth';
import { auth }  from "./firebaseConfig";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

function ImportApp() {
  
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value }

    setData({ ...data, ...inputs })
  }

  const addData = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
  }

  const handlelogout = () => {
    signOut(auth);
  }
// uncomment this when are done coding so as to improve fisibiblity
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if(data){
        alert("Logged In")
      }
      else {
        alert('Not Logged In')
      }
    })
  }, [])
  return (
    <div className='App-headers'>
    <section className="App-header">
      <input 
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={event => handleInputs(event)} 
        /><br/>
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={event => handleInputs(event)}
      /><br/>

      <button onClick={addData} className='buttom'>Log In</button><br/>
      <button onClick={handlelogout} className='buttom'>Log out</button>
    </section>
    </div>
  );
}

export default ImportApp;
