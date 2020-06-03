import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import UserCard from "./UserCard";

function App() {
  const [username, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  let getUser = async () => {
    try {
      let client_ID = "Iv1.ec43b1e5bdafd795";
      let client_SECRET = "e0ff76deebf70e031547e1247b74e6b3817ad4c2";

      let { data } = await Axios.get(
        `https://api.github.com/users/${username}?client_id=${client_ID}&client_secret=${client_SECRET}`
      );
      const userEmail = await Axios.get(
        `https://api.github.com/users/${username}?client_id=${client_ID}&client_secret=${client_SECRET}/events/public`
      );
      let findEmail = userEmail;
      let userMail =
        data.email || findEmail.data[0].payload.commits[0].author.email;
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
