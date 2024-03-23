import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Topbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="ryker_tm_topbar">
      <div className="topbar_inner">
        <div className="logo">
          <a href="#">
            <img src="img/logo/dark.png" alt="" />
          </a>
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <div className="list">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <Hamburger toggled={isOpen} color="black" toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
