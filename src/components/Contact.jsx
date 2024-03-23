import React from "react";

const Contact = () => {
  return (
    <div class="ryker_tm_section" id="contact">
      <div class="ryker_tm_contact">
        <div class="container">
          <div class="ryker_tm_title">
            <span>Contact</span>
            <h3>
              Feel free to contact me if any assistance is needed in the future
            </h3>
          </div>
          <div class="short_info wow fadeInUp" data-wow-duration="1.5s">
            <ul>
              <li>
                <div class="list_inner">
                  <div class="logo">
                    <img class="svg" src="img/svg/location-2.svg" alt="" />
                  </div>
                  <div class="info">
                    <h3>Location</h3>
                    <span>123 Ave street, USA</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="list_inner">
                  <div class="logo">
                    <img class="svg" src="img/svg/telephone-2.svg" alt="" />
                  </div>
                  <div class="info">
                    <h3>Phone</h3>
                    <span>+77 022 155 02 02</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="list_inner">
                  <div class="logo">
                    <img class="svg" src="img/svg/email-2.svg" alt="" />
                  </div>
                  <div class="info">
                    <h3>Mail</h3>
                    <span>ryker@gmail.com</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="wrapper">
            <div class="left wow fadeInUp" data-wow-duration="1.5s">
              <div class="fields">
                <form 
                  action="/"
                  method="post"
                  class="contact_form"
                  id="contact_form"
                >
                  <div
                    class="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  ></div>
                  <div class="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div class="first">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Name"
                          autocomplete="off"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Email"
                          autocomplete="off"
                        />
                      </li>
                    </ul>
                  </div>
                  <div class="last">
                    <textarea id="message" placeholder="Message"></textarea>
                  </div>
                  <div class="ryker_tm_button" data-color="dark">
                    <a id="send_message" href="#">
                      Send Message
                    </a>
                  </div>
                    
                  {/* <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  --> */}
                </form>
              </div>
            </div>
            <div
              class="right wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <div class="map_wrap">
                <div class="map" id="ieatmaps"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
