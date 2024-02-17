import React from "react";
import { useState } from "react";
import { Route,Router,Link } from "react-router-dom";
import Indexbody from '../body/index'
import Datatype from "./datatype";

const Conditional = () => {
/// usestate  for function
    const [ifanswer , setIfanswer] = useState()
    const [conelse , setConelse] = useState()
    const [Concase ,  setConcase] = useState()

// component for the submit
const handleIf = () => {
   
        if (ifanswer === 'else') {
           alert('correct answer you can move to the next answer') 
        } else {
            alert('wrong answer try againt')
        }

}
 const handleElse = () => {
  if (conelse === 'if') {
    alert('correct answer you can continue')
  } else {
    alert('wrong answer try against')
  }
 }
 const handlecase = () => {
    if (conelse === 'switch') {
      alert('correct answer you can continue')
    } else {
      alert('wrong answer try against')
    }
   }
// Router code
<Router>
<Route path="/" element={<Indexbody />} />
<Route path="/datatype" element={<Datatype />} />
</Router>


    return (   
        <> 
    <div className="conditional-main-div">
        <aside className="conditional-aside">
            <h2>OUTLINE</h2>
            <h3>CONDITIONAL</h3>
            <h3>IF STATEMENT</h3>
            <h3>IF ELSE STATEMENT</h3>
            <h3>IF ELSE IF ELSE STATEMENT</h3>
            <h3>SWITCH STATEMENT</h3>
            <h3>TERNARY OPERATOR</h3>
            <h3>EXERCISE1</h3>
            <h3>EXERCISE2</h3>
            <h3>EXERCISE3</h3>
            <h3></h3>
        </aside>
        <div className="div-aside1">
<h1 className="h1-condition" >CONDITIONAL STATEMENT</h1>
<h3> DEFINITION OF CONDITIONAL STATEMENT</h3>
<section className="condition-seciot">
    <p>Conditional statements are used for make decisions based on different conditions.
By default , statements in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the sequential flow of execution can be altered in two ways:
</p> <p>
- Conditional execution: a block of one or more statements will be executed if a certain expression is true<br></br>
- Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain expression is true. In this section, we will cover _if_, _else_ , _else if_ statements. The comparison and logical operators we learned in the previous sections will be useful in here.
</p> <p>
Conditions can be implementing using the following ways: <br/>

- if<br/>
- if else<br/>
- if else if else<br/>
- switch<br/>
- ternary operator<br/>

### If<br/>


</p>
</section>


             </div>
             <aside  className="condtional-aside2"></aside>
    </div> 
    <div className="conditional-section2">
<section>
    <p>
        In JavaScript and other programming languages the key word _if_ is to used check if a condition is
 true and to execute the block code. To create an if condition, we need _if_ keyword, condition inside a 
 parenthesis and block of code inside a curly bracket({}).<br/>
if (condition) {
//this part of code runs for truthy condition<br/>
<br/>
}
```


**Example:**

```js
let num = 3
if (num = 0) {

(` is a positive number`)

} 

    </p>
    <p>### If Else if Else

On our daily life, we make decisions on daily basis. We make decisions not by checking </p>
</section>
<section className="  ">
<p>

one or two conditions instead we make decisions based on multiple conditions. As similar
 to our daily life, programming is also full of conditions. We use *else if* when we have
  multiple conditions.


</p> <p> 
```js
// syntax
if (condition) {
// code
} else if (condition) {
// code
} else {
// code

}
```

**Example:**

```js

let a = 0
if () 
  (` is a positive number`)<br/>
else if () <br/>
 answer  (` is a negative number`)<br/>
 else if () <br/>
 answer (` is zero`)<br/>
 else <br/>
 answer (` is not a number`)<br/>
</p>
</section>
<section>
    <p>
    ### Switch

Switch is an alternative for **if else if else else**.
The switch statement starts with a *switch* keyword followed by 
a parenthesis and code block. Inside the code block we will have
 different cases. Case block runs if the value in the switch statement
  parenthesis matches with the case value. The break statement is to terminate
   execution so the code execution does not go down after the condition is satisfied.
   The default block runs if all the cases don't satisfy the condition.


    </p>
</section>
<section>
    <p>
  
    ```js
switch(caseValue)
case 1:<br/>
// code<br/>
break<br/>
case 2:<br/>
// code<br/>
break<br/>
case 3:<br/>
// code<br/>
break<br/>
default:<br/>
// code<br/>

```

```js
let weather = 'cloudy'<br/>
switch (weather)  <br/>
case  rainyeg<br/>
console.log('You need a rain coat.')<br/>
break<br/>
case 'cloudy':<br/>

    </p>
</section>
{/* <section></section>
<section></section> */}
</div>
    <div className="last-div" >
        <div className="inside-last-div" > 
        <p>
        console.log('It might be cold, you need a jacket.')<br/>
break<br/>
case 'sunny':<br/>
console.log('Go out freely.')<br/>
break<br/>
default:<br/>
console.log(' No need for rain coat.')<br/>
        </p>
        <p>
        ### Ternary Operators

Another way to write conditionals is using ternary operators. We have covered this in other sections, but we should also mention it here.

```js
let isRaining = true
isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')
        </p>
        </div>
        <div className="inside-last-div" > 
        <section className="question-on-condtion" id="question1">
            <h3>complete the following to exercise what you have learn</h3>
            let x =0 <br/>
            if ( x =0) <br></br>
         console.log('hello world')<br/>
         
        <input type="text"  value={ifanswer} onChange={(e) => setIfanswer(e.target.value)} />
        
        if ( x = -3)<br/>
                console.log('i am a SWE student')<br/>
                <button onClick={handleIf} >submit</button>
        </section>
        <section className="question-on-condtion" id="question1">
        <h3>complete the following to exercise what you have learn</h3>
            let x = 23<br/>
        <input value={conelse} onChange={(e) => setConelse(e.target.value)} /> (x = 0)<br/>
        console.log('it is zero')<br/>
        else <br/>
        console.log('it is another number)
        <br/>
                <button onClick={handleElse} >submit</button>

        </section>
        <section className="question-on-condtion" id="question1">
        <h3>complete the following to exercise what you have learn</h3>
        let weather = 'cloudy'<br/>
        <input value={Concase} onChange={(e) => setConcase(e.target.value)} />  (weather) <br/>

      
        case rainyeg<br/>
console.log('You need a rain coat.')<br/>
break<br/>
case 'cloudy':

                <button onClick={handlecase} >submit</button>
        </section>
       <button className="link"><Link to='/' >Homepage</Link></button> 
       <button className="link"><Link to='/datatype'>datatype</Link></button> 
        </div>
        {/* <div className="inside-last-div"></div>
        
        let weather = 'cloudy'
switch (weather)
case rainyeg
console.log('You need a rain coat.')
break
case 'cloudy':
        */}
    </div>
    </>);
}
 
export default Conditional;