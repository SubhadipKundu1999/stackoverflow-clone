import React from 'react'
import '../App.css'
import './Question.css'
import { Link } from 'react-router-dom'
const Question = ({ question }) => {
  return (
    <div class="question-row">
      <div className="question-col col-1">
        <p>{question.upVotes.length - question.downVotes.length}</p>
        <p>votes</p>
      </div>
      <div className="question-col col-2">
        <p>{question.noOfAnswer}</p>
        <p>answer</p>
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
        <p>{question.questionTitle}</p>

        <div className="inner-row">
          <div className="widget-tags-div-1">
            {question.questionTags.map((tag) => (
              <p className="tag-p" key={tag}>{tag}</p>
            ))}
          </div>
          <p className='question-time-user'>asked  {question.askedOn} {question.userPosted}</p>
        </div>

      </div>


    </div>
  )
}

export default Question
