import React from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import SocialLinks from "../SocialLinks/SocialLinks";

function Home() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="parent-content">
          <div className="left-content" data-aos="fade-up">
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
                    typeSpeed={80}
                    backSpeed={80}
                    loop
                  />
                </span>
              </p>
              <SocialLinks />
            </div>
          </div>
          {/* Right side content - Image */}
          <div className="right-content" data-aos="fade-down">
            <div className="img-parent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
