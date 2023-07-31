import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/",
});
  export const logIn=(authData)=> Api.post("/user/login",authData);
  export const signUp=(authData)=> Api.post("/user/signup",authData);

  export const postQuestion = (questionData)=> Api.post("/questions/Ask",questionData);