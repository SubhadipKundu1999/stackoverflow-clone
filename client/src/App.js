import {BrowserRouter as Router} from "react-router-dom"
import React, { useEffect } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from "./AllRoutes"
import { useDispatch } from "react-redux"
import {getAllUsers} from "./actions/users"
function App() {
  const dispatch= useDispatch();
  useEffect(()=>{
   dispatch(getAllUsers());     
  },[dispatch])


  
  return (
    <GoogleOAuthProvider clientId="162092338470-cdrk75hhboldbg0a9h95uf0efsi295qr.apps.googleusercontent.com">
<Router>
<Navbar/>
<AllRoutes/>
</Router>
  </GoogleOAuthProvider>

)
}

export default App
