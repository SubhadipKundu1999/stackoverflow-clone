import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import QuestionList from '../QuestionList'
import './HomeMainbar.css'
import { useSelector } from 'react-redux'


const HomeMainbar = () => {

  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate()
  const location = useLocation()

  const checkAuth = () => {
    if (CurrentUser === null) {
      alert("login of signup to ask a question");
      navigate('/Auth');
    }
    else {
      navigate('/AskQuestion')
    }
  }

  return (

    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1 className="top-heading">Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to="/AskQuestion" className='ask-btn' onClick={checkAuth}>Ask Question</button>
      </div>
      <div>
        <QuestionList />
      </div>

    </div>
  )
}

export default HomeMainbar
