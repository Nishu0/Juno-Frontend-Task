"use client"
import React, { useState } from "react";
import "./style.css";


const Header = () => {
  const [selectedTab, setSelectedTab] = useState("Pending");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleCloseAccount = () => {
    console.log("Closing account...");
  };
  return (
    <div className="header">
      <header className="header-container">
        <div className="header-text">Monitoring</div>
        <div className="tab-bar">
          <div className="background-line" />
          <div className="section">
            <div className="options-selected">Pending</div>
            <div className="highlight" />
          </div>
          <div className="options">
            <div className="div">Completed</div>
          </div>
        </div>
        
        <div className="close">
        
          <img className="icon" alt="X circle" src="x-circle.svg" />
            <div className="label">Close account</div>
            
        </div>
      </header>
      </div>
  );
};

export default Header;