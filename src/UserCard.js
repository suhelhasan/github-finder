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
        <p>{userInfo.location ? userInfo.location : "NA"}</p>
        <p>{userInfo.bio ? userInfo.bio : "NA"}</p>
        <p>Hireable: {userInfo.hireable ? "YES" : "NA"}</p>
        <p>Followers: {userInfo.followers}</p>
      </div>
    </div>
  );
}
