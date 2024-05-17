import React, { useEffect, useRef } from "react";
import "./Skills.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

function Skills() {
  const progressBarRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    });

    progressBarRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelector(".progress-bar").classList.add("animate");
      }
    });
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeader title="My Skills" />
        <div className="skills-content">
          <div className="left-skill">
            <h3>Technical Skills</h3>
            <TechnicalSkills
              skillName={"HTML"}
              skillLevel={85}
              ref={(el) => (progressBarRefs.current[0] = el)}
            />
            <TechnicalSkills
              skillName={"CSS"}
              skillLevel={90}
              ref={(el) => (progressBarRefs.current[1] = el)}
            />
            <TechnicalSkills
              skillName={"JavaScript"}
              skillLevel={88}
              ref={(el) => (progressBarRefs.current[2] = el)}
            />
            <TechnicalSkills
              skillName={"ReactJs"}
              skillLevel={82}
              ref={(el) => (progressBarRefs.current[3] = el)}
            />
            <TechnicalSkills
              skillName={"GIT"}
              skillLevel={87}
              ref={(el) => (progressBarRefs.current[4] = el)}
            />
            <TechnicalSkills
              skillName={"NodeJs"}
              skillLevel={60}
              ref={(el) => (progressBarRefs.current[5] = el)}
            />
            <TechnicalSkills
              skillName={"ExpressJs"}
              skillLevel={65}
              ref={(el) => (progressBarRefs.current[6] = el)}
            />
            <TechnicalSkills
              skillName={"MongoDB"}
              skillLevel={50}
              ref={(el) => (progressBarRefs.current[7] = el)}
            />
          </div>
          <div className="right-skill">
            <h3>Soft Skills</h3>
            <div className="professional">
              <SoftSkills skillName={"Problem-solving"} skillLevel={85} />
              <SoftSkills skillName={"Team work"} skillLevel={80} />
              <SoftSkills skillName={"Time management"} skillLevel={75} />
              <SoftSkills skillName={"Communication"} skillLevel={78} />
              <SoftSkills skillName={"Attention to detail"} skillLevel={84} />
              <SoftSkills skillName={"Self-Motivation"} skillLevel={90} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
