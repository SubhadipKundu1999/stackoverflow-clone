import React from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'
import '../App.css'
import './Question.css'
import { AiFillEye } from "react-icons/ai";

const Question = ({ question }) => {
  return (
    <>

    <div className="question-row" style={{ backgroundColor: (question.noOfAnswer === 0) && "#ffff" }} >
     <div className="answer-vote"> <div className="question-col col-1">
        <p> {question.upVotes.length - question.downVotes.length} </p>
        <p> votes </p>
      </div>
      <div className="question-col col-2">
        <p> {question.noOfAnswer} </p>
        <p> answer </p>
      </div>
      </div>
      <div className="question-col col-3">
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
            ? question.questionTitle.substring(
              0,
              window.innerWidth <= 400 ? 70 : 90
            ) + "..."
            : question.questionTitle}
        </Link>

        <div className="inner-row">
          <div className="widget-tags-div-1">
            {question.questionTags.map((tag, index) => (

              <p className="tag-p" key={tag}>
              {(index === 0) && <span  ><AiFillEye size={20} /> </span>}{tag}
              </p>

            ))}

          </div>
          <p className='question-time-user'>asked  {moment(question.askedOn).fromNow()} {question.userPosted}</p> 
        </div>

      </div>


    </div>


  </>
  )

}


export default Question
