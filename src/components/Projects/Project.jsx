import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 800,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

function Project({
  title,
  description,
  imgUrl,
  githubUrl,
  liveUrl,
  techStack,
  livePreview,
}) {
  return (
    <Tilt className="project" options={defaultOptions}>
      <div className="thumbnail">
        <div className="overlay">
          {livePreview ? (
            <div>
              <a
                href={liveUrl}
                rel="noreferrer"
                target="_blank"
                title="Live Preview"
              >
                <Icon path={mdiEyeOutline} size={1} />
              </a>
            </div>
          ) : (
            <div>
              <Icon
                path={mdiEyeOffOutline}
                size={1}
                title="Live Preview not available"
              />
            </div>
          )}
          <div>
            <a href={githubUrl} rel="noreferrer" target="_blank">
              <Icon path={mdiGithub} size={1} />
            </a>
          </div>
        </div>
        <img src={imgUrl} alt="Project" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-stack">Tech Stack: {techStack.join(", ")}</div>
      </div>
    </Tilt>
  );
}

export default Project;
