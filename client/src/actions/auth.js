import axios from "axios";
import * as api  from "../api";
import setCurrentUser from "./setCurrentUser";

export const signup = (authData,navigate) => async (dispatch)=>{
    try{
      const {data} = await axios.post("http://localhost:5000/user/signup", authData);
      dispatch({type:"Auth",data});
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
      navigate("/");
    }
    catch(error){
console.log(error);
    }
  };


export const login = (authData,navigate)=> async (dispatch)=>{
    try{
      const {data} = await api.logIn(authData);
      dispatch({type:"Auth",data});
      console.log("sucessfull")
      navigate("/")
    }
    catch(error){
console.log(error);
    }
  }
