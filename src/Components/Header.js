import React from 'react'
import { Link } from "react-router-dom"
import { auth } from '../config'
import { useNavigate } from 'react-router-dom'


const Header = ({user}) => {
  const navigate = useNavigate();
  return (
    <>
    <nav className="navbar">

 <div classNameName="logo">Fire-Log</div>

 <ul className="nav-links">

 <input type="checkbox" id="checkbox_toggle" />
 <label for="checkbox_toggle" className="hamburger">&#9776;</label>

 <div className="menu">
 {/* <li><Link to="/">Home</Link></li> */}
  
   
      { user ? 
 <button type="button" className="btn btn-danger"  onClick={() => {auth.signOut(); navigate("/"); }}  data-bs-toggle="modal" data-bs-target="#myModal"> Logout </button>

     :
     <>
     <li><Link to="/Login">Login</Link></li>
     <li><Link to="/SignUp">Sign Up</Link></li>
     </>       
      }   




 
 
 </div>
 </ul>
 </nav>
    </>
  )
}




export default Header;