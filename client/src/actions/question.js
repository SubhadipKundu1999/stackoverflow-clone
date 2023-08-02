import * as api  from "../api";

export const askQuestion =(questionData ,navigate ) => async (dispatch)=>{
try{
    const {data} = await api.postQuestion(questionData);
dispatch({type:"POST_QUESTION", payload:data});
await dispatch(getQuestions())
navigate('/');
}
catch(error){
console.log(error)
}
}
export const getQuestions = ()=> async(dispatch)=>{
    try{
 const {data} = await api.getAllQuestions();
 dispatch({type:"FETCH_ALL_QUESTIONS", payload:data});
    }
     catch(error){
            console.log(error);      
    }
}

export const postAnswer = (answerData)=> async (dispatch)=>{
    try{
  const {id, noOfAnswer, answerBody, userAnswered} = answerData;
  const {data} = await api.postAnswer(id, noOfAnswer, answerBody, userAnswered);

  dispatch({type:"FETCH_ANSWER", payload:data});
  await dispatch( getQuestions() )
    }
    catch(error){
        console.log(error);
    }
}

