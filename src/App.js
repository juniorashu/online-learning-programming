import Navbar from './navbar/navbar';
import './App.css';
import Sign from './signin'
import CourseEnv from './body';
import '../src/navbar/navbar.css'
import Maincourse from './tutorial/couser';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Datatype from './tutorial/datatype';
import Conditional from './tutorial/conditional';

import ImportApp from './importApp'

function Statelessfuction () {
  return (  <div>
      <BrowserRouter>
<Routes>
  <Route path='/' element={<CourseEnv />} />
  <Route path='/datatype' element={<Datatype />} />
  <Route path='/conditional' element={<Conditional />} />
  <Route path='/signin' element={<Sign />} />
</Routes>
</BrowserRouter>
  </div> );
}
 
function App() {
  return (
    <div className="App">
{/*  authentication and database collection */}
{/* <Sign />  */}
{/* main function for display */}
   <Statelessfuction /> 

    </div>
    
  );
}


export default App;
