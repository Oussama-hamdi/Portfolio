import React from "react";
import Resume from "../../assets/CV_OussemaHamdi_WebDeveloper.pdf";
import "./Home.css";
import { ReactTyped } from "react-typed";
// import SocialLinks from "../SocialLinks/SocialLinks";

function Home() {
  return (
    <main className="home">
      <div className="container">
        <div className="parent-content">
          <div className="left-content">
            <div className="greeting">
              <p>Hello 👋,</p>
              <h1 className="name">
                I'm<span> Oussama Hamdi</span>
              </h1>
              <p>
                A{" "}
                <span className="job-title">
                  <ReactTyped
                    strings={["Web Developer", "Software Engineer"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                  />
                </span>
              </p>
              <div className="resume-btn">
                <a className="btn" href={Resume} download="Resume">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* Right side content - Image */}
          <div className="right-content">
            <div div className="img-parent"></div>
          </div>
        </div>
        {/* <SocialLinks />*/}
      </div>
    </main>
  );
}

export default Home;
