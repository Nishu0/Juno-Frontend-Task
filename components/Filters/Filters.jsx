"use client";
import React, { useState, useRef  } from 'react';
import { useDetectOutsideClick } from "./useDetectOutsideClick.js";
import "./style.css";

const Filter = () => {
    //const { onSearch } = null;
    const triggerReasonRef = useRef(null);
  const riskLevelRef = useRef(null);
  const [isTriggerReasonActive, setTriggerReasonActive] = useDetectOutsideClick(triggerReasonRef, false);
  const [isRiskLevelActive, setRiskLevelActive] = useDetectOutsideClick(riskLevelRef, false);

  const handleTriggerReasonClick = () => {
    setTriggerReasonActive(!isTriggerReasonActive);
    setRiskLevelActive(false); // Close other dropdown if open
  };

  const handleRiskLevelClick = () => {
    setRiskLevelActive(!isRiskLevelActive);
    setTriggerReasonActive(false); // Close other dropdown if open
  };
    const [value, setValue] = useState('Search');

    const searchHandler = (event) => {
        const { target } = event;
        setValue(target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(value);
        }
    };
  return (
    <div className="box">
      <div className="filters">
        <button className="button">
        <img className="search" alt="Search" src="search.svg" />
        <input
                type="Search"
                name="Search"
                placeholder={value}
                className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
                onChange={(event) => searchHandler(event)}
                onKeyDown={handleKeyDown}
            />
          {/* 
          <div className="search-input">
            <div className="search-text">Search</div>
          </div> */}
        </button>
        <div className="filter-reason" onClick={handleTriggerReasonClick}>
          <div className="filter-list" ref={triggerReasonRef}>
            <div className="filter-title">
              Trigger reason
            </div>
            {isTriggerReasonActive && (
              <nav className="menu">
                <ul>
                  <li>
                    <a href="#">Hard Flag</a>
                  </li>
                  <li>
                    <a href="#">Temp Flag</a>
                  </li>
                  <li>
                    <a href="#">Restricted Flag</a>
                  </li>
                  <li>
                    <a href="#">Un Flag</a>
                  </li>
                  <li>
                    <a href="#">Reviewed</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
        <div className="filter-level" onClick={handleRiskLevelClick}>
          <div className="filter-list" ref={riskLevelRef}>
            <div className="filter-title">
              Risk level
            </div>
            {isRiskLevelActive && (
              <nav className="menu2">
                <ul>
                  <li>
                    <a href="#">High</a>
                  </li>
                  <li>
                    <a href="#">Medium</a>
                  </li>
                  <li>
                    <a href="#">Low</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
