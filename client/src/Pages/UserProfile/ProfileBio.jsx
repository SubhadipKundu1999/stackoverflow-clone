import React from "react";
import { AiFillEye } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>

          {currentProfile?
            <div className="widget-tags-div-1">
            {currentProfile?.tags.map((tag, index) => (

              <p className="tag-p" key={tag}>
              {(index === 0) && <span  ><AiFillEye size={20} /> </span>}{tag}
              </p>

            ))}

          </div>:
          <div style={{ display: "flex", gap: "5px" }}>
                  <Skeleton height={'30px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
                  <Skeleton height={'30px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
                  <Skeleton height={'30px'} width={'40px'} baseColor='#9EC0E2'></Skeleton>
                </div>
            }
           
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
      <h4>About</h4>
        {currentProfile ? (
          <>
          { currentProfile?.about ?
           <>
            <p>{currentProfile?.about}</p>
            </> :
            <p>No bio found</p>
           }
          
          </>
        ) : (
          <div>
            <Skeleton heith={"100px"} width={"60vw"}></Skeleton>
            <Skeleton heith={"100px"} width={"50vw"}></Skeleton>
            <Skeleton heith={"100px"} width={"40vw"}></Skeleton>
            <Skeleton heith={"100px"} width={"30vw"}></Skeleton>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
