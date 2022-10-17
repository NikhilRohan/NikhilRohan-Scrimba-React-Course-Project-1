import React from "react";
import Icon from "/src/assets/React-icon.svg.png";
import "/src/componets/Header Component/Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <img src={Icon} className="reactLogo" />
      <h1 className="reactFactsHeader">ReactFacts</h1>
      <p>Scrimba React Course - Project 1</p>
    </nav>
  );
};

export default Header;
