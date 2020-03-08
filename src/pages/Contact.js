import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="breadcrubs">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcurbs-inner text-center">
                  <h3 className="breadcrubs-title">Our blog</h3>
                  <ul>
                    <li>
                      <a href="index.html">
                        home <span>//</span>
                      </a>
                    </li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <div className="contact-information text-center ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="single-contact-information">
                    <div className="contact-icon">
                      <a href="contact-us.html#">
                        <i className="mdi mdi-phone"></i>
                      </a>
                    </div>
                    <p>+012 345 678 102</p>
                    <p>+012 345 678 102</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-contact-information">
                    <div className="contact-icon">
                      <a href="contact-us.html#">
                        <i className="mdi mdi-dribbble"></i>
                      </a>
                    </div>
                    <p> email@website.com</p>
                    <p>info@example.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-contact-information">
                    <div className="contact-icon">
                      <a href="contact-us.html#">
                        <i className="mdi mdi-map-marker"></i>
                      </a>
                    </div>
                    <p>Address goes here,</p>
                    <p>street,Crossroad123.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-bottom-section ptb-100">
            <div className="bg-img"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 contact-form-div">
                  <div className="contact-form">
                    <div className="contact-form-title">
                      <h2>Get In Touch</h2>
                    </div>
                    <div className="contact-form-box">
                      <p className="form-messege"></p>
                      <form id="contact-form" action="mail.php" method="post">
                        <input name="name" type="text" placeholder="Name" />
                        <input name="email" type="text" placeholder="Email" />
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 map-div">
                  <div id="contact-map" className="map-area">
                    <div
                      id="googleMap"
                      style={{ width: "100%", height: "480px" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.480150626227!2d77.29586645!3d28.57366505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce463ada00845%3A0x51e92a37c79adf2d!2sSenior%20Superintendent%20of%20Police!5e0!3m2!1sen!2sin!4v1583675738630!5m2!1sen!2sin"
                        frameBorder={0}
                        allowFullScreen
                        style={{ border: "0", height: "480px", width: "100%" }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
