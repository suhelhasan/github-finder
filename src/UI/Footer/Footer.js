import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import styling from "./Footer.module.css";
import Axios from "axios";

export default function Footer() {
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

  return (
    <div className={styling.footer}>
      <p>
        <a href="https://github.com/suhelhasan/github-finder">
          <FaStar />
          {repoDetails.stars}
          <GoRepoForked />
          {repoDetails.forks}
        </a>{" "}
        &nbsp; Made with <span>❤</span> by{" "}
        <a href="https://github.com/suhelhasan">@suhelhasan</a>
      </p>
    </div>
  );
}
