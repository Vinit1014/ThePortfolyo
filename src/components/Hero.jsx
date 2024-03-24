import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const Hero = () => {
  const [aboutData, setAbout] = useState({});
  const { about, skills } = useGlobalContext();
  // console.log("I fetched data " + about);
  useEffect(() => {
    setAbout(about);
  }, []);
  useEffect(() => {
    console.log("Yeppy I fetched data from context " + aboutData.name);
  }, [aboutData]);
  return (
    <div class="ryker_tm_section" id="home">
      <div class="ryker_tm_hero">
        <div class="container">
          <div class="content">
            <div class="texts">
              <div class="job">
                <video playsinline autoplay muted loop>
                  <source src="video/1.mp4" type="video/mp4" />
                </video>
                <h3>{aboutData.title}</h3>
              </div>
              <div class="desc">
                <p>
                  Hi, I'm {aboutData.name}. A passionate {aboutData.title} based
                  In NYC, USA. {aboutData.subTitle}
                </p>
              </div>
              <div class="short_skills">
                <div class="text">
                  <span>
                    High knowledge on
                    <br />
                    softwares
                  </span>
                </div>
                <div class="icons">
                  <ul className="grid grid-rows-3 grid-flow-col gap-0">
                    {skills.map((data, key) => {
                      return (
                        <li>
                          <img class="svg" src={data.image.url} alt="" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div class="avatar">
              <img className="image" src={about.avatar.url} alt="John Doe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
