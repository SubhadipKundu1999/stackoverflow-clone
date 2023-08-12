import axios from "axios";
import * as api from "../api";

import setCurrentUser from "./setCurrentUser";

// action foe sign Up
export const signup = (authData, setError, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5000/user/signup", authData);
    dispatch({ type: "Auth", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')))); // set current user
    navigate("/");
  }
  catch (error) {
    setError("Something Went Wrong !!!!!!!!!!!1 ")
    console.log(error);
  }
};

// action for log in
export const login = (authData, setError, navigate) => async (dispatch) => {
  
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "Auth", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));  // set current use
    console.log("sucessfull")
    navigate("/");
  }

  catch (error) {
    setError("Invalid email or password");
    console.log(error);
  }
}
