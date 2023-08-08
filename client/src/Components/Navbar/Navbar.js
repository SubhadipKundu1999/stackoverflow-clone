import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from '../Avatar/Avatar'
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css"
import currentUserReducer from '../../reducers/currentUser'
import { useEffect } from "react";
import setCurrentUser from '../../actions/setCurrentUser'
import decode from 'jwt-decode';
const Navbar = () => {
 const Navigate=  useNavigate()
 const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch()
// logout
const handleLogOut=()=>{
  dispatch({type:"LOGOUT"});
  Navigate('/');
  dispatch(setCurrentUser(null));
 
}

  //user details



  useEffect(() => {
    const token = User?.token;
    if (token){
      const decodeToken = decode(token);
      console.log(decodeToken.exp);
      if(decodeToken.exp*1000< new Date().getTime()){
        handleLogOut();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [dispatch])


  console.log(User)
  let first_letter = "m";

  if (User) {
    const user_name = User.result.name;
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

        {User == null ? <Link to="/Auth" className="nav-item nav-links"> Log In </Link> :
          <>  <Link to="/" className='' style={{ textDecoration: "none", color: "white", backgroundColor: "#009dff", width: '40px', height: "40px", borderRadius: "50%", textAlign: "center", fontSize: "28px", padding: "auto" }} >{first_letter}</Link>
            <button className='nav-links nav-item' onClick={handleLogOut}> Log Out</button>
          </>
        }

      </div>
    </nav>
  )
}

export default Navbar
