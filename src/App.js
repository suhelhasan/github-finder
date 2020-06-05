import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import UserCard from "./UserCard/UserCard";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";

function App() {
  const [username, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [repoDetails, setRepoDetails] = useState({});

  useEffect(() => {
    Axios.get(`https://api.github.com/users/suhelhasan/repos`).then(
      (reponse) => {
        let repo = reponse.data;
        repo.forEach((element) => {
          if (element.name === "github-finder") {
            let forks = element.forks;
            let stars = element.stargazers_count;
            setRepoDetails({ forks, stars });
          }
        });
      }
    );
  }, []);

  let getUser = async () => {
    try {
      let { data } = await Axios.get(
        `https://api.github.com/users/${username}`
      );

      const userEmail = await Axios.get(
        `https://api.github.com/users/${username}/events/public`
      );

      let arr = userEmail.data;
      let findEmail = "";

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].payload.commits) {
          findEmail = arr[i].payload.commits[0].author.email;
          break;
        }
      }

      let userMail = data.email || findEmail;

      setUserInfo({ userMail, ...data });
      setUserName("");
    } catch {
      console.log("ERROR");
      setUserName("");
    }
  };

  return (
    <div className="App">
      <div className="inputSection">
        <h1>
          GitHub user details finder <FaGithub />
        </h1>
        <div>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            placeholder="enter username.."
            autoFocus
          />
          <button onClick={getUser}>Find User</button>
        </div>
      </div>
      <div className="usersSection">
        {userInfo ? <UserCard userInfo={userInfo} /> : null}
      </div>
      <div className="footer">
        <p>
          <FaStar />
          {repoDetails.stars}
          <GoRepoForked />
          {repoDetails.forks} &nbsp; Github Finder &copy; 2020
        </p>
      </div>
    </div>
  );
}

export default App;
