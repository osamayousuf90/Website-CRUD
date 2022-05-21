import React, { useEffect, useState } from "react";
import { db } from "../config";
import { collection, getDocs , addDoc , setDoc , doc , updateDoc , deleteDoc} from "firebase/firestore";

const Todo = ({ user }) => {
   useEffect(() => {
     getMovies()
   }, [])
   
   


  //How to Edit data in database firestore
  const [ id , setId ] = useState("");

  const editSubmited = (event) => {
    event.preventDefault();
    if(name === "" || id === ""){
      return false;
    }else{
      alert("Updated Succesfully");
      getMovies();
     const docRef = doc(db , "movies" , id);
     updateDoc(docRef , {name}).then((response) => {
       console.log(response);
     }).catch((error) => {
       console.log(error.message);
     })
    // setDoc(docRef , {age : 26}).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error.message);
    // })
  }
}
   //Finished Edit section to database here







  //How to add data into database firestore
  const [ name , setName ] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    if(name === ""){
      return false;
    }else{
      getMovies();
  
    addDoc(collection(db, "movies") , {name}).then((response) => {
      console.log(response.name);
    }).catch((error) => {
      console.log(error.message);
    })
      alert("Added Succesfully")
    }
  }
   //Finished add data to database firestore here


    





  //How to read the data from firestore database
  const [movies, setMovies] = useState([]);


  const getMovies = () => {
    const moviesCollectionRef = collection(db, "movies");
    getDocs(moviesCollectionRef).then((response) => {
         console.log(response.docs);
        const movs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMovies(movs); 
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
//Finished Read Data Topic here





//How to delete the data from firestore Database
const deleteList = (id) => {
  const docRef = doc(db , 'movies' , id);
  getMovies();
  deleteDoc(docRef).then((response) => alert("Document Deleted Succesfully")
  .catch((error) => { console.log(error.message) }))
}
  




  return (
    <>

     {/* Add Into Database Seciton */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mx-auto">
            <div className="mb-3 mt-5">
              <h1 className="text-center mt-4">CRUD Operation...</h1>
               <p>Create</p>
              <input
                type="text"
                className="form-control mt-3"
                id="email"
                placeholder="Add List"
                name="todo"
                value={name}
                onChange={(event) => setName(event.target.value)}
              /> 

              <button
                type="button"
                className="btn btn-primary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={(event) => handleSubmit(event)}
              >
                Add Into Database
              </button>
              <br /> <br /> <br />


              {/* Read Data/ Get Data Section */}
    
              <p>Read</p>
       
              {movies.map((movie) => {
                return (
                  <ul>
                    <li key={movie.id}>Name : {movie.data.name}</li>
                    <li>Id : {movie.id} <button className="btn btn-primary" onClick={() => deleteList(movie.id)}>Delete</button></li>
                  </ul>
                );
              })}
              {/* <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => getMovies()}
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >

                Get Database List
              </button> */}
            </div>
          </div>
        </div>
      </div>
 
 <br /> 
  
   {/* Edit Section */}
       
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
              <p>Update</p>
            <input
                type="text"
                className="form-control mt-3"
                id="email"
                placeholder="Edit Name"
                name="todo"
                value={name}
                onChange={(event) => setName(event.target.value)}
              /> 

            <input
                type="text"
                className="form-control mt-3"
                id="email"
                placeholder="Put Id"
                name="todo"
                value={id}
                onChange={(event) => setId(event.target.value)}
              /> 

                   <button
                type="button"
                className="btn btn-primary mt-2"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                onClick={(event) => editSubmited(event)}
              >
                Edit List
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Todo;
