import React from "react";
import "../styles/UserInfo.css";

function UserInfo({ user }) {
  return (
    <div className="card user-info">
      <img className="femalepic.jpg" src={user.profilePicture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <span className={`role-label ${user.role.toLowerCase()}`}>
        {user.role}
      </span>
    </div>
  );
}

export default UserInfo;
