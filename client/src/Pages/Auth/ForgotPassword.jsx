import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

import icon from "../../assets/icon.png"
import { forgotPasswordAction } from '../../actions/auth';



function ForgotPassword() {

  // state for form element
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const [susccess, setSuccess] = useState(false)
  const navigate = useNavigate();
  const User = useSelector((state) => (state.currentUserReducer));

  useEffect(() => {
    if (User) {
      navigate("/auth")
    }
  })

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPasswordAction(email, setError, setSuccess);
  };

  return (
    <section className="auth-section">
      {
        !susccess?
          <div className="auth-container">
            <img src={icon} alt='stack overflow' className='logo-icon'></img>
            <form onSubmit={handleSubmit} >
              <p>Forgot your account’s password? Enter your email address and we’ll send you a recovery link.</p>
              <label htmlFor=""></label>
              <label htmlFor="Email">
                <h4>Email</h4>
                <input type="email"
                 name="email" 
                 id="email" 
                 value={email}
                  onChange={(e) =>{
                    setError(false)
                    return setEmail(e.target.value )
                  }
                  } />
              </label>
              <button type="submit" className='auth-btn'>Send recovery email</button>

            </form>
            {error && <p className='error-message'>{error}</p>}
          </div>

          :
          <div className='message-box'>
            <h4>Account recovery email sent to {email}</h4>
            <p>If you don’t see this email in your inbox within 15 minutes, look for it in your junk mail folder. If you find it there, please mark it as “Not Junk”.</p>
          </div>
      }
    
    </section>
  )
}

export default ForgotPassword
