import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../Components/Avatar/Avatar'
import "./QuestionsDetails.css";
const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans">
            <p>{ans.answerBody}</p>
            <div className="question-action-user">
              <div >
                <button className=" action-btn" type="button" >Share</button>
                <button type="button" className=" action-btn" >Delete</button>
              </div>
              <div>
                <p>asked {question.askOn}</p>
                <Link to={'/User/${ans.userId}'} className='user-link' style={{ color: '#0086d8' ,width:"40px" }}>
                  <Avatar
                    backgroundColor="orange"
                    px="8px"
                    py="5px"
                    borderRadius="4px"
                  >
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
   <div>{ans.userAnswered}</div>
                </Link>
             
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default DisplayAnswer
