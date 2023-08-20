import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is vaishali</h2>
        <div className="prompt">
          <p> 
            A software developer for learning and creating.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Javascript </span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>ReactJs, Html, Css </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span> Bootstrap, Typescript</span>
          </li>

        </ol>
      </div>

    </div>
  )
}

export default Home;