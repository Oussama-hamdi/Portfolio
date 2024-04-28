import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiEyeOutline } from "@mdi/js";
import { Tilt } from "react-tilt";

import MovieLand from "../../assets/movie_land.png";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35,
  perspective: 800,
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

// TODO: Fix the hover effect on the project thumbnail for mobile devices
function Project() {
  return (
    <Tilt className="project" options={defaultOptions}>
      <div className="thumbnail">
        <div className="overlay">
          <a href="https://github.com" rel="noreferrer" target="_blank">
            <Icon path={mdiEyeOutline} size={1} />
          </a>
          <a href="https://github.com" rel="noreferrer" target="_blank">
            <Icon path={mdiGithub} size={1} />
          </a>
        </div>
        <img src={MovieLand} alt="Project" />
      </div>
      <div className="project-info">
        <h3 className="project-title">Project 1</h3>
        <p className="project-description">
          Project description: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ut turpis ac tellus ultrices fermentum. Proin sit
          amet eros in ligula volutpat consequat. Quisque sit amet dui risus.
          Phasellus vulputate, mi sit amet pulvinar faucibus, dolor felis
          commodo sapien, at laoreet ex dolor vel sem.
        </p>
      </div>
    </Tilt>
  );
}

export default Project;
