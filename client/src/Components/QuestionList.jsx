import React from 'react'
import Question from './Question'
import "./Question.css"
const QuestionList = ({questionlist}) => {
  return (
    <div class="question-list">
     {questionlist.map((question)=>(
<Question key={question.id} question={question}/>
      ))}
    </div>
  )
}

export default QuestionList
