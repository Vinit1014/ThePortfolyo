import React from "react";
import { useGlobalContext } from "../context";

const Portfolio = () => {
  const { projects } = useGlobalContext();
  console.log(projects);
  return (
    <div class="ryker_tm_section" id="portfolio">
      <div class="ryker_tm_portfolio">
        <div class="container">
          <div class="portfolio_inner">
            <div class="ryker_tm_title">
              <span>Portfolio</span>
              <h3>Each project is a unique piece of development</h3>
            </div>
            <div class="portfolio_list">
              <ul class="gallery_zoom">
                {projects.map((data, index) => {
                  return (
                    <li class="wow fadeInUp" data-wow-duration="1.5s">
                      <div class="list_inner">
                        <div class="image">
                          <img src={data.image.url} alt="" />
                          <div class="main" data-img-url={data.image.url}></div>
                        </div>
                        <div class="overlay"></div>
                        <div class="details">
                          <h3>{data.title}</h3>
                          {data.techStack?.map((data1, index) => {
                            return <span>{data1}</span>;
                          })}
                        </div>
                        <a
                          class="ryker_tm_full_link popup-vimeo"
                          href={data.liveurl}
                        ></a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
