import './App.css';
import React from 'react';
import Header from './Components/Header';
import { BrowserRouter ,  } from "react-router-dom";
import { Route , Routes} from "react-router-dom"
import Todo from './Components/Todo';
import Login from './Components/Login'; 
import Signup from './Components/Signup';
import { useState , useEffect} from 'react';
import { auth } from './config';

function App() {
   const [user , setUser] = useState(true)  


   useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if(user){
          setUser(  user )
        }else{
          setUser( null )
        }
      })
   } ,[])


  return (
      <>
      <BrowserRouter>
       <Header user={user}/>
       <Routes>

         <Route path='/' element={ <Login user={user}/> }/>

          <Route path='/Todo' element={<Todo/>} />

          <Route path='/Login' element={<Login/>} /> 


          <Route path='/SignUp' element={<Signup/>} />

       </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
