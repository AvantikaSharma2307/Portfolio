import './App.css';
// import About from '../src/Pages/About'
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import NavBar from './Components/Navbar';
import Mainpage from './Pages/Mainpage';
import Resume from './Pages/Resume';
import * as motion from "motion/react-client"
import About from './Pages/About';
import Project from './Pages/Project';
import Services from './Pages/Services';
import Mail from './Pages/Mail';
import Experience from './Pages/Experience';

function App() {
  return (
   <>
   <Router>
   <NavBar/>
    <Routes>
 
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Mail/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
