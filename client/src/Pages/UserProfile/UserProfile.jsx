import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Avatar from "../../Components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UsersProfile.css";
import Skeleton from "react-loading-skeleton";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const color = currentProfile?.color;
  // console.log(currentProfile);
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <section style={{ padding: "20px" }}>
          <div className="user-details-container">
            <div className="user-details">
              {
                currentProfile?.avatar ?
                  (
                    <div>
                      <img src={currentProfile.avatar} width={'120px'} height={'120px'} alt="" />
                    </div>
                  
                    ) :
                  currentProfile ? (
                    <Avatar
                      backgroundColor={`${color}` || "#009dff"}
                      color="white"
                      fontSize="50px"
                      px="40px"
                      py="30px"
                      borderRadius={'10px'}
                    >
                      {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                  )
                    :
                    (
                      <Skeleton width={"120px"} height={"120px"}></Skeleton>
                    )
              }

              <div className="user-name">
                {currentProfile ? <h1>{currentProfile?.name}</h1> : <Skeleton width={"120px"} height={"40px"} style={{ marginTop: "20px" }}>
                </Skeleton>
                }
                <p>

                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
