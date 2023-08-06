import * as api from "../api";

export const askQuestion = (questionData, navigate) => async (dispatch) => {

    console.log("questions data" , questionData);

    try {

        const { data } = await api.postQuestion(questionData);
        console.log(data);
        dispatch({ type: "POST_QUESTION", payload: data });
        await dispatch(getQuestions())
        navigate('/');
        
    }
    catch (error) {
        console.log(error)
    }
}
export const getQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getAllQuestions();
        dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
    }
    catch (error) {
        console.log(error);
    }
}




export const deleteQuestion=(id,navigate)=> async(dispatch)=>{
    try{
      const {data}=  await api.deleteQuestion(id);
         dispatch({type:"DELETE_QUESTION", payload: data });
        await dispatch(getQuestions());
        navigate('/');
    }
    catch(error){
        console.log(error);
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswer, answerBody, userAnswered ,userId} = answerData;
        const { data } = await api.postAnswer(id, noOfAnswer, answerBody, userAnswered,userId);

        dispatch({ type: "FETCH_ANSWER", payload: data });
        await dispatch(getQuestions());
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteAnswer =( id,answerId,noOfAnswer)=>async(dispatch)=> {

    try{
         const {data} = await api.deleteAnswer(id,answerId,noOfAnswer);

        dispatch({ type: "DELETE_ANSWER"});

         await dispatch(getQuestions());
    }
    catch (error) {
        console.log(error);
    }
}

export const voteQuestion = (id,userId, value) => async (dispatch) => {
    console.log(userId);
    try {
      await api.voteQuestion(id,userId, value);
      dispatch(getQuestions());
    } catch (error) {
      console.log(error);
    }
  };