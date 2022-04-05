import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  useEffect(() => {
    isDarkMode
      ? document.body.classList.add("dark-mode")
      : localStorage.setItem("isDarkMode", false);
  }, [isDarkMode]);

  const darkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
    document.body.classList.toggle("dark-mode");
  };
  return (
    <div className="header">
      <button className="myButton" onClick={() => darkMode()}>
        Change Theme
      </button>
      <Navbar />
    </div>
  );
}

export default App;
