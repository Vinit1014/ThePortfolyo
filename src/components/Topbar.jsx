import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

import sound1 from "/audio/1.mp3";
import sound2 from "/audio/1.mp3";

const Topbar = () => {
  const [isOpen, setOpen] = useState(false);
  let audio = new Audio("/audio/1.mp3");
  let audio2 = new Audio("/audio/2.mp3");

  const start = () => {
    isOpen ? audio2.play() : audio.play()
  }

  return (
    <div className="ryker_tm_topbar">
      <div className="topbar_inner">
        <div className="logo">
          <a href="#">
            <img src="img/logo/dark.png" alt="" />
          </a>
        </div>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <div className="list">
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="anchor_nav"
            >
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
            </motion.ul>
          </div>
          <button onClick={start}>
            <Hamburger
              toggled={isOpen}
              color="black"
              toggle={setOpen}
            ></Hamburger>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
