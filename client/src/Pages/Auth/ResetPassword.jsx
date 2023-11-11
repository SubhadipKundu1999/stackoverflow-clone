import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import icon from "../../assets/icon.png"
import { resetPasswordAction } from '../../actions/auth';


function ResetPassword() {
  const params = useParams();


    // state for form element
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
   
    const User = useSelector((state) => (state.currentUserReducer));
    const navigate = useNavigate();


    useEffect(()=>{
      if(User){
        navigate("/auth")
      }
      })

    // handle form submit
    const handleSubmit = (e) => {
      e.preventDefault();
      resetPasswordAction(params.token, password, setError);
      navigate("/")
    };
  
  return (
    <section className="auth-section">
    <div className="auth-container">
     
       <img src={icon} alt='stack overflow' className='logo-icon'></img>

      <form onSubmit={handleSubmit} >
      <p>Set new password for your account </p>
        <label htmlFor=""></label>
        <label htmlFor="password">
          <h4>New Password</h4>
          <input type="password" name="new password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
         <p style={{ color: "#666767", fontSize: "13px", marginTop: "-0px" }}>Password must contain atleast eight <br /> character including 1 letter and 1<br /> number</p>

        <button type="submit" className='auth-btn'>Reset Password</button>
      
      </form>
      <p>


      </p>
      {error && <p className='error-message'>{error}</p>}
    </div>
  </section>
  )
}

export default ResetPassword
