import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import { useState , useEffect} from "react";
import App from "../App";
import './maincourse.css'
import Datatype from "./datatype";

const Maincourse = () => {

//     const [name, setName] = useState('')
//     const [email, setEmail] =useState('')
//  const handlechange = () => {
//     console.log(name);
//     if (name === "const" ) {
//         alert("correct answer")
//     } else {
//         alert("answer not correct")
//     }
//  }

    return (<div>  <div className="maincourse">
{/* <input
id="name"
value={name} type="name" 
onChange={(e) => setName(e.target.value)}
/>
<input id="email" value={email} type="email"  onChange={(e) => setEmail(e.target.value)}
/>
        <button onClick={handlechange} >submit</button>
        */}

      
<h1 className="first-h1">javaScript Tutorial</h1>
 <Datatype />
    </div>
    </div>  );
}

const VariableDeclaration = () =>{
    const [cons, setCons] = useState('')

    const handlechange = () => {
        // e.preventDefault()
 console.log(cons);
 
 if ( cons === 'const') {
    console.log(cons);
} else
alert('not corect answer')

    }


    return ( 
    <div>
<p>we have veriose method of declaring interge ,
     decimal,fraction,string and boolean</p>
     <p>the are three method of declaring variable in javaScript using 
   <h3>let</h3>   <h3>var</h3>   <h3>const</h3>
         </p>
     <p>example  <span>let</span> car = toyota</p>
     <p>example  <span>const</span> car = benz</p>
     <p>example  <span>var</span> car = lexus</p>
     <p>but the is a different between const,var let  <br/> 
     let is not a globall variable while var is a global variable  and const cannot be change</p>
     <p>eaxercis  <span><input placeholder="enter a declared variable"  value={cons}
      type='text' onChange={(e) => setCons( e.target.value)}
      >
        </input></span> car = fortuna</p>
        <button onClick={handlechange}>submit</button>
      
     </div>
)
}



 const Function = () => {
    return ( <div>
        <p>A function is a block of code that execute a piece of program</p>
        <p>a function in javaScript can only run when it is
             call <br/>the are many type of function but we are going to stike 
        to few of them namely firstly 
        anonymouse function,named function,arrow function </p>
  <p>for a name function is defined by <br/>
    [declaration name] = function [name of the function] () {
        <p> 
            //do something
        </p>
    }</p>
    </div> );
 }
  

export default Maincourse;