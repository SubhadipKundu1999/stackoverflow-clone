import {BrowserRouter as Router} from "react-router-dom"
import React, { useEffect } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from "./AllRoutes"
import { useDispatch } from "react-redux"
import { getQuestions } from "./actions/question"
import {getAllUsers} from "./actions/users"
function App() {
  const dispatch= useDispatch();
  useEffect(()=>{
   dispatch(getAllUsers());     
  },[dispatch])


  
  return (
<Router>
<Navbar/>
<AllRoutes/>
</Router>
)
}

export default App
