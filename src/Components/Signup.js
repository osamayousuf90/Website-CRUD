import React from 'react'
import { useState } from 'react';
import { auth } from '../config';
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from 'react-router-dom';

 


const Signup = () => {
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
  
     
    const navigate = useNavigate();
     
   const handleSubmit = async (event) => {
      try{
      const user =  await createUserWithEmailAndPassword(auth  ,email , password);
         alert( `Welcome ${email} `)  
       navigate("/");
      }catch(error) {
        console.log(error.message);
        alert(error.message);
      }
   } 
   
 

  return (
    <>
    <h1 className='text-center'>Please Singup</h1>
     
     <div className='container'>
       <div className='row'>
         <div className='col-12 col-lg-6 mx-auto'>

    <form onSubmit={(event) => handleSubmit(event)}>
  <div className="mb-3 mt-3">
    <input type="email" className="form-control"  onChange={(event) => setEmail(event.target.value)}  id="email" placeholder="Enter email" value={email} name="email"/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)} id="pwd" placeholder="Enter password" value={password}  name="pswd"/>
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
 <button type="button" className="btn btn-primary" onClick={(event)=> handleSubmit(event)} data-bs-toggle="modal" data-bs-target="#myModal"> Sign Up </button>
  
</form>
</div>
</div>
</div>
      </>
  )
}

export default Signup