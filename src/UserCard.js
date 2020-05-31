import React from "react";
import styling from "./UserCard.module.css";
export default function UserCard({ userInfo }) {
  return (
    <div className={styling.userCard}>
      <div>
        <img
          src={userInfo.avatar_url}
          alt="Avatar"
          className={styling.imageStyle}
        />
        <h3>{userInfo.name}</h3>
        <p>{userInfo.email || userInfo.userMail}</p>
        <p>{userInfo.location}</p>
        <p>{userInfo.bio}</p>
        <p>Hireable: {userInfo.hireable ? "YES" : "NO"}</p>
        <p>Followers: {userInfo.followers}</p>
      </div>
    </div>
  );
}
