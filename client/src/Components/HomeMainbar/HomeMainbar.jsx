import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import QuestionList from '../QuestionList'
import './HomeMainbar.css'
import { useSelector } from 'react-redux'


const HomeMainbar = () => {
  const user = 1;
  const navigate=useNavigate()
  let questionList = useSelector((state)=>state.questionsReducer);
  questionList= questionList.data;
console.log(questionList);

 
  const checkAuth=()=>{
    if(user===null){
      alert("login of signup to ask a question");
      navigate('/Auth');
    }
    else{
      navigate('/AskQuestion')
    }
  }
  const location = useLocation()
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to="/AskQuestion" className='ask-btn' onClick={checkAuth}>Ask Question</button>
      </div>
      <div>
        {
          questionList == null ?
            <h1>Loading...</h1> :
            <>
              <p> {questionList.length} questions</p>
              <QuestionList questionlist={questionList} />
            </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar
