import React from "react";
import { Link } from "react-router-dom";

import "./Users.css";


const User = ({ user }) => {
  return (

    <Link to={ `/Users/${user._id}` } className="user-profile-link">
      {user?.avatar ? 
      (
      <img src={user?.avatar} alt="" height={'100px'} width={'100px'} />
        ):
      (
        <div style={{backgroundColor:`${user.color}` || "#009dff"}} ><p>{user.name.charAt(0).toUpperCase()}</p></div>
      )
       }
   
     <div> <h4 font>{user.name}</h4></div>
    </Link>
  );
};

export default User;
