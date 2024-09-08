import './App.css';
import Home from '../src/Pages/Home'
// import About from '../src/Pages/About'
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import NavBar from './Components/Navbar';
import Mainpage from './Pages/Mainpage';

function App() {
  return (
   <>
   <Router>
   <NavBar/>
    <Routes>
 
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/" element={<Mainpage/>}/>
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
