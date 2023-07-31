import React from 'react'
import '../App.css'
import './Question.css'
const Question = ({ question }) => {
  return (
    <div class="question-row">
      <div className="question-col col-1">
        <p>{question.votes}</p>
        <p>votes</p>
      </div>
      <div className="question-col col-2">
        <p>{question.noOfAnswer}</p>
        <p>answer</p>
      </div>
      <div className="question-col col-3">

        <p>{question.questionTitle}</p>

        <div className="inner-row">
          <div className="widget-tags-div-1">
            {question.questionTags.map((tag) => (
              <p className="tag-p" key={tag}>{tag}</p>
            ))}
          </div>
          <p className='question-time-user'>{question.askOn} {question.userPosted}</p>
        </div>

      </div>


    </div>
  )
}

export default Question
