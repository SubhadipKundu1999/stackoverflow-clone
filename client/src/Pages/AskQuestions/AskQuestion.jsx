import React from 'react'
import "./AskQuestion.css"
import { useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import JoditEditor from 'jodit-react';
import { useNavigate } from "react-router-dom"
import { askQuestion } from '../../actions/question';
import doubt from "../../assets/doubt.png"


const AskQuestion = () => {
  const editor = useRef(null);
  const [questionBody, setQuestionBody] = useState('');
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const dispatch = useDispatch();
  const User = useSelector((state) => (state.currentUserReducer));
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();


    dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User.result._id }, navigate));

  }



  return (
    <div className='ask-ques'>
      <div className="page-up">
        <h1 className='ask-ques-page-heading'>Ask a Public Question</h1>
        <div className="heading-img">
          <img className="doubt-image" src={doubt} alt="" />
        </div>
      </div>
      <div className="ask-ques-container-1">

      {/* instruction */}
        <div className="good-question-details">
          <h2>Writing a good question</h2>
          <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
          <p>Looking to ask a non-programming question? See the topics here to find a relevant site.</p>
          <h4>Steps</h4>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>Add “tags” which help surface your question to members of the community</li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>

{/* ask question form */}
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
             
              {/* jodit Editor */}
              <JoditEditor
                ref={editor}
                value={questionBody}
                id="ask-ques-body"
                tabIndex={1} // tabIndex of textarea
                onChange={(e) => { setQuestionBody(e) }} />

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
