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
            <h3>
              @{userInfo.login} <FaGithubAlt />
            </h3>
          </a>
          <p>{userInfo.bio ? userInfo.bio : "NA"}</p>
        </div>
        <div className={styling.userDetails}>
          <p>
            <FaUserTie /> Name: {userInfo.name || "NA"}
          </p>
          <p>
            <FaEnvelope /> Email: {noEmail ? findEmail : "NA"}
          </p>
          <p>
            <FaMapMarkerAlt /> Location:{" "}
            {userInfo.location ? userInfo.location : "NA"}
          </p>
          <p>
            <FaCity /> Works At: {userInfo.company ? userInfo.company : "NA"}
          </p>
          <p>
            <FaUserGraduate /> Hireable: {userInfo.hireable ? "YES" : "NA"}
          </p>
          <p>
            {" "}
            <FaGithub /> Public Repos: {userInfo.public_repos}
          </p>
          <p>
            <FaHistory /> Member Since: {memberSince}
          </p>
          <p>
            <FaRedoAlt /> Last Visit: {lastVisit}
          </p>
          <p>
            <FaUserCheck /> Followers: {userInfo.followers}
          </p>
          <p>
            <FaUserPlus /> Following: {userInfo.following}
          </p>
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
