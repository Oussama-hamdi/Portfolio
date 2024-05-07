// Navbar.js
import React, { useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const burgerMenuRef = useRef(null);
  const linksParentRef = useRef(null);

  useEffect(() => {
    linksParentRef.current.onclick = (e) => {
      e.stopPropagation();
    };
    burgerMenuRef.current.onclick = (e) => {
      e.stopPropagation();
      if (e.target.tagName === "SPAN") {
        e.target.parentElement.classList.toggle("open");
      }
      linksParentRef.current.classList.toggle("active");
      e.target.classList.toggle("open");
    };
    document.addEventListener("click", (e) => {
      if (
        e.target !== burgerMenuRef.current &&
        e.target !== linksParentRef.current
      ) {
        if (linksParentRef.current.classList.contains("active")) {
          linksParentRef.current.classList.toggle("active");
          burgerMenuRef.current.classList.toggle("open");
        }
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-parent">
          <div className="logo-parent">
            <h1>
              <a href="#home">Oussama</a>
            </h1>
          </div>
          <div ref={burgerMenuRef} className="burger-menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div ref={linksParentRef} className="nav-links-parent">
            <ul className="nav-links">
              <li>
                <a onClick={() => console.log("Hey")} href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#certifications">Certifications</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
