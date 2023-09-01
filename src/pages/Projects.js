import React from 'react';
import ProjectItem from "../components/ProjectItem";
import downoload1 from '../assets/download1.png';
import downoload3 from '../assets/download3.jpg';
import "../styles/Projects.css";
import { ProjectList } from '../helpers/ProjectList';


function Projects() {
  return (
    <div className="Projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Social Media Website" image={downoload1}/>
        <ProjectItem  name="Spotify Clone" image={downoload3}/>
         {ProjectList .map((project, idx)=>{
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
         })}
      </div>
    </div>
  );
}

export default Projects