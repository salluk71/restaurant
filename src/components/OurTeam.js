import React, { Component } from "react";
import Team1 from "../assets/images/about/team/team.jpg";
import Team2 from "../assets/images/about/team/team-2.jpg";
import Team3 from "../assets/images/about/team/team-3.jpg";
export default class OurTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataget: null
    };
  }
  componentDidMount() {
    //const url = "https://randomuser.me/api/";

    const url =
      "https://developers.zomato.com/api/v2.1/categories/ff018d21a18d50daf11afe8f048a6cad";
    // fetch(url)
    //   .then(res => res.json())
    //   .then(response => {
    //     this.setState({
    //       dataget: response.results[0]
    //     });
    //   });

    fetch(url)
      .then(res => res.json())
      .then(response => {
        console.log(response);
      });
  }

  render() {
    // console.log(this.state.dataget);
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
              <div className="row">
                <div className="col-lg-4 col-md-6">
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
                        Lorem ipsum are dolordr sit amet, conbsectetuir
                        adipiscing elit, sed do eiusmod tempor somosha
                        incididunt ut labore et dolore magna aliqua.
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
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-member">
                    <div className="member-overlay-img">
                      <img src={this.state.dataget.picture.large} alt="" />
                      <a
                        href="images/about/team/team-2.jpg"
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
                          {this.state.dataget.name.title +
                            " " +
                            this.state.dataget.name.first}{" "}
                          {this.state.dataget.name.last}
                        </a>
                        <a href="about-us.html#" className="member-post">
                          Special cook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-lg-block d-md-none d-block">
                  <div className="single-member no-margin">
                    <div className="member-overlay-img">
                      <img src={Team3} alt="" />
                      <a
                        href="images/about/team/team-3.jpg"
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
                          REHANA HIRA
                        </a>
                        <a href="about-us.html#" className="member-post">
                          Junior cook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <div>waiting....</div>;
    }
  }
}
