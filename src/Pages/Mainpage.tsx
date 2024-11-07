import Home from "./Home"
import About from "./About"
import Project from "./Project"
import Mail from "./Mail"
import Services from "./Services"
export default function Mainpage() {
  return (
    <>
    <Home/>
    <About/>
    <Project/>
    <Services/>
    <Mail/>
    <p className="text-center text-white mt-14">Made with ❤️ by Avantika Sharma</p>
    </>
  )
}
