import { useEffect, useRef } from "react";
import "./Navbar.css";
import Icon from "@mdi/react";
import { mdiWeatherNight } from "@mdi/js";

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
              <a href="#home">
                <svg viewBox="0 0 960 300">
                  <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">
                      Oussama
                    </text>
                  </symbol>
                  <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                    <use xlinkHref="#s-text" className="text-copy"></use>
                  </g>
                </svg>
              </a>
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
                <a href="#home">Home</a>
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
              <li>
                <Icon path={mdiWeatherNight} size={1} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
