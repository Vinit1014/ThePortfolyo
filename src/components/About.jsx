import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
const About = () => {
  const [aboutData, setAbout] = useState({});
  const { about } = useGlobalContext();
  // console.log("I fetched data " + about);
  useEffect(() => {
    setAbout(about);
  }, []);
  useEffect(() => {
    console.log("Yeppy I fetched data from context " + aboutData.name);
  }, [aboutData]);
  return (
    <div class="ryker_tm_section" id="about">
      <div class="ryker_tm_about">
        <div class="container">
          <div class="about_inner">
            <div class="left wow fadeInLeft" data-wow-duration="1.5s">
              <div class="image">
                <img src="../../img/thumbs/1-1.jpg" alt="" />
                <div class="main" data-img-url="../../img/about/2.jpg">
                  <img src="../../img/about/2.jpg" alt="why not coming"></img>
                </div>
                <div class="experience">
                  <h3 class="year" data-img-url="../../img/about/2.jpg">
                    7
                  </h3>
                  <div id="circle">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="300px"
                      height="300px"
                      viewBox="0 0 300 300"
                      enable-background="new 0 0 300 300"
                      xml:space="preserve"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                        />
                      </defs>
                      <circle cx="150" cy="100" r="75" fill="none" />
                      <g>
                        <use xlink:href="#circlePath" fill="none" />
                        <text fill="#000">
                          <textpath xlink:href="#circlePath">
                            Years of best and successful work experience
                          </textpath>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="right wow fadeInRight" data-wow-duration="1.5s">
              <div class="ryker_tm_title">
                <span>About Me</span>
                <h3>{about.subTitle}</h3>
              </div>
              <div class="text">
                <p>{about.description}</p>
              </div>
              <div class="signature">
                <img src="img/signature.png" alt="" />
              </div>
              <div class="ryker_tm_button">
                <a href="#">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
