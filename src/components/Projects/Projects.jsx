import React from "react";
import "./Projects.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Project from "./Project";
import SocialLinks from "../SocialLinks/SocialLinks";
import { projectsData } from "./projectsData";

// TODO: Fix the max-width of the project for smaller screens
function Projects() {
  return (
    <section className="projects" id="portfolio">
      <SocialLinks fixed={true} />
      <div className="container">
        <SectionHeader title="Projects" />
        <div className="projects-parent">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              techStack={project.techStack}
              livePreview={project.livePreview}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
