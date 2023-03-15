import React from "react";
import Projects from "../Settings/Projects";
import "../Styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <h1>Projects</h1>
      <div className="projects">
        {Projects.map((data, index) => (
          <div className="project" key={index}>
            <img src={data.image} alt={data.name} />
            <h3> {data.name} </h3>
            <a href={data.link} target={"_blank"}>
              Live 
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
