import axios from "axios";

const Api = axios.create({

  baseURL: "http://localhost:5000/"

});

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
  export const logIn=(authData)=> Api.post("/user/login",authData);
  export const signUp=(authData)=> Api.post("/user/signup",authData);
  export const postQuestion = (questionData)=> Api.post("/questions/Ask" ,questionData);
  export const getAllQuestions = ()=> Api.get("/questions/get");
  export const postAnswer =(id,noOfAnswer,answerBody, userAnswered,userId) => Api.patch( `/answer/post/${id}` , {noOfAnswer,answerBody, userAnswered,userId}) ; 
  export const deleteQuestion=(id)=> Api.delete(`/questions/delete/${id}`,id);
  export const deleteAnswer=(id, answerId,noOfAnswer)=>Api.patch(`/answer/delete/${id}`,{answerId,noOfAnswer});
  export const voteQuestion = (id,userId, value) => Api.patch(`/questions/vote/${id}`, { userId,value });
  export const getAllUsers = ()=>Api.get("/user/getAllUsers");
  