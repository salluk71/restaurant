import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default class OurTeam extends Component {
  render() {
    if (this.props.teams.length) {
      return (
        <>
          <div className="our-team-area ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="section-title white_bg mb-50 text-center">
                    <h2>Our Lovely team</h2>
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
              <OwlCarousel className="owl-theme" items={3} loop margin={30} nav>
                {this.props.teams.map(item => {
                  return (
                    <div className="single-member" key={item.photo.id}>
                      <div className="member-overlay-img">
                        <img src={item.photo.thumb_url} alt="" />
                        <a
                          href="images/about/team/team.jpg"
                          className="member-overlay"
                        >
                          <i className="mdi mdi-plus"></i>
                        </a>
                        <div className="socail-icon">
                          <ul>
                            <li>
                              <a href="about-us.html#">
                                <i className="mdi mdi-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="about-us.html#">
                                <i className="mdi mdi-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="about-us.html#">
                                <i className="mdi mdi-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="about-us.html#">
                                <i className="mdi mdi-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="member-content">
                        <p>
                          Lorem ipsum are dolordr sit amet, conbsectetuir
                          adipiscing elit, sed do eiusmod tempor somosha
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="member-tag">
                          <a href="about-us.html#" className="member-name">
                            {item.photo.user.name}
                          </a>
                          <a href="about-us.html#" className="member-post">
                            Chef cook
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </>
      );
    } else {
      return <div>waiting....</div>;
    }
  }
}
