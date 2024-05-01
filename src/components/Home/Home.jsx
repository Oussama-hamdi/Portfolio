import React from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import SocialLinks from "../SocialLinks/SocialLinks";

function Home() {
  return (
    <section id="home" className="home">
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
              <SocialLinks />
            </div>
          </div>
          {/* Right side content - Image */}
          <div className="right-content">
            <div className="img-parent"></div>
          </div>
        </div>
        {/* <SocialLinks />*/}
      </div>
    </section>
  );
}

export default Home;
