import "./App.css";
import Header from "/src/componets/Header Component/Header";
import MainContent from "/src/componets/Main Component/MainContent";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleMode() {
    setDarkMode((prevDarkMode) => {
      return !prevDarkMode;
    });
  }
  return (
    <div className={`container${darkMode ? " dark" : ""}`}>
      <Header isDarkMode={darkMode} toggleMode={toggleMode} />
      <MainContent isDarkMode={darkMode} />
    </div>
  );
}

export default App;
