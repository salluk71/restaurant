import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Choose from "../assets/images/choose/choose.jpg";
import OurTeam from "../components/OurTeam";

export default class Restaurant extends Component {
  state = {
    data: null,
    isLoading: true,
    found: false,
    review: null
  };

  componentDidMount() {
    const res_id = this.props.match.params.restaurant;
    const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${res_id}&apikey=ff018d21a18d50daf11afe8f048a6cad`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data != null) {
          this.setState({
            data: data,
            isLoading: false,
            found: true
          });
        }
      });

    const review = `https://developers.zomato.com/api/v2.1/reviews?res_id=${res_id}&start=0&count=100&apikey=ff018d21a18d50daf11afe8f048a6cad`;
    fetch(review)
      .then(res2 => res2.json())
      .then(data2 => {
        if (data2.reviews_count) {
          this.setState({
            review: data2.user_reviews
          });
        }
      });
  }

  render() {
    if (this.state.review) {
      var userreview = this.state.review.map((item, index) => {
        return (
          <div className="single-choose" key={index}>
            <img
              className="img-thumbnail img-fluid w-25 mx-auto"
              src={item.review.user.profile_image}
              alt={1}
            />
            <h5>{item.review.user.name}</h5>
            <p>{item.review.review_text}</p>
          </div>
        );
      });
    } else {
      return (
        <>
          <div className="preloader">
            <div className="loading-center">
              <div className="loading-center-absolute">
                <div className="object object_one"></div>
                <div className="object object_two"></div>
                <div className="object object_three"></div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (this.state.isLoading) {
      return (
        <>
          <div className="preloader">
            <div className="loading-center">
              <div className="loading-center-absolute">
                <div className="object object_one"></div>
                <div className="object object_two"></div>
                <div className="object object_three"></div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="breadcrubs">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcurbs-inner text-center">
                  <h3 className="breadcrubs-title">{this.state.data.name}</h3>
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
                    <img src={this.state.data.featured_image} alt="" />
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
                    <h2>User Review</h2>
                    <p>
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
              <OwlCarousel items={2} loop margin={30} nav>
                {userreview}
              </OwlCarousel>
            </div>
          </div>
        </div>

        <OurTeam teams={this.state.data.photos}></OurTeam>
      </>
    );
  }
}
