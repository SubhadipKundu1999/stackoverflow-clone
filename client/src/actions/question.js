import axios from "axios";
import * as api from "../api";



export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData);
        dispatch({ type: "POST_QUESTION", payload: data });
        await dispatch(getQuestions())
        navigate('/');
    }
    catch (error) {
        console.log(error)
    }
}

// for fetch all questions
export const getQuestions = () => async (dispatch) => {
    try {

        const { data } = await api.getAllQuestions();
        dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
    }
    catch (error) {
        console.log(error);
    }
}


//  to delete a question

export const deleteQuestion = (id, navigate) => async (dispatch) => {

    try {
        const { data } = await api.deleteQuestion(id);
        dispatch({ type: "DELETE_QUESTION", payload: data });
        await dispatch(getQuestions());
        navigate('/');
    }
    catch (error) {
        console.log(error);
    }
}


// post answer

export const postAnswer = (answerData) => async (dispatch) => {
    try {
      let { id, noOfAnswer, answerBody, userAnswered, userId } = answerData;
  
      const { data } = await api.postAnswer(id, noOfAnswer, answerBody, userAnswered, userId);
  
      dispatch({ type: "FETCH_ANSWER", payload: data });
      await dispatch(getQuestions());
    } catch (error) {
      console.log(error);
    }
  };

// for delete answer

export const deleteAnswer = (id, answerId, noOfAnswer) => async (dispatch) => {

        try {
            await api.deleteAnswer(id, answerId, noOfAnswer);

            dispatch({ type: "DELETE_ANSWER" });

            await dispatch(getQuestions());
        }
        catch (error) {
            console.log(error);
        }
    }



    // for voting
    export const voteQuestion = (id, userId, value) => async (dispatch) => {
        try {
            await api.voteQuestion(id, userId, value);
            dispatch(getQuestions());
        } catch (error) {
            console.log(error);
        }
    };



    // get question part by part for pagination

    export const getPaginatedQuestion = (setPageCount, current, limit) => async (dispatch) => {

        try {
            const { data } = await api.getPaginatedQuestion(current, limit);
            setPageCount(data.pageCount);
            dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data.result });
        }
        catch (error) {
            console.log(error)
        }

    }

