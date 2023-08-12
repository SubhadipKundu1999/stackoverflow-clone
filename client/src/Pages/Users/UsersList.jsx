import React from "react";
import { useSelector } from "react-redux";

import User from "./User";
import "./Users.css";
import UserSkeleton from "../../Components/Skeleton/UserSkeleton";


const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);


  return (

    <div className="user-list-container">

      {users.length === 0 ? (
        <UserSkeleton/>
      ) : (<> {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}

      </>)
      }

    </div>
  );
};

export default UsersList;
