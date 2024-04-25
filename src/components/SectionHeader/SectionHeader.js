import React from "react";
import "./SectionHeader.css";

function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2 className="title">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
