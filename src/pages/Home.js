import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Slide1 from "../assets/images/slider/1.jpg";
import Slide2 from "../assets/images/slider/2.jpg";
import Slide3 from "../assets/images/slider/3.jpg";
import Home_about from "../assets/images/about/home-about.jpg";

import Dishes from "../components/GetRestaurants";

import Food1 from "../assets/images/food/01.png";
import Food2 from "../assets/images/food/2.png";
import Food3 from "../assets/images/food/3.png";
import Food4 from "../assets/images/food/4.png";
import Food5 from "../assets/images/food/5.png";
import Food6 from "../assets/images/food/6.png";
import Food7 from "../assets/images/food/7.png";
import Food8 from "../assets/images/food/8.png";

import Gallery1 from "../assets/images/gallery/1.jpg";
import Gallery2 from "../assets/images/gallery/2.jpg";
import Gallery3 from "../assets/images/gallery/3.jpg";
import Gallery4 from "../assets/images/gallery/4.jpg";
import Gallery5 from "../assets/images/gallery/5.jpg";
import Gallery6 from "../assets/images/gallery/6.jpg";

export default class Home extends Component {
  render() {
    console.log(this.props.popular_dishes);
    return (
      <>
        <div className="slider-container">
          <OwlCarousel className="owl-theme" items={1} loop margin={0} nav>
            <img
              src={Slide1}
              alt=""
              title="#htmlcaption1"
              className="img-fluid"
            />
            <img
              src={Slide2}
              alt=""
              title="#htmlcaption1"
              className="img-fluid"
            />
            <img
              src={Slide3}
              alt=""
              title="#htmlcaption1"
              className="img-fluid"
            />
          </OwlCarousel>
        </div>
        <div className="home-about white-bg ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="welcome-about">
                  <h2 className="title_1">About Fida Restaurant </h2>
                  <h3 className="title_2">
                    Vestibulum quis elit eget neque porttitor no amet dolor.
                    Proin pretiumss.
                  </h3>
                  <p className="text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec aliquet dolor libero, eget loved dost venenatis mauris
                    finibus dictum. Vestibulum quis elit eget neque porttitor no
                    amet dolor. Proin pretium purus a lorem ornare
                  </p>
                  <p className="text2">
                    sed lobortis pulvinar. Integer laoreet mi id eros porta
                    euismod. Suspendisse potenti. Nulla eros dost mauris,
                    convallis et sem tempus, viverra hendrerit sapien Lorem
                    amet, consectetur adipiscing elit. Donec aliquet dolor
                    libero,
                  </p>
                  <div className="read-more">
                    <a href="index.html#">read more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="welcome-about-img">
                  <img src={Home_about} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dishes></Dishes>
        <div className="food-menu white-bg ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="section-title mb-50 text-center white_bg">
                  <h2 className="mb-50">Our Food Menu</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim nostrud exercitation ullamco
                    laboris nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="food-item-tab home-page row">
              <div className="col-lg-12">
                <div className="foode-item-box fix mb-60">
                  <ul className="nav foode-item_nav" role="tablist">
                    <li role="presentation">
                      <a
                        href="index.html#tab1"
                        aria-controls="tab1"
                        data-toggle="tab"
                      >
                        All item
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="index.html#tab2"
                        aria-controls="tab2"
                        data-toggle="tab"
                      >
                        br/eakfast
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="index.html#tab3"
                        aria-controls="tab3"
                        data-toggle="tab"
                      >
                        lunch
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        className="active"
                        aria-controls="tab4"
                        href="index.html#tab4"
                        data-toggle="tab"
                      >
                        dinner
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="index.html#tab5"
                        aria-controls="tab5"
                        data-toggle="tab"
                      >
                        drink
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="index.html#tab6"
                        aria-controls="tab6"
                        data-toggle="tab"
                      >
                        party
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="index.html#tab7"
                        aria-controls="tab7"
                        data-toggle="tab"
                      >
                        coffee
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="food-item-desc">
                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane" id="tab1">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_left">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food1} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food2} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food3} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food4} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_right">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food5} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food6} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food7} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food8} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="tab2">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_left">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food4} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food3} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food2} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food1} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_right">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food8} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food7} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food5} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food6} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="tab3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_left">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food1} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food2} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food3} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food4} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_right">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food5} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food6} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food7} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food8} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane active" id="tab4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_left">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food1} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food2} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food3} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food4} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_right">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food5} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food6} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food7} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food8} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="tab5">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_left">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food1} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food4} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food2} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food3} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_right">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food8} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food7} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food6} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food5} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="tab6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_left">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food1} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food2} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food3} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food4} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_right">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food5} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food6} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food7} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food8} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="tab7">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_left">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food4} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food1} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food2} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food3} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="fooder-menu-description float_right">
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food8} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food5} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item mb-30">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food7} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="single-food-item">
                              <div className="single-food-inner">
                                <div className="food-img">
                                  <img src={Food6} alt="" />
                                </div>
                                <div className="single-food-item-desc">
                                  <div className="single-food-item-title">
                                    <h2>
                                      <a href="index.html#">
                                        Fried Potatoes With Garlic
                                      </a>
                                    </h2>
                                    <p>Mushroom / Garlic / Veggies</p>
                                  </div>
                                  <div className="single-food-price">
                                    <p>$100</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-gallery">
          <div className="bg-img-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="section-title grey_bg mb-50 text-center">
                    <h2 className="mb-50">our gallery</h2>
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
                  <div className="gallery-menu fix text-center mb-60">
                    <ul>
                      <li className="active" data-filter="*">
                        all
                      </li>
                      <li data-filter=".desert">desert</li>
                      <li data-filter=".coffee">coffee</li>
                      <li data-filter=".drink">drink</li>
                      <li data-filter=".catering">catering services</li>
                    </ul>
                  </div>
                  <div className="gallery-item-box row">
                    <div className="col-lg-4 col-md-6 gallery-item desert drink mb-30">
                      <div className="single-item-gallery">
                        <a href="images/gallery/1.jpg">
                          <span className="plus">
                            <i className="mdi mdi-plus"></i>
                          </span>
                        </a>
                        <img src={Gallery1} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 gallery-item coffee catering mb-30">
                      <div className="single-item-gallery">
                        <a href="images/gallery/2.jpg">
                          <span className="plus">
                            <i className="mdi mdi-plus"></i>
                          </span>
                        </a>
                        <img src={Gallery2} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 gallery-item desert drink mb-30">
                      <div className="single-item-gallery">
                        <a href="images/gallery/3.jpg">
                          <span className="plus">
                            <i className="mdi mdi-plus"></i>
                          </span>
                        </a>
                        <img src={Gallery3} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 gallery-item coffee catering mb-30">
                      <div className="single-item-gallery">
                        <a href="images/gallery/3.jpg">
                          <span className="plus">
                            <i className="mdi mdi-plus"></i>
                          </span>
                        </a>
                        <img src={Gallery4} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 gallery-item coffee drink catering mb-30">
                      <div className="single-item-gallery">
                        <a href="images/gallery/5.jpg">
                          <span className="plus">
                            <i className="mdi mdi-plus"></i>
                          </span>
                        </a>
                        <img src={Gallery5} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 gallery-item desert catering mb-30">
                      <div className="single-item-gallery">
                        <a href="images/gallery/6.jpg">
                          <span className="plus">
                            <i className="mdi mdi-plus"></i>
                          </span>
                        </a>
                        <img src={Gallery6} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reservation ptb-100 white-bg">
          <div className="bg-img-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="section-title white_bg mb-50 text-center">
                    <h2 className="mb-50">Make A Reservation</h2>
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
                  <div className="reserv-section-inner">
                    <div className="bg-img"></div>
                    <div className="reserve-form">
                      <h3 className="reserv-title mb-60">Reservation Form</h3>
                      <form action="#">
                        <div className="reserve-form-top">
                          <input type="text" placeholder="FUll name" />
                          <input type="text" placeholder="Email address" />
                          <input type="text" placeholder="Mobile number" />
                          <div className="date-time">
                            <select defaultValue={"DEFAULT"}>
                              <option value="DEFAULT">
                                Select Date And Time
                              </option>
                              <option>26Dec-10.00pm</option>
                              <option>2Jan-10.00pm</option>
                              <option>17Dec-10.00pm</option>
                            </select>
                          </div>
                        </div>
                        <div className="reserve-submit mt-40">
                          <button type="submit">submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="offer-section fix">
          <div className="bg-img ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="offer-inner text-center">
                    <h2 className="ttle1">50% Off</h2>
                    <h2 className="ttle2">our Vegetable Soap</h2>
                    <p>
                      Lorem ipsum Newaz dolor sit amet, consectetur adipiscing
                      elit. Donec aliquet dolor libero, eget loved dost
                      venenatis maurisfinibus dictumss. Vestibulum quis elit
                      eget neque porttitor no amet dolor. Proin pretium purus a
                      lorem obortis pulvinar. Integer laoreet mi id eros porta
                      euismod. Suspendisse potenti. Nulla eros
                    </p>
                    <div className="order-now">
                      <a href="/">order now</a>
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
