import { FaLinkedinIn } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

export default function Mail() {
  return (
    <>
      <h1 className="text-white flex justify-center text-4xl font-bold font-serif mt-14 mb-14">Let's get Connected..</h1>
      <NavLink to="" className="text-white flex justify-center text-4xl hover:text-5xl"><FaLinkedinIn className="mr-14"/> <FaTwitter/></NavLink>
    </>

  )
}
