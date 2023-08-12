import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode';
import { useSelector, useDispatch } from "react-redux";

import "./Navbar.css"
import logo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from '../Avatar/Avatar'
import setCurrentUser from '../../actions/setCurrentUser'
import bars from "../../assets/bars-solid.svg"


const Navbar = () => {

  const Navigate = useNavigate()
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch()

// logout
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    Navigate('/');
    dispatch(setCurrentUser(null));
  }

// checking for authentication if token expired then call logout function
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogOut();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [dispatch])



  let first_letter = "m";
  if (User) {
    const user_name = User.result.name;
    first_letter = user_name.charAt(0);
  }


// handle leftbar slide in function
  const [slideIn, setSlideIn] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
      dispatch({ type: "CHANGE_STATE", payLoad: slideIn })
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
      dispatch({ type: "CHANGE_STATE", payLoad: slideIn })
    }

  };

  return (
    <nav className='top-nav'>
      <div className='navbar'>
        <button className="slide-in-icon" onClick={handleSlideIn}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <Link to="/" className='nav-item nav-btn nav-logo'>
          <img src={logo} alt="Logo" />
        </Link>
        <div className="nav-item-list">
          <Link to="/" className='nav-item nav-btn'>About</Link>
          <Link to="/" className='nav-item nav-btn'> Products</Link>
          <Link to="/" className='nav-item nav-btn'>For Teams</Link>
        </div>

        <form>
          <input type="text" placeholder='search' />
          <img src={search} alt="logo" width="18" className='search-icon' />
        </form>

        {User == null ? <Link to="/Auth" className="nav-item nav-links autht-btn"> Log In </Link> :
          <>
            <Avatar
              backgroundColor="#009dff"
              px="1px"
              py="1px"
              borderRadius="50%"
              color="white"
              width='30px'
              height='30px'
            >

              <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: "none", color: "#ffff" }}>
                {first_letter}
              </Link>
            </Avatar>
            <button className='nav-links nav-item ' onClick={handleLogOut}> Log Out</button>
          </>
        }

      </div>
    </nav>
  )
}

export default Navbar
