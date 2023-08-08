import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestions/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
// import QuesionsDetails from "./Pages/Questions/QuestionsDetails";
const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
   <Routes>
    <Route path="/"    element={<Home />}/>
    <Route path="/Auth" element={<Auth />}/>
    <Route path="/Questions"  element={<Questions />}/>
    <Route path="/AskQuestion" element={<AskQuestion/>}/>
    <Route path="/DisplayQuestion" element={<DisplayQuestion/>}/>
    <Route path="/Questions/:id" element={<DisplayQuestion/>}/>
    <Route path ="/Tags" element={<Tags/>}/>
    <Route path="/Users/" element={<Users/>}></Route>
   </Routes>
);
};

export default AllRoutes;
