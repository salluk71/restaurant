import React, { Component } from "react";
import AboutImg from "../assets/images/about/about.jpg";
import Choose from "../assets/images/choose/choose.jpg";
import OurTeam from "../components/OurTeam";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="breadcrubs">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcurbs-inner text-center">
                  <h3 className="breadcrubs-title">about us</h3>
                  <ul>
                    <li>
                      <a href="index.html">
                        home <span>//</span>
                      </a>
                    </li>
                    <li>about us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resta-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-resta-inner">
                  <div className="about-resta-details">
                    <div className="about-title">
                      <h2>About Our Resta</h2>
                    </div>
                    <div className="about-description">
                      <p className="text-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec aliquet dolor libero, eget do lovess venenatis
                        mauris finibus dictum. Vestibulum quis elit eget neque
                        porttitor no amet dolor. Proin pretium purus a lorem
                        ornare dost love.
                      </p>
                      <p className="text-2">
                        sed lobortis pulvinar. Integer laoreet mi id eros porta
                        euismod. Suspendisse potenti. Nullas eros mauris,
                        convallis et sem tempus, viverra hendrerit sapien Lorem
                        amet, consectetur adipiscing elit. Donec aliquet dolor
                        libero.
                      </p>
                    </div>
                    <div className="see-video">
                      <div className="see-more-video">
                        <h3>see our video dishes</h3>
                      </div>
                      <div className="viedo--play">
                        <a href="about-us.html#">
                          <i className="mdi mdi-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="about-rest-img">
                    <img src={AboutImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fun-factor ptb-100 text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="single-fun-factor">
                  <div className="fun-icon">
                    <a href="about-us.html#">
                      <i className="mdi mdi-silverware"></i>
                    </a>
                    <h2 className="counter">300</h2>
                    <h5>Menu Items</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="single-fun-factor">
                  <div className="fun-icon">
                    <a href="about-us.html#">
                      <i className="mdi mdi-emoticon-happy"></i>
                    </a>
                    <h2 className="counter">600</h2>
                    <h5>Visitor Everyday</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="single-fun-factor">
                  <div className="fun-icon">
                    <a href="about-us.html#">
                      <i className="mdi mdi-human-male-female"></i>
                    </a>
                    <h2 className="counter">400</h2>
                    <h5>Expert Chef</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 d-lg-block d-md-none d-block">
                <div className="single-fun-factor">
                  <div className="fun-icon">
                    <a href="about-us.html#">
                      <i className="fa fa-heart"></i>
                    </a>
                    <h2 className="counter">100</h2>
                    <h5>Test & love</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choose-us">
          <div className="choose-us-top pt-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="section-title white_bg mb-50 text-center">
                    <h2>Why Choose Us ?</h2>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim nostrud exercitation ullamco
                      laboris nisi.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="choose-use-img">
                    <img src={Choose} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="choose-us-desc grey-bg text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="single-choose">
                    <a href="about-us.html#">
                      <i className="fa fa-heart"></i>
                    </a>
                    <h5>clean environment</h5>
                    <p>
                      Lorem ipsoms ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod incididunt ut labore dolore lorem
                      ipsomes.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-choose">
                    <a href="about-us.html#">
                      <i className="mdi mdi-human-male-female"></i>
                    </a>
                    <h5>clean environment</h5>
                    <p>
                      Lorem ipsoms ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod incididunt ut labore dolore lorem
                      ipsomes.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-choose">
                    <a href="about-us.html#">
                      <i className="fa fa-heart"></i>
                    </a>
                    <h5>clean environment</h5>
                    <p>
                      Lorem ipsoms ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod incididunt ut labore dolore lorem
                      ipsomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OurTeam></OurTeam>
      </>
    );
  }
}
