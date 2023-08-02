import React from 'react'
import "./AskQuestion.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import currentUserReducer from "../../reducers/currentUser.js"
import { askQuestion } from '../../actions/question';
const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const dispatch = useDispatch();
  const User = useSelector((state) => (state.currentUserReducer));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ questionTitle, questionBody, questionTags });
    console.log(User.result.name);
    dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name }, navigate));

  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setQuestionBody(questionBody + "\n");
    }
  }

  return (
    <div className='ask-ques'>
      <h1 className='ask-ques-page-heading'>Ask a Public Question</h1>
      <div className="ask-ques-container-1">

        <h1>{questionBody}</h1>

        <form className="ask-ques-form" onSubmit={handleSubmit}>
          <div className="ask-ques-container-2">


            <label htmlFor="ask-ques-title" className='ask-ques-container-3'>
              <h4>Title</h4>
              <p>Be specific and imagine you’re asking a question to another person</p>
              <input type="text" id="ask-ques-title" name="ask-ques-title"
                value={questionTitle} onChange={(e) => { setQuestionTitle(e.target.value) }} />
            </label>



            <label htmlFor="ask-ques-body" className='ask-ques-container-3'>
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea name="ask-ques-body" id="ask-ques-body" cols="30" rows="10"
                value={questionBody} onChange={(e) => { setQuestionBody(e.target.value) }}
                onKeyPress={handleEnter}
              ></textarea>
            </label>



            <label htmlFor="ask-ques-tags" className='ask-ques-container-3'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>


          </div>
          <input type="submit" value="Review your question" className="review-btn" />
        </form>
      </div>


    </div>
  )
}

export default AskQuestion
