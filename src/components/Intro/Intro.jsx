import React from "react";
import "./Intro.css";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Victor1 from "../../assets/Vector1.png";
import Victor2 from "../../assets/Vector2.png";
import boy from "../../assets/oussama.png";
import thumbup from "../../assets/thumbup.png";
import crown from "../../assets/crown.png";
import glassesimoji from "../../assets/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Osama Hamdi</span>
          <span>
            Frontend Developer with high level of experience in web development,
            production the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/Oussama-hamdi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/oussama-hamdi-841016221/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Victor1} alt="" />
        <img src={Victor2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />

        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "1rem" }}>
          <FloatingDiv image={thumbup} txt1="Best" txt2="Choice" />
        </div>
        {/* Blur Divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
