import React from "react";
import './navbar.css'

const Navbar = () => {
    return ( <nav className="navbar">
    
       <CombineAllComponent />
       <h2>ONUPS Academy</h2>
       </nav>
   );
}
const About = () => {
    return ( 
        <h3>About</h3>
    );
 }
  
 const Contact = () => {
    return ( 
        <h3>Contact us</h3>
    );
 }
  
 const Get_start = () => {
    return ( 
        <h3>Get start</h3>
    );
 }
  const CombineAllComponent =() =>{
    return ( <div className="combineallcomponent">
      
<About />
<Contact />
<Get_start />

 </div>   );
  }
  

export default Navbar;