import React, { useState, useEffect } from "react";
import "./GoToTopButton.css";

function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top of the page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`go-to-top-button ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop}>↑</button>
    </div>
  );
}

export default GoToTopButton;
