import React from "react";
import styling from "./UserCard.module.css";
import {
  FaGithubAlt,
  FaGithub,
  FaMapMarkerAlt,
  FaUserCheck,
  FaUserPlus,
  FaHistory,
  FaRedoAlt,
  FaCity,
  FaUserGraduate,
  FaUserTie,
  FaEnvelope,
  FaSmile,
} from "react-icons/fa";

export default function UserCard({ userInfo }) {
  let findEmail = userInfo.email || userInfo.userMail || "NA";
  let noEmail =
    userInfo.userMail.slice(
      userInfo.userMail.indexOf("@"),
      userInfo.userMail.length - 1
    ).length < 15;
  // === "@users.noreply.github.co"
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
        <div className={styling.userProfile}>
          <img
            src={userInfo.avatar_url}
            alt="Avatar"
            className={styling.imageStyle}
          />
          <a target="_blank" rel="noopener noreferrer" href={userInfo.html_url}>
            <h3 className={styling.userName}>
              @{userInfo.login}
              {/* <FaGithubAlt /> */}
            </h3>
          </a>
          <h3>
            {userInfo.bio ? userInfo.bio : "Hey, there i am using GitHub"}
          </h3>
        </div>
        <div className={styling.userDetails}>
          <h3>
            <FaUserTie /> Name: {userInfo.name || "NA"}
          </h3>
          <h3>
            <FaEnvelope /> Email: {noEmail ? findEmail : "NA"}
          </h3>
          <h3>
            <FaMapMarkerAlt /> Location:{" "}
            {userInfo.location ? userInfo.location : "NA"}
          </h3>
          <h3>
            <FaCity /> Works At: {userInfo.company ? userInfo.company : "NA"}
          </h3>
          <h3>
            <FaUserGraduate /> Hireable: {userInfo.hireable ? "YES" : "NA"}
          </h3>
          <h3>
            {" "}
            <FaGithub /> Public Repos: {userInfo.public_repos}
          </h3>
          <h3>
            <FaHistory /> Member Since: {memberSince}
          </h3>
          <h3>
            <FaRedoAlt /> Last Visit: {lastVisit}
          </h3>
          <h3>
            <FaUserCheck /> Followers: {userInfo.followers}
          </h3>
          <h3>
            <FaUserPlus /> Following: {userInfo.following}
          </h3>
          <div className={styling.buttons}>
            <button>
              <a
                href={userInfo.html_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                More Details
              </a>
            </button>
            <button>
              <a
                href={`${userInfo.html_url}/repositories`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Check Projects
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
