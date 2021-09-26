import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div key="id" id="project-list">{projects.map(project => <ProjectItem technologies={project.technologies} about={project.about} name={project.name} key={project.id}/>)}</div>
    </div>
  );
}





export default ProjectList;
