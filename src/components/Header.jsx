import React from "react";
import Settings from "../Settings/Settings";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header container">
      <h1> {Settings.name} </h1>
      <p> {Settings.position} </p>
      <img src={Settings.profile_photo} alt="profile_pic" />
      <p className="header_para">
        I am a fresher web fullstack developer, passionate about creating
        user-friendly websites and web applications. I have a solid background
        in HTML/CSS and JavaScript, and am eager to learn new skills and
        technologies. I am also well-versed in NODE.JS, MongoDB, and have
        experience working with popular framework and library such as Express.js
        and React. I am a team player, who is highly motivated and
        results-driven
      </p>
    </div>
  );
};

export default Header;
