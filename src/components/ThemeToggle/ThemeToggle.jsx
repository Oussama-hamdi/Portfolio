import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js";
import "./ThemeToggle.css"; // Import CSS file for styles

//TODO: Make the themeToggle draggable on mobile devices
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const [dragging, setDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [maxTop, setMaxTop] = useState(0);
  const [maxBottom, setMaxBottom] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        e.preventDefault();
        const newOffsetY = offsetY + e.clientY - startY;
        const clampedOffsetY = Math.min(
          maxBottom,
          Math.max(maxTop, newOffsetY)
        );
        document.querySelector(
          ".icon-container"
        ).style.top = `${clampedOffsetY}px`;
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offsetY, startY, maxTop, maxBottom]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "light") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartY(e.clientY);
    setOffsetY(e.currentTarget.getBoundingClientRect().top);
    setMaxTop(0);
    setMaxBottom(window.innerHeight - e.currentTarget.offsetHeight);
  };

  return (
    <div
      className={`icon-container ${theme}`}
      onClick={toggleTheme}
      onMouseDown={handleMouseDown}
    >
      <Icon
        path={mdiWhiteBalanceSunny}
        size={1}
        className={`sun-icon ${theme === "light" ? "visible" : ""}`}
      />
      <Icon
        path={mdiWeatherNight}
        size={1}
        className={`dark-mode-icon ${theme === "dark" ? "visible" : ""}`}
      />
    </div>
  );
};

export default ThemeToggle;
