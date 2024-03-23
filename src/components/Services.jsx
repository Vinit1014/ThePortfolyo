import React, { useState, useEffect } from "react";
import { Slider } from "@nextui-org/react";
import Slidercomp from "./Slidercomp";
import { useGlobalContext } from "../context";

const Services = () => {
  const [servicesData, setServices] = useState();
  const { services, skills } = useGlobalContext();

  useEffect(() => {
    setServices(services);
  }, []);
  useEffect(() => {
    console.log("Yeppy I fetched data from context " + services);
  }, [servicesData]);

  return (
    <div class="ryker_tm_section" id="service">
      <div class="ryker_tm_services">
        <div class="container">
          <div class="services_inner">
            <div class="left">
              <div class="ryker_tm_title">
                <span>Services</span>
                <h3>I offer a Full-cycle of Web Development Services</h3>
              </div>
              <div class="text">
                <p>
                  For more than 20 years our experts have been accomplishing
                  enough with modern Web Development, new generation programming
                  language, and Full Stack developers to deliver cost-effective
                  solutions.
                </p>
              </div>
              <div class="ryker_progress grid grid-rows-5 grid-flow-col gap-4">
                {skills.map((data, index) => {
                  return (
                    <Slidercomp value={data.name} number={data.percentage} />
                  );
                })}
              </div>
            </div>
            <div class="right grid grid-rows-3 grid-flow-col gap-6">
              {services.map((data, index) => {
                return (
                  <div class="list_inner">
                    <img class="svg" src={data.image.url} alt="" />
                    <h3 class="title">{data.name}</h3>
                  </div>
                );
              })}
              {/* <div class="list_inner">
                <img class="svg" src="img/svg/tools.svg" alt="" />
                <h3 class="title">Maintain</h3>
              </div>
              <div class="mb-8 list_inner">
                <img class="h-10 svg" src="img/svg/code.svg" alt="" />
                <h3 class="title">Development</h3>
              </div>
              <div class="list_inner">
                <img class="svg" src="img/svg/award.svg" alt="" />
                <h3 class="title">Quality</h3>
              </div> */}
              {/* <ul class="grid grid-rows-4 grid-flow-col gap-0">
                <li class=" wow fadeInUp" data-wow-duration="1.5s">
                  <div class="list_inner">
                    <img class="svg" src="img/svg/design.svg" alt="" />
                    <h3 class="title">Design</h3>
                  </div>
                </li>
                <li
                  class="grid-item wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                  <div class="list_inner">
                    <img class="svg" src="img/svg/code.svg" alt="" />
                    <h3 class="title">Development</h3>
                  </div>
                >
                </li>
                <li
                  class="grid-item wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <div class="list_inner">
                    <img class="svg" src="img/svg/award.svg" alt="" />
                    <h3 class="title">Quality</h3>
                  </div>
                </li>
                <li class="grid-item wow fadeInUp" data-wow-duration="1.5s">
                  <div class="list_inner">
                    <img class="svg" src="img/svg/tools.svg" alt="" />
                    <h3 class="title">Maintain</h3>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
