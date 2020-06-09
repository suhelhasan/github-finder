import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import UserCard from "./UserCard/UserCard";
import UserNotFound from "./UI/UserNotFound/UserNotFound";
import StartPage from "./UI/StartPage/StartPage";
import Header from "./UI/Header/Header";
import Footer from "./UI/Footer/Footer";

function App() {
  const [username, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [notFound, setNotFound] = useState(false);

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
      setNotFound(false);
      setUserName("");
    } catch {
      setUserInfo(null);
      setNotFound(true);
      setUserName("");
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="inputSection">
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
        {userInfo ? (
          <UserCard userInfo={userInfo} />
        ) : notFound ? null : (
          <StartPage />
        )}
        {notFound ? <UserNotFound /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
