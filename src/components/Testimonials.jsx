import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSpring, animated } from "@react-spring/web";
import { useGlobalContext } from "../context";

const Testimonials = () => {
  const { testimonials } = useGlobalContext();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: 20000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div class="ryker_tm_section">
      <div class="ryker_tm_testimonials">
        <div id="grouploop">
          <div class="item-wrap">
            <div class="item">
              <div key={key}>
                <animated.div style={scrolling}>
                  <span>Testimonials</span>
                </animated.div>
                )
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="testimonials_list">
            <div class="wrapper ">
              {/* <h1>Hello</h1> */}
              <Carousel
                // autoPlay={true}
                // autoPlaySpeed={1400}
                removeArrowOnDeviceType={[
                  "tablet",
                  "mobile",
                  "desktop",
                  "superLargeDesktop",
                ]}
                // draggable={true}
                swipeable={true}
                transitionDuration={500}
                customTransition="all .5"
                showDots={true}
                responsive={responsive}
              >
                {testimonials.map((data, key) => {
                  return (
                    <div class="wr_in item">
                      <div class="list_inner">
                        <ul class="stars">
                          <li>
                            <img
                              class="svg"
                              src="../../img/svg/star.svg"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              class="svg"
                              src="../../img/svg/star.svg"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              class="svg"
                              src="../../img/svg/star.svg"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              class="svg"
                              src="../../img/svg/star.svg"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              class="svg"
                              src="../../img/svg/star.svg"
                              alt=""
                            />
                          </li>
                        </ul>
                        <div class="text">
                          <p>{data.review}</p>
                        </div>
                        <div class="details">
                          <h3 class="author">
                            <span>{data.name}</span>
                          </h3>
                          <h3 class="job">
                            <span>{data.position}</span>
                          </h3>
                        </div>
                        <div class="avatar">
                          <img src={data.image.url} alt="Image"></img>
                          <div
                            class="image"
                            data-img-url={data.image.url}
                          ></div>
                        </div>
                        <img
                          class="svg myquote"
                          src="../../img/svg/quote.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
