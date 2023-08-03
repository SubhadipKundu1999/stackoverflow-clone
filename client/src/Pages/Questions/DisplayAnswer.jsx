import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../Components/Avatar/Avatar'
import "./QuestionsDetails.css";
import moment from 'moment';
import { useSelector } from 'react-redux';

const DisplayAnswer = ({ question,handleShare }) => {


  const User = useSelector((state) => state.currentUserReducer);
  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans">
            <p>{ans.answerBody}</p>
            <div className="question-action-user">
              <div >
                <button className=" action-btn" type="button"  onClick={handleShare} >Share</button>
                {(ans.userId === User?.result?.id) &&  <button type="button" className=" action-btn" >Delete</button>
                }
               
              </div>
              <div>
                <p>answred on  {moment(ans.answerOn).fromNow()}</p>
                <Link to={`/User/${ans.userId}`} className='user-link' style={{ color: '#0086d8' ,width:"40px" }}>
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
