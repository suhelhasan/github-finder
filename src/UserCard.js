import React from "react";
import styling from "./UserCard.module.css";
export default function UserCard({ userInfo }) {
  console.log(userInfo.avatar_url);

  let findEmail = userInfo.email || userInfo.userMail || "NA";
  let noEmail =
    userInfo.userMail.slice(
      userInfo.userMail.indexOf("@"),
      userInfo.userMail.length - 1
    ) === "@users.noreply.github.co";

  let memberSince = userInfo.created_at.slice(
    0,
    userInfo.created_at.indexOf("T")
  );
  let lastVisit = userInfo.updated_at.slice(
    0,
    userInfo.created_at.indexOf("T")
  );
  return (
    <div className={styling.userCard}>
      <div>
        <img
          src={userInfo.avatar_url}
          alt="Avatar"
          className={styling.imageStyle}
        />
        <a target="_blank" href={userInfo.html_url}>
          <h3>@{userInfo.login}</h3>
        </a>
        <h3>{userInfo.name || "NA"}</h3>
        <p>{!noEmail ? findEmail : "NA"}</p>
        <p>{userInfo.location ? userInfo.location : "NA"}</p>
        <p>{userInfo.bio ? userInfo.bio : "NA"}</p>
        <p>Hireable: {userInfo.hireable ? "YES" : "NA"}</p>
        <p>Public Repos: {userInfo.public_repos}</p>
        <p>Member Since: {memberSince}</p>
        <p>Last Visit: {lastVisit}</p>
        <p>Followers: {userInfo.followers}</p>
      </div>
    </div>
  );
}
