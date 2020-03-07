import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import jQuery from "jquery";
import "../assets/css/core.css";
import "../assets/css/style.css";
// import "../../node_modules/timecircles/inc/TimeCircles.css";
// import "../../node_modules/timecircles/inc/TimeCircles.js";
// import "../assets/js/jquery.magnific-popup.js";
// import "../assets/js/jquery.counterup.min.js";
// import "../assets/js/waypoints.min.js";
// import "../assets/js/style-customizer.js";
// import "../assets/js/plugins.js";
// import "../assets/js/timecircles.js";
// import "../assets/js/main.js";

import LOGO from "../assets/images/logo/logo.png";
export default class Header extends Component {
  render() {
    return (
      <>
        {/* <div className="preloader">
          <div className="loading-center">
            <div className="loading-center-absolute">
              <div className="object object_one"></div>
              <div className="object object_two"></div>
              <div className="object object_three"></div>
            </div>
          </div>
        </div> */}

        <div className="wrapper white-bg">
          <div className="header sticky-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-6">
                  <div className="logo">
                    <Link to="/">
                      <img src={LOGO} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-6">
                  <div className="mgea-full-width">
                    <div className="header-right">
                      <div className="header-menu d-none d-lg-block">
                        <div className="menu">
                          <ul>
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/about">about js</Link>
                            </li>
                            <li>
                              <Link to="/gallery">gallery</Link>
                            </li>
                            <li>
                              <Link to="/blog">blog</Link>
                            </li>
                            <li>
                              <Link to="/contact">contact</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="search">
                        <div className="search-inner">
                          <a href="index.html#">
                            <i className="mdi mdi-magnify"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="search-inside" style={{ display: "none" }}>
                      <a href="index.html#" className="search-close">
                        <i className="mdi mdi-close"></i>
                      </a>
                      <div className="search-overlay"></div>
                      <div className="searchbar-inner">
                        <div className="search">
                          <form action="#">
                            <input type="search" placeholder="Search here" />
                            <button type="submit">
                              <i className="mdi mdi-magnify"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-menu-area d-block d-lg-none">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <nav id="dropdown">
                      <ul>
                        <li>
                          <a href="index.html#">Home</a>
                          <ul className="dropdown_menu">
                            <li>
                              <a href="index.html">home page one</a>
                            </li>
                            <li>
                              <a href="index-2.html">home page two</a>
                            </li>
                            <li>
                              <a href="index-3.html">home page three</a>
                            </li>
                            <li>
                              <a href="index-4.html">home page four</a>
                            </li>
                            <li>
                              <a href="index-box.html">home page five</a>
                            </li>
                            <li>
                              <a href="index-box-fixed.html">home page six</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about-us.html">about</a>
                        </li>

                        <li>
                          <a href="gallery.html">gallery</a>
                        </li>
                        <li>
                          <a href="index.html#">pricing</a>
                        </li>
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="contact-us.html">contact</a>
                        </li>
                      </ul>
                    </nav>
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
