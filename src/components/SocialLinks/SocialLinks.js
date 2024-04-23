import React from "react";
import Icon from "@mdi/react";
import { mdiFilePdfBox, mdiGithub, mdiLinkedin, mdiWhatsapp } from "@mdi/js";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="nav-links-icons">
      <ul className="nav-links">
        <li>
          <a
            href="https://drive.google.com/file/d/12gub5wUqCrz85Px1bF-zzbkg1sn7eZRq/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <Icon path={mdiFilePdfBox} size={1} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Oussama-hamdi"
            rel="noreferrer"
            target="_blank"
          >
            <Icon path={mdiGithub} size={1} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/oussamah/"
            rel="noreferrer"
            target="_blank"
          >
            <Icon path={mdiLinkedin} size={1} />
          </a>
        </li>
        <li>
          <a href="tel:+21629474820">
            <Icon path={mdiWhatsapp} size={1} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
