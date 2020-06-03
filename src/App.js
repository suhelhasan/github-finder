import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import UserCard from "./UserCard";

function App() {
  const [username, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);

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
      <h1>Hello Danish..</h1>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        placeholder="Please provide the username"
      />
      <button onClick={getUser}>Get User</button>
      {userInfo ? <UserCard userInfo={userInfo} /> : null}
    </div>
  );
}

export default App;
