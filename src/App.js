import Navbar from './navbar/navbar';
import './App.css';
import CourseEnv from './body';
import '../src/navbar/navbar.css'
import Maincourse from './tutorial/couser';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Datatype from './tutorial/datatype';
import Conditional from './tutorial/conditional';
// import Logic from './login';
import ImportApp from './importApp'
function Statelessfuction () {
  return (  <div>
      <BrowserRouter>
<Routes>
  <Route path='/' element={<CourseEnv />} />
  <Route path='/datatype' element={<Datatype />} />
  <Route path='/conditional' element={<Conditional />} />
  <Route path='/login' element={<ImportApp />} />
</Routes>
</BrowserRouter>
  </div> );
}
 
function App() {
  return (
    <div className="App">
  {/* < Navbar />
  <CourseEnv /> */}
  {/* <Maincourse /> */}
  {/*<Logic /> */}
  {/* datatype an landing page */}

   <Statelessfuction /> 
  
    </div>
    
  );
}


export default App;
