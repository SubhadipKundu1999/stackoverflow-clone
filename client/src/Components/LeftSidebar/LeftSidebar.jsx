import React from 'react'
import { NavLink } from 'react-router-dom'

import "./LeftSidebar.css"
import Globe from "../../assets/Globe.svg"
import { useSelector } from 'react-redux'
const LeftSidebar = () => {

  const State = useSelector((state) => state.slideInReducer);
  return (
    <div className='left-sidebar '
      style={{ left: State.slide ? "0px" : " -200px" }}>
      <nav className='side-nav'>
        <NavLink to="/" className="side-nav-links" activeclassname="active" >  <p>Home</p>    </NavLink>

        <div className="side-nav-div" >

          <div> <p style={{ marginTop: "15px", marginLeft: "10px" }}>Public</p> </div>

          <NavLink to="/Questions" className="side-nav-links" activeclassname="active" style={{ marginLeft: "10px" }}>
            <img src={Globe} alt="globe" />
            <p style={{ paddingLeft: "10px" }} > Questions</p>
          </NavLink>

          <NavLink to="/tags" className="side-nav-links " activeclassname="active">
            <p style={{ paddingLeft: "35px" }} >Tags</p>
          </NavLink>

          <NavLink to="/users" className="side-nav-links" activeclassname="active">
            <p style={{ paddingLeft: "35px" }} >Users</p>
          </NavLink>
        </div>


      </nav>

    </div>
  )
}

export default LeftSidebar
