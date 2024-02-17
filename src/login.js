import './navbar/logic.css'
import { useState } from 'react';
import app from './firebaseConfig'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";



const Logic = () => {
    let auth = getAuth();
    const[signin, setSignin] = useState({})
    const handleInput = (event) =>{
const newsignin ={[event.target.name]: event.target.value};
setSignin(...signin, ...newsignin  )
    }

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth , signin.email, signin.password)
      .then((Response ) => { 
        console.log(Response.user);
    })
      .catch((err) => {
        alert(err.message)
      });
    }
    return ( <div>
   
        <form>
            <input 
            name="email"
            placeholder="Emial"
            onChange={(event)=> handleInput(event)}    
        />
       <input 
       name="password"
       placeholder="password"
       onChange={(event)=> handleInput(event)}
       />
       <button onClick={handleSubmit}>submit</button>
        </form>
    </div> );
}
 
export default Logic;