import React, { Component } from "react";
import Team1 from "../assets/images/about/team/team.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default class OurTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataget: null
    };
    const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=19320309&apikey=ff018d21a18d50daf11afe8f048a6cad`;
    fetch(url)
      .then(res => res.json())
      .then(response => {
        this.setState({
          dataget: response
        });
      });
  }

  render() {
    if (this.state.dataget) {
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
              <OwlCarousel className="owl-theme" items={1} loop margin={0} nav>
                <div className="single-member">
                  <div className="member-overlay-img">
                    <img src={Team1} alt="" />
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
                      Lorem ipsum are dolordr sit amet, conbsectetuir adipiscing
                      elit, sed do eiusmod tempor somosha incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                    <div className="member-tag">
                      <a href="about-us.html#" className="member-name">
                        ASKAR ALI
                      </a>
                      <a href="about-us.html#" className="member-post">
                        Chef cook
                      </a>
                    </div>
                  </div>
                </div>
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
