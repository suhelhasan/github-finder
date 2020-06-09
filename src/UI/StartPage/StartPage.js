import React from "react";
import styling from "./StartPage.module.css";
import { FaSearch, FaUserAlt } from "react-icons/fa";

export default function StartPage() {
  return (
    <div className={styling.StartPage}>
      <div>
        <h2>
          start typing github username to get user's details <FaSearch />
        </h2>
      </div>
    </div>
  );
}
