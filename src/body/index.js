import Tutorial from "./object";
import '../navbar/navbar.css'
import { Routes,Route, Link} from 'react-router-dom'
import Datatype from "../tutorial/datatype";
import ImportApp from "../importApp";

const Tu = (props) => {
    const { img , title  ,location, link} = props
    return ( <div>
<div className="displayproduct">

<Link to={link} > <img className="img" src={img} alt={title} /></Link>
{/* <a href={location}>click here</a> */}
<p className="title">{title}</p>

</div>
    </div> );
}
const importtutorial=Tutorial.map((Tutorial) => {
    const {img ,title ,location, link} = Tutorial;
    return<Tu img={img} title={title}  location={location} link={link} />
})


const Firstfooter = () => {
    return ( <div><p className="firstFooter">
        <Routes>
            <Route path="/datatype" element={<Datatype />} />
            <Route path="/login" element={<ImportApp />} />
        </Routes>
        feedback  from the  learner are welcome  so feel free to
to click on the link below an give us feedback about your 
impression
                                     <a href="../tutorial/course.js" >  link to click</a> <br></br>
ONUPS means online upskilling programming skills
    </p></div> );
}
 const Firstfooterwithpicture = () => {
    return (
        <div className="divFOOTER">
              
       <section className="firstfooterwithimg" id="section">
       <img className="firstimgoffooter" src="../image/linkedin.png"/>
        <p>
        you can reach me on my 
linkedin account  my account link

        </p>
       </section>
                   
       <section className="secondfooterwithimg" id="section">
       <img className="secondimgoffooter" src="../image/github.jpeg"/>
        <p >
        you can reach me on my 
github account an feel free to explore my project 
account link


        </p>
       </section>
       <section className="thirdfooterwithimg" id="section">
       <img className="thirdimgoffooter" src="../image/twitter.png"/>
        <p>
        feel free to reach me on twitter an follloe 


        </p>
       </section>
        </div>
    );
 }

const CourseEnv = () => {
    return ( <div>
      <ul> <li className="li1"><Link to='/login' >login</Link></li> </ul>
        <div  className="outputTutorial">
{importtutorial}

    </div> 
    <Firstfooter />
    <Firstfooterwithpicture />
    </div>);
}



export default CourseEnv;