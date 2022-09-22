import React from "react";
import avatar from "./avatar.png";
import './navbar.css'

export default function Navbar() {
  return (
    <div className="nav">
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt=""
        className="nav-logo"
      />

      <img src={avatar} alt="" className="avatar" />
    </div>
  );
}
