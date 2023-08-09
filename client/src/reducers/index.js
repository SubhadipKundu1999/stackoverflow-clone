import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questionsReducer"
import usersReducer from "./userReducer" 
import slideInReducer from "./slidIn"
export  default combineReducers(
    {
        authReducer,
        currentUserReducer,
        questionsReducer,
        usersReducer,
        slideInReducer
    }
);