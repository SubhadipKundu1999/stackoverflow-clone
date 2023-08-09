import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../../Components/Avatar/Avatar'
import parse from 'html-react-parser';
import "./QuestionsDetails.css";
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAnswer } from "../../actions/question.js"
const DisplayAnswer = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();

  const { id } = useParams()

  const handleDeleteAnswer = (id, answerId, noOfAnswer) => {

    dispatch(deleteAnswer(id, answerId, noOfAnswer));

  }
  return (
    <div>
      {
        question.answer.map((ans) => (

          <div className="display-ans">
            <p>{parse(ans.answerBody)}</p>
            <div className="question-action-user">
              <div >

                <button className=" action-btn" type="button" onClick={handleShare} >Share</button>
                {(ans.userId === User?.result?._id) && <button type="button" className=" action-btn" onClick={() => handleDeleteAnswer(id, ans._id, question.noOfAnswer)}>Delete</button>
                }

              </div>
              <div>
                <p>answred on  {moment(ans.answerOn).fromNow()}</p>
                <Link to={`/User/${ans.userId}`} className='user-link' style={{ color: '#0086d8', width: "40px" }}>
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
