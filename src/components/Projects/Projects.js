import React from "react";
import "./Projects.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import Project from "./Project";

function Projects() {
  return (
    <main className="projects" id="projects">
      <div className="container">
        <SectionHeader title="Projects" />
        <div className="projects-parent">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </main>
  );
}

export default Projects;
