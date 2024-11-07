import './App.css';
// import About from '../src/Pages/About'
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import NavBar from './Components/Navbar';
import Mainpage from './Pages/Mainpage';
import Resume from './Pages/Resume';

function App() {
  return (
   <>
   <Router>
   <NavBar/>
    <Routes>
 
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<Mainpage/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
