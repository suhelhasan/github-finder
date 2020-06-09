import React from "react";
import { FaStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import styling from "./Footer.module.css";

function Footer({ stars, forks }) {
  return (
    <div className={styling.footer}>
      <p>
        <a href="https://github.com/suhelhasan/github-finder">
          <FaStar />
          {stars}
          <GoRepoForked />
          {forks}
        </a>{" "}
        &nbsp; Made with <span>❤</span> by{" "}
        <a href="https://github.com/suhelhasan">@suhelhasan</a>
      </p>
    </div>
  );
}
export default Footer;
