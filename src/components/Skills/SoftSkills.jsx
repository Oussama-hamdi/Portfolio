import React, { useEffect, useState } from "react";

function SoftSkills({ skillName, skillLevel }) {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  console.log("animationTriggered", animationTriggered);

  useEffect(() => {
    const skillsSection = document.getElementById("skills-section");
    const windowHeight = window.innerHeight;
    const threshold = -100; // Adjust the threshold as needed

    const checkPosition = () => {
      const skillsSectionTop = skillsSection.getBoundingClientRect().top;
      const skillsSectionBottom = skillsSection.getBoundingClientRect().bottom;

      if (
        (skillsSectionTop <= windowHeight - threshold &&
          skillsSectionBottom >= threshold) ||
        (window.scrollY >= skillsSection.offsetTop && !animationTriggered)
      ) {
        setAnimationTriggered(true);
      }
    };

    const handleScroll = () => {
      checkPosition();
    };

    // Check initial position when component mounts
    checkPosition();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationTriggered]);

  useEffect(() => {
    if (animationTriggered) {
      // Your code to activate animation
      const circles = document.querySelectorAll(".circle");
      circles.forEach((elem) => {
        let dots = parseInt(elem.getAttribute("data-dots"));
        let marked = parseInt(elem.getAttribute("data-percent"));
        let percent = Math.floor((dots * marked) / 100);
        let points = "";
        let rotate = 360 / dots;

        for (let i = 0; i < dots; ++i) {
          points += `<div class="points" style="--i:${
            i + 1
          }; --rot:${rotate}deg"></div>`;
        }

        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll(".points");

        for (let i = 0; i < percent; ++i) {
          pointsMarked[i].classList.add("marked");
        }
      });
    }
  }, [animationTriggered]);

  return (
    <div className="box" id="skills-section">
      <div className="circle" data-dots="50" data-percent={skillLevel}></div>
      <div className="text">
        <big>{skillLevel}%</big>
        <small>{skillName}</small>
      </div>
    </div>
  );
}

export default SoftSkills;
