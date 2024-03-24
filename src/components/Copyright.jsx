import React from "react";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";

const Copyright = () => {
  const { social } = useGlobalContext();
  return (
    <div class="ryker_tm_section">
      <div class="ryker_tm_copyright">
        <div class="container">
          <div class="copyright_inner">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              class="text wow fadeInLeft"
              data-wow-duration="1.5s"
            >
              <p>Copyright &copy; 2021. All rights are reserved</p>
            </motion.div>
            <div class="social wow fadeInRight" data-wow-duration="1.5s">
              <ul>
                {social.map((data, value) => {
                  return (
                    <motion.li
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <a href="#">
                        <img class="svg" src={data.image.url} alt="" />
                      </a>
                    </motion.li>
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

export default Copyright;
