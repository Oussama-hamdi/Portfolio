import React from "react";

function Certification({ img, title, provider, date, link }) {
  return (
    <div className="certification">
      <div className="certification-img">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="Certification" />
        </a>
      </div>
      <h3 className="certification-title">{title}</h3>
      <div className="certification-info">
        <p>{provider}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Certification;
