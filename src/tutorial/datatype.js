import React from "react";
import image from '../datatypes.png'
import { useState } from "react";
import image1 from '../fun-coding.jpg'
import { Router, Route,Link } from "react-router-dom";
import Indexbody from '../body/index'
import Conditional from "./conditional";

const Datatype = () => {
const [constVariable, setConstVarialble] = useState('')
const [letVariable, setLetVariable] = useState('')
// event 
const handleConst = () => {
if (constVariable === 'const') {
   alert('correct answer')
} else {
   alert('wrong answer')
}
}
const handlelet = () => {
   if (letVariable === 'let') {
      alert('correct answer')
   } else {
      alert('wrong answer')
   }
   }

const RouterCmpnnt = () => {
   return ( <div>
     <Router>
      <Route path="/" element={<Indexbody />} />
      <Route path="/conditional" element={<Conditional />} />
     </Router>
   </div> );
}
 

    return (  <div className="maindiv1">
      {/*  Router Component  */}


      <nav>
         <ul className="ul">
            <li>   <Link to="/">home</Link>   </li>
            <li><Link to='/conditional'> Conditional statement</Link></li>
            {/* <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li> */}
         </ul>
      </nav>
  <h1 className="second-h1">Data Types</h1>
  <aside className="aside">
   <h3>DEFINITION</h3>
   <h3>TYPE OF DATATYPE</h3>
   <h3>EXAMPLE</h3>
   <h3>THE USE</h3>
   <h3>VARIABLE</h3>
   <h3>TYPES</h3>
   <h3>HOW THEY ARE DECLARED</h3>
   <h3>BOOLEANS</h3>
   <h3>GENERATE RANDOM VALUE</h3>
   <h3>ROUNDING VALUE</h3>
   <h3>STRING CONCATENATION</h3>
 <img src={image} className="image1"/>
 <h4>the diagram above explain the branchesh of datatype </h4>
 <img src={image1} className="image2" />
 <section className="aside1">

 <span>1. Objects</span><br/>
<span>2. Arrays</span><br/>
<br/>
<p>Now, let us see what exactly primitive and non-primitive data types mean.</p><br/>
<p>*Primitive* data types are immutable(non-modifiable) data types.</p>
 Once a primitive data type is created we cannot modify it.

 <span>### Non-Primitive Data Types</span><br/>

.<p>*Non-primitive* data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created</p><br/>
.<p>Let us see by creating an array. An array is a list of data values in a square bracket</p>
<p> Arrays can contain the same or different data types.</p><br/>
 <p> Array values are referenced by their index. In JavaScript array index starts at zero. I.e.,</p>
<p> the first element of an array is found at index zero, the second element at index one, and the third element at index two, etc.</p><br/>

```js
<p>let nums = [1, 2, 3]</p><br/>
<p>nums[0] = 10</p><br/>

console.log(nums)  // [10, 2, 3]<p></p><br/>
```

<p>As you can see, an array, which is a non-primitive data type is mutable. Non-primitive data types</p>
 <p> cannot be compared by value. Even if two non-primitive data types have the same properties and</p>
<p> values, they are not strictly equal.</p><br/>
 </section>
 <section className="aside2">

 <p>console.log(nums == numbers)  // false</p>





console.log(userOne == userTwo) // false<p></p>


<p>Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects.</p>
<p>Non-primitive values are referred to as reference types, because they are being</p>
<p> compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.</p>


<p>let nums = [1, 2, 3]</p>
<p>let numbers = nums</p>

 <p>console.log(nums == numbers)</p> // true<p></p>



<p>let userTwo = userOne</p>

<p>console.log(userOne == userTwo)</p>  // true


<p>If you have a hard time understanding the difference between primitive data types and non-primitive data types, you are not the only</p>
<p> one. Calm down and just go to the next section and try to come back after some time. Now let us start the data types by number type.</p>

<p>## Numbers</p>

<p>Numbers are integers and decimal values which can do all the arithmetic operations.</p>


<p>const randNum = Math.random() // creates random number between 0 to 0.999999</p>

<p>console.log(Math.round(PI))                // 3 to round values to the nearest number</p>


 </section>
</aside>
  <div className="maindiv2">
   <section> 
  <p>In the previous section, we mentioned a little bit about data types.</p>
   <p> Data or values have data types.  Data types describe</p> 
  <p>   the characteristics of data. Data types can be divided into two:</p>
     <ul  className="uiDatatype">
        <li className="liDatatype"> Primitive data types</li>
        <li className="liDatatype1">Non-primitive data types(Object References)</li>
     </ul>
     </section>
     <p>
      
### <span>Primitive Data Types</span><br/>
<section className="section1">
<span>Primitive data types in JavaScript include:</span>
<br/>
<p> 1. Numbers - Integers, floats </p>
<p>2. Strings - Any data under single quote, double quote or backtick quote</p><br/>
<p> 3. Booleans - true or false value</p><br/>
<p> 4. Null - empty value or no value</p><br/>
<p> 5. Undefined - a declared variable without a value</p><br/>
<p> 6. Symbol - A unique value that can be generated by Symbol constructor</p><br/>
</section>
<span><p>Non-primitive data types in JavaScript includes:</p></span><br/>

 </p>
 
<p>```js</p>
<p>let nums = [1, 2, 3]</p>
<p>let numbers = [1, 2, 3]</p>

<p>// More Examples</p>
<p>const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant</p>
<p>const bodyTemp = 37      // oC average human body temperature, which is a constant</p>

<p>console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)</p>


<p>### Math Object</p>

<p>In JavaScript the Math Object provides a lots of methods to work with numbers.</p>

<p>js</p>
<p>const PI = Math.PI</p>

<p>console.log(PI)                            // 3.141592653589793</p>

<p>// Rounding to the closest number</p>
<p>// if above .5 up if less 0.5 down rounding</p>

<p>console.log(Math.ceil(PI))                 // 4 rounding up</p>

<p>console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value</p>

<p>console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value</p>



<div className="bottom1">
   <section className="section-bottm3">
   <p>//Square root</p>
<p>console.log(Math.sqrt(100))     // 10</p>

<p>console.log(Math.sqrt(2))       // 1.4142135623730951</p>

<p>// Power</p>
<p>console.log(Math.pow(3, 2))     // 9</p>

<p>console.log(Math.E)             // 2.718</p>
<p></p>
<p>// Logarithm</p>
<p>// Returns the natural logarithm with base E of x, Math.log(x)</p>
<p>console.log(Math.log(2))        // 0.6931471805599453</p>
<p>console.log(Math.log(10))       // 2.302585092994046</p>

<p>// Returns the natural logarithm of 2 and 10 respectively</p>
<p>console.log(Math.LN2)           // 0.6931471805599453</p>
<p>console.log(Math.LN10)          // 2.302585092994046</p>

// Trigonometry<p></p>
<p>Math.sin(0)</p>
<p>Math.sin(60)</p>
<p>const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2</p>
<p>let mass = 72         // mass in Kilogram</p>
<p>const PI = 3.14       // pi a geometrical constant</p>
<p>console.log(Math.floor(PI))                // 3 rounding down</p>

   </section>
   <section className="section-bottom2" >
   <p>Math.cos(0)</p>
<p>Math.cos(60)</p>


<p>#### Random Number Generator</p>

<p>The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999...</p>

<p>```js</p>
<p>let randomNum = Math.random() // generates 0 to 0.999...</p>


<p>Now, let us see how we can use random() method to generate a random number between 0 and 10:</p>
<p></p>
js<p></p>
<p>let randomNum = Math.random()         // generates 0 to 0.999</p>
<p>let numBtnZeroAndTen = randomNum * 11</p>
<p>console.log(randNum)</p>

<p>// Let us  create random number between 0 to 10</p>

<p>const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10</p>
<p>console.log(num)</p>

<p>//Absolute value</p>
<p>console.log(Math.abs(-10))      // 10</p>
<p>Let's see some examples of Numbers.</p>

<p>### Declaring Number Data Types</p>


<p>let age = 35</p>

   </section>
   <section className="section-bottom1">
   <p>console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99</p>

<p>let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)</p>
<p>console.log(randomNumRoundToFloor)    // this gives between 0 and 10</p>


<p>## Strings</p>
<p></p><p></p>
<p>Strings are texts, which are under **_single_**  , **_double_**, **_back-tick_** quote. To declare a string, we need a variable name,</p>
 <p>assignment operator, a value under a single quote, double quote, or backtick quote.</p>
<p>Let's see some examples of strings:</p>


<p>let space = ' '           // an empty space string</p>
<p>let firstName = 'Asabeneh'</p>
<p>let lastName = 'Yetayeh'</p>
<p>let country = 'Finland'</p>
<p>let city = 'Helsinki'</p>
<p>let language = 'JavaScript'</p>
<p>let job = 'teacher'</p>
<p>let quote = "The saying,'Seeing is Believing' is not correct in 2020."</p>
<p>let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`</p>


<p>### String Concatenation</p>

<p>Connecting two or more strings together is called concatenation.</p>
<p>Using the strings declared in the previous String section:</p>


<p>let fullName = firstName + space + lastName; // concatenation, merging two string together.</p>
<p>console.log(Math.round(9.81))              // 10</p>
   </section>
   {/* <section className="section-bottom4">


   </section> */}
</div>
  </div>
 <div className="exercise">
    <p className="p1">exercise below is to help you master what you just learn</p>
    <section className="exercise-secton">
    <p className="p2">complete the declaration of the variable below such that it cannot be re-assign </p>
<input type="text"  value={constVariable} onChange={(e) => setConstVarialble(e.target.value)} /> 
<span> car</span> = <span>Benz</span> <button onClick={handleConst} >submit</button>
</section>
 </div>
 <div className="exercise2">

    <p>complete the declaration of the variable below such that it can be re-assign </p>
    <section className="section-exercise">
<input type="text"  value={letVariable} onChange={(e) => setLetVariable(e.target.value)} /> 
<span> car</span> = <span>Benz</span> <button onClick={handlelet } >submit</button>
</section>
 </div>
    </div>);
}
 
export default Datatype;