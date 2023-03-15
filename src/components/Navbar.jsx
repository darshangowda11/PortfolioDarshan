import React from "react";
import "../Styles/Navbar.css";
import resume from "../assets/Darshan_v2.pdf"
const Navbar = ({ page, setPage }) => {
  return (
    <div className="navbar">
      <a href="/" className="nav_title hover_line">
        Home
      </a>
      <div className="links">
        {[ "Portfolio", "Skills", "Services"].map(
          (title, index) => (
            <li key={index}>
              <p onClick={() => setPage(title)} className="hover_line">{title}</p>
            </li>
          )
        )}
      </div>
      <div className="links">
      <li className="resume"><a href={resume}>Resume</a></li>
      </div>
    </div>
  );
};

export default Navbar;
