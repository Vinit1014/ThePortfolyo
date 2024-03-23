import React from "react";
import { useGlobalContext } from "../context";

const Copyright = () => {
  const { social } = useGlobalContext();
  return (
    <div class="ryker_tm_section">
      <div class="ryker_tm_copyright">
        <div class="container">
          <div class="copyright_inner">
            <div class="text wow fadeInLeft" data-wow-duration="1.5s">
              <p>Copyright &copy; 2021. All rights are reserved</p>
            </div>
            <div class="social wow fadeInRight" data-wow-duration="1.5s">
              <ul>
                {social.map((data, value) => {
                  return (
                    <li>
                      <a href="#">
                        <img class="svg" src={data.image.url} alt="" />
                      </a>
                    </li>
                  );
                })}
                {/* <li>
                  <a href="#">
                    <img class="svg" src="img/svg/social/twitter.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      class="svg"
                      src="img/svg/social/instagram.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img class="svg" src="img/svg/social/dribbble.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img class="svg" src="img/svg/social/tik-tok.svg" alt="" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
