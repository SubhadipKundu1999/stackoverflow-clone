import {BrowserRouter as Router} from "react-router-dom"
import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from "./AllRoutes"
function App() {
  return (
<Router>
<Navbar/>
<AllRoutes/>
</Router>
)
}

export default App
