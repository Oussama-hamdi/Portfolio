import React, { forwardRef } from "react";

const TechnicalSkills = forwardRef(({ skillName, skillLevel }, ref) => {
  return (
    <div className="skill-bar" ref={ref}>
      <div className="info">
        <p>{skillName}</p>
        <p>{skillLevel}%</p>
      </div>
      <div className="bar">
        <span className={`progress-bar ${skillName.toLowerCase()}`}></span>
      </div>
    </div>
  );
});

export default TechnicalSkills;
