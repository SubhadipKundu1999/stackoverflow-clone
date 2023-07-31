import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from '../Avatar/Avatar'
import {useSelector,useDispatch} from "react-redux";
import "./Navbar.css"
import currentUserReducer from '../../reducers/currentUser'
import {useEffect} from "react";
import setCurrentUser from '../../actions/setCurrentUser'

const Navbar = () => {


  //user details

const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    
  },[dispatch])

  const user = useSelector((state)=>state.currentUserReducer);
  console.log(user)
   let first_letter="m"
  if(user){
   const user_name= user.result.name;
    first_letter = user_name.charAt(0);
  }
 

  return (
    <nav className='top-nav'>
      <div className='navbar'>

        <Link to="/" className='nav-item nav-btn nav-logo'>
          <img src={logo} alt="LogO" />
        </Link>

        <Link to="/" className='nav-item nav-btn'>About</Link>

        <Link to="/" className='nav-item nav-btn'> Products</Link>

        <Link to="/" className='nav-item nav-btn'>For Teams</Link>

        <form action="">

          <input type="text" placeholder='search' />
          <img src={search} alt="logo" width="18" className='search-icon' />

        </form>

        {user == null ? <Link to="/Auth" className="nav-item nav-links"> Log In </Link> :  
        <>  <Link to="/" className='' style={{ textDecoration: "none" ,color:"white", backgroundColor : "#009dff", width:'40px', height:"40px" ,borderRadius:"50%", textAlign:"center",fontSize:"28px", padding:"auto"}} >{first_letter}</Link>
            <button className='nav-links nav-item'> Log Out</button>
        </>
          }

      </div>
    </nav>
  )
}

export default Navbar
