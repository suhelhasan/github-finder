import React from "react";
import { FaGithub } from "react-icons/fa";
import styling from "./Header.module.css";

export default function Header() {
  return (
    <div className={styling.header}>
      <p>
        GitHub user details finder <FaGithub />
      </p>
    </div>
  );
}
