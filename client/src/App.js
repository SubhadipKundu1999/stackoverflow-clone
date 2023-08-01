import {BrowserRouter as Router} from "react-router-dom"
import React, { useEffect } from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from "./AllRoutes"
import { useDispatch } from "react-redux"
import { getQuestions } from "./actions/getQuestions"
function App() {
  const dispatch= useDispatch();
  useEffect(()=>{
dispatch(getQuestions())
  },[dispatch])
  return (
<Router>
<Navbar/>
<AllRoutes/>
</Router>
)
}

export default App
