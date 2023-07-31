import React from 'react'
import "./LeftSidebar.css"
import { NavLink } from 'react-router-dom'
import Globe from "../../assets/Globe.svg"
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>

        <NavLink to="/" className="side-nav-links" activeclassname= "active" >
          <p>Home</p>
        </NavLink>

        <div className="side-nav-div" >

          <div><p style={{marginTop:"15px", marginLeft:"10px"}}>Public</p></div>

          <NavLink to="/Questions" className="side-nav-links" activeclassname= "active" style={{ marginLeft:"10px"}}>
            <img src={Globe} alt="globe" />
            <span style={{paddingLeft:"10px"}} > Questions</span>
          </NavLink>

          <NavLink to="/tags" className="side-nav-links " activeclassname= "active">
            <p style={{paddingLeft:"35px"}} >Tags</p>
          </NavLink>
          <NavLink to="/users" className="side-nav-links"  activeclassname="active">
            <p style={{paddingLeft:"35px"}} >Users</p>
          </NavLink>
        </div>


      </nav>

    </div>
  )
}

export default LeftSidebar
