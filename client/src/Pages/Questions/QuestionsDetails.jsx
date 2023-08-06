import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import moment from 'moment';
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import copy from "copy-to-clipboard"
import parse from 'html-react-parser';

import sortUp from "../../assets/sort-up.svg";
import sortDown from "../../assets/sort-down.svg";
import Avatar from '../../Components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { postAnswer, deleteQuestion, votefunction } from "../../actions/question.js"

const QuesionsDetails = () => {
  const User = useSelector((state) => state.currentUserReducer);

  // for JoditEditor
  const editor = useRef(null);
  const [answer, setAnswer] = useState('');
  let questionList = useSelector((state) => state.questionsReducer)
  questionList = questionList.data;
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();

  //for post Answer
  const handlepostAnswer = (e, answerLength) => {


    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      navigate('/Auth');
    }
    else {
      if (answer === '') {
        alert("write answer before post");
      }
      dispatch(postAnswer({
        id,
        noOfAnswer: answerLength + 1,
        answerBody: answer,
        userAnswered: User.result.name,
        userId: User.result._id
      }))

      setAnswer("");
    }

  }
  const { id } = useParams()

  // handle share functionality
  const handleShare = () => {
    const url = "http://localhost:3000"
    copy(url + location.pathname);
    alert(url + location.pathname);

  }




  // handle  Delete question
  const handleDeleteQuestion = (id) => {
    dispatch(deleteQuestion(id, navigate));
  }




  // handle Up Vote
  const handleUpvote = (question) => {
    console.log(question._id, 'upvote', User?.result?._id)
    dispatch(votefunction( question._id, 'upvote', User?.result?._id ))
  }
  // handle Down Vote 

  const handleDownvote = (question) => {
    
    dispatch(votefunction( question._id, 'downvote', User?.result?._id ))

  }

  return (
    <div className='question-details-page'>
      {
        questionList === null ?
          <h1>Loading................</h1> :
          <>
            {

              questionList.filter(question => question._id === id).map((question) => (
                <div key={question._id}>
                  <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <section className="question-details-container-2">
                      <div className="question-votes">
                        <img src={sortUp} alt="" style={{ width: '20px' }} onClick={() => handleUpvote(question)} />
                        <p>{question.upVotes.length - question.downVotes.length}</p>
                        <img src={sortDown} alt="" style={{ width: '20px' }} onClick={() => handleDownvote(question)} />

                      </div>
                      <div className="questions-other-details">
                        <p className="question-body">
                          {/* < QuestionsDetails body={question.questionBody} /> */}
                          {parse(question.questionBody)}
                        </p>
                        <div className="widget-tags-div-1">
                          {question.questionTags.map((tag) => (
                            <p className="tag-p" key={tag}>{tag}</p>
                          ))}
                        </div>
                        <div className="question-action-user">
                          <div>
                            <button className=" action-btn" type="button" onClick={handleShare}>Share</button>
                            {
                              (question.userId === User?.result?._id) && <button className=" action-btn" type="button" onClick={() => handleDeleteQuestion(id)}>Delete</button>

                            }

                          </div>
                          <div>
                            <p>asked {moment(question.askedOn).fromNow()}</p>

                            <Link to={`/User/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                              <Avatar
                                backgroundColor="orange"
                                px="8px"
                                py="5px"
                                borderRadius="4px">
                                {question.userPosted.charAt(0).toUpperCase()}
                              </Avatar>
                              <div >{question.userPosted}</div>
                            </Link>


                          </div>
                        </div>
                      </div>
                    </section>
                    <hr />
                    {question.noOfAnswer !== 0 && (
                      <section>
                        <h3>{question.noOfAnswer} answers</h3>
                        <DisplayAnswer key={question.id} question={question} handleShare={handleShare} />
                      </section>

                    )}
                    <section>
                      <h3>Your Answer</h3>
                      <form onSubmit={(e) => { handlepostAnswer(e, question.answer.length) }}>

                        {/* Jodit Editor */}
                        <JoditEditor
                          id="answer-text-area"
                          ref={editor}
                          value={answer}
                          style={{ maxHeight: '600px' }}

                          tabIndex={1} // tabIndex of textarea
                          onChange={(e) => { setAnswer(e) }} />

                        <input className="post-btn" type="submit" value="Post Your Answer" />
                      </form >


                      <p>Browse other Question tagged
                        {question.questionTags.map((tag) => (
                          <Link to="/Tags" key={tag} className='ans-tags'>{tag}</Link>
                        ))
                        } or {
                          <Link to="/AskQuestion" style={{ textDecoration: "none", color: "#71b0ff" }}> ask your own question. </Link>
                        }</p>
                    </section>


                  </section>

                </div>

              ))
            }
          </>
      }

    </div>
  )
}

export default QuesionsDetails






