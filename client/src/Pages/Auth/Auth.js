import React, { useEffect, useState } from 'react'
import icon from "../../assets/icon.png"
import AboutAuth from './AboutAuth';
import "./Auth.css"
import { signup, login } from "../../actions/auth"
import { useDispatch, useSelector } from 'react-redux';

import { Link, NavLink, useNavigate } from 'react-router-dom'


const Auth = () => {

  const [isSignUp, setSignUp] = useState(false);
  // state for form element
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const User = useSelector((state) => (state.currentUserReducer));
    
  useEffect(()=>{
    if(User){
      navigate("/")
    }
    })

  // handle toggle betwwn signup and login
  const handleSwitchBtn = () => {
    setSignUp(!isSignUp);
    setName("");
    setEmail("");
    setPassword("");
  }

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignUp) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, setError, navigate));
    } else {
      dispatch(login({ email, password }, setError, navigate));
    }
  };



  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container">

        {!isSignUp && <img src={icon} alt='stack overflow' className='logo-icon'></img>}

        <form onSubmit={handleSubmit} >

          {isSignUp ?
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label> : ""}

          <label htmlFor=""></label>
          <label htmlFor="Email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h4>Password</h4>
              {!isSignUp && <Link to="/Auth/recovery-account" style={{ color: "#007ac6", fontSize: "13px" }}>Forgot Password?</Link>}
            </div>
            <input type="password" name="password" id="password" email={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          {isSignUp && <p style={{ color: "#666767", fontSize: "13px", marginTop: "-0px" }}>Password must contain atleast eight <br /> character including 1 letter and 1<br /> number</p>}

          {isSignUp && <label htmlFor="check">
            <input type="checkbox" name="check" id="check" />

            <span style={{ color: "#000", fontSize: "13px", fontWeight: "500", marginLeft: "10px" }}>Opt-in to receive occasional, <br />product updates, user research invitations,<br /> company announcements, and digests</span>
          </label>
          }
          <button type="submit" className='auth-btn'>{isSignUp ? "Sign UP" : "Log In"}</button>
          {isSignUp && <p style={{ color: "#666767", fontSize: "13px", marginTop: "-5px" }}>By clicking signUp you are agree to our
            <NavLink to="#" style={{ color: "#007ac6" }}> terms of service</NavLink>,
            <NavLink to="#" style={{ color: "#007ac6" }}> privacy policy</NavLink>  and
            <NavLink to="#" style={{ color: "#007ac6" }}>cookie policy</NavLink> </p>}
        </form>
        <p>
          {isSignUp ? "already have an account" : "Don't have any account"}

          <button type="button" className='handle-switch-btn' onClick={handleSwitchBtn}>{isSignUp ? "log In" : "sign Up"}</button>
        </p>
        {error && <p className='error-message'>{error}</p>}
      </div>
    </section>
  )
}

export default Auth
