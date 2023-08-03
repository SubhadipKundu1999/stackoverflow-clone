import React, { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import moment from 'moment';
import copy from "copy-to-clipboard"

import sortUp from "../../assets/sort-up.svg";
import sortDown from "../../assets/sort-down.svg";
import { Link } from 'react-router-dom';
import Avatar from '../../Components/Avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer, deleteQuestion } from "../../actions/question.js"
const QuesionsDetails = () => {
  const [answer, setAnswer] = useState('');
  const User = useSelector((state) => state.currentUserReducer);
  let questionList = useSelector((state) => state.questionsReducer)
  questionList = questionList.data;
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();
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
        userId:User.result._id
      }))

      setAnswer("");
    }

  }
 const url = "http://localhost:3000"

  const handleShare=()=>
  {

    copy(url+location.pathname);
    alert(url+location.pathname);

  }
  // var questionList = [
  //   {
  //     id: 0,
  //     upVotes: 5,
  //     downVotes: 1,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     userId: 1,
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: '1',
  //     upVotes: 5,
  //     downVotes: 1,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "nodejs", "reactjs", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     userId: 2,
  //     answer: [{
  //       answerBody: "Unlock Your Programming Potential: Join Our FREE 3-Day Workshop on How to Become an Expert in Object Oriented Programming for Fresh Graduates/Students on YouTube Live, Presented by VibrantMinds!Dear Students",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 2,
  //     upVotes: 5,
  //     downVotes: 2,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 3,
  //     upVotes: 3,
  //     downVotes: 5,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 4,
  //     upVotes: 6,
  //     downVotes: 5,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function  jh jj jjnjn jkn jjjjjjjjjjjjjjjjjhhhhk jj kjj j ",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 5,
  //     upVotes: 15,
  //     downVotes: 5,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 6,
  //     upVotes: 15,
  //     downVotes: 5,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 7,
  //     upVotes: 15,
  //     downVotes: 7,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 8,
  //     upVotes: 50,
  //     downVotes: 15,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "nodejs", "reactjs", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 9,
  //     upVotes: 15,
  //     downVotes: 5,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 10,
  //     upVotes: 15,
  //     downVotes: 10,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     id: 12,
  //     upVotes: 50,
  //     downVotes: 25,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It mean to be",
  //     questionTags: ["java", "node js", "react js", "mongoDb"],
  //     userPosted: 'mano',
  //     askOn: "jan 1",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswered: "Kumar",
  //       userId: 2,
  //     }]
  //   }
  // ];
  const { id } = useParams()

const handleDeleteQuestion=(id)=>{

  dispatch(deleteQuestion(id,navigate));

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
                        <img src={sortUp} alt="" style={{ width: '20px' }} />
                        <p>{question.upVotes.length - question.downVotes.length}</p>
                        <img src={sortDown} alt="" style={{ width: '20px' }} />

                      </div>
                      <div className="questions-other-details">
                        <p className="question-body">
                          {question.questionBody}

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
                                (question.userId === User?.result?._id)&&  <button className=" action-btn" type="button" onClick={()=>handleDeleteQuestion(id)}>Delete</button>

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
                        <DisplayAnswer key={question.id} question={question}  handleShare={handleShare} />
                      </section>

                    )}
                    <section>
                      <h3>Your Answer</h3>
                      <form onSubmit={(e) => { handlepostAnswer(e, question.answer.length) }}>
                        <textarea name="answer" id="answer-text-area" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
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
