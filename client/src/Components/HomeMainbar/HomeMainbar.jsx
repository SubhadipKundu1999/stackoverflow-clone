import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import QuestionList from '../QuestionList'
import './HomeMainbar.css'
const HomeMainbar = () => {
  const user = 1;
  const navigate=useNavigate()
  var questionList = [{
    id: 0,
    Upvotes: 3,
    downVotes:2,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },
  {
    id: 1,
    votes: 4,
    noOfAnswer: 2,
    downVotes:2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },
  {
    id: 2,
    upvotes: 5,
    downVotes:2,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },
  {
    id: 3,
    upvotes: 5,
    downVotes:2,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },
  {
    id: 4,
    upvotes: 5,
    downVotes:2,
    noOfAnswer: 2,
    questionTitle: "What is a function  jh jj jjnjn jkn jjjjjjjjjjjjjjjjjhhhhk jj kjj j ",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },

  {
    id: 5,
    upvotes: 5,
    downVotes:2,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },

  {
    id: 6,
    upvotes: 5,
    downVotes:2,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },

  {
    id: 7,
    votes: 4,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },

  {
    id: 8,
    votes: 5,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },

  {
    id: 9,
    votes: 3,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  },

  {
    id: 10,
    votes: 4,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2,
      answer:[{
        answerBody:"Answer",
        userAnswered:"Kumar",
        answerOn: "jan 2",
        userId:2
      }]
    }]
  },
  {
    id: 12,
    votes: 5,
    noOfAnswer: 2,
    questionTitle: "What is a function?",
    questionBody: "It mean to be",
    questionTags: ["java", "node js", "react js", "mongoDb"],
    userPosted: 'mano',
    askOn: "jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:"Kumar",
      answerOn: "jan 2",
      userId:2
    }]
  }
  ]
  const checkAuth=()=>{
    if(user===null){
      alert("login of signup to ask a question");
      navigate('/Auth');
    }
    else{
      navigate('/AskQuestion')
    }
  }
  const location = useLocation()
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button to="/AskQuestion" className='ask-btn' onClick={checkAuth}>Ask Question</button>
      </div>
      <div>
        {
          questionList == null ?
            <h1>Loading...</h1> :
            <>
              <p> {questionList.length} questions</p>
              <QuestionList questionlist={questionList} />
            </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar
