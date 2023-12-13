import * as api from "../api";

import setCurrentUser from "./setCurrentUser";


// action foe sign Up
export const signup = (authData, setError, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "Auth", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')))); // set current user
    navigate("/");
  }
  catch (error) {
    setError("Something Went Wrong !!!!!!!!!!!1 ")
    console.log(error.message);
  }
};


// action for log in
export const login = (authData, setError, navigate) => async (dispatch) => {
  
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "Auth", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));  // set current user
    console.log("sucessfull")
    console.log("login",data);
    navigate("/");
  }
  catch (error) {
    setError("Invalid email or password");
    console.log(error.message);
  }
}


// forgot password
export const forgotPasswordAction = async(email, setError, setSuccess) =>{
  
  try {
     await api.forgotPassword(email);
    setSuccess(true)

  }

  catch (error) {
    setSuccess(false)
    setError("Invalid email address");
    console.log(error);
  }
}


// reset password
export const resetPasswordAction = async (token, password, setError) =>  {
  
  try {
    console.log(`/user/resetPassword/${token}`)
  await api.resetPassword(token, password);

  }

  catch (error) {
    setError("Something went wrong!!!");

  }
}



//google auth


export const signupGoogle = (accessToken, navigate, setError) => async (dispatch)=>{
  try{
      // signup user

      const {data} = await api.signUpGoogle(accessToken)
      dispatch({ type: "Auth", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile')))); // set current user
    navigate("/");
  }catch(err){
  setError("user already exist");
      console.log(err)
  }
}

export const signinGoogle = (accessToken, navigate, setError) => async (dispatch)=>{
  try{
      // login user
      const {data} = await api.signInGoogle(accessToken)

      dispatch({ type: "Auth", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));  // set current user
    console.log("sucessfull")
    console.log("login",data);

    navigate("/");
  }catch(err){
    setError("user does not exist");
      console.log(err)
  }
}