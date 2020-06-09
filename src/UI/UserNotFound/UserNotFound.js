import React from "react";
import styling from "./UserNotFound.module.css";

import { FaFrown } from "react-icons/fa";
export default function UserNotFound() {
  return (
    <div className={styling.UserNotFound}>
      <div>
        <h2>
          Sorry <FaFrown />
        </h2>
        <h2>Unable to locate the user</h2>
      </div>
    </div>
  );
}
