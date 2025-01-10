import React from "react";

const ProfileCard =({name, title, profileImage, bio})=>{
    return (
        <div className="profile-card">
          <img src={profileImage} alt="image not found" />
          <h2>{name}</h2>
          <h4>{title}</h4>
          <p>{bio}</p>
        </div>
      );
}
export default ProfileCard;