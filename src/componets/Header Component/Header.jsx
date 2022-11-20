import React from "react";
import Icon from "/src/assets/React-icon.svg.png";
import "/src/componets/Header Component/Header.css";
const Header = (props) => {
  return (
    <nav className={`navbar${props.isDarkMode ? " dark" : ""}`}>
      <img src={Icon} className="reactLogo" />
      <h1 className="reactFactsHeader">ReactFacts</h1>
      <div className={`toggle${props.isDarkMode ? " dark" : ""}`}>
        <div style={{ color: props.isDarkMode ? "#918E9B" : "#2B283A" }}>
          Light
        </div>
        <div className="toggle-Slider" onClick={props.toggleMode}>
          <div className="toggle-slider-circle"></div>
        </div>
        <div style={{ color: props.isDarkMode ? "#FFFFFF" : "#D5D4D8" }}>
          Dark
        </div>
      </div>
    </nav>
  );
};

export default Header;
