import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
export default class GetRestaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      isFound: true
    };

    let lat = null;
    let long = null;
    navigator.geolocation.getCurrentPosition(
      location => {
        if (location) {
          lat = location.coords.latitude;
          long = location.coords.longitude;
          const url = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${long}&apikey=ff018d21a18d50daf11afe8f048a6cad`;
          fetch(url)
            .then(res => {
              return res.json();
            })
            .then(data => {
              if (data.results_found) {
                this.setState({
                  isLoading: false,
                  data: data.restaurants,
                  isFound: true
                });
              } else {
                this.setState({
                  isLoading: false,
                  isFound: false
                });
              }
            });
        }
      },
      rejected => {
        this.setState({
          isLoading: false,
          isFound: false
        });
      }
    );
  }

  render() {
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
    if (!this.state.isFound) {
      return (
        <>
          <div className="text-center">Oops Not found</div>
        </>
      );
    }

    let res = this.state.data.map((value, i) => {
      return (
        <React.Fragment key={i}>
          <div style={{ height: "600px" }}>
            <div className="single-disesh">
              <div className="disesh-img">
                <Link to={"/" + value.restaurant.R.res_id}>
                  <img
                    style={{ maxHeight: "400px" }}
                    src={value.restaurant.featured_image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="disesh-desc pt-50">
                <h3>
                  <Link to={"/" + value.restaurant.R.res_id}>
                    {value.restaurant.name}
                  </Link>
                </h3>
                <p className="">{value.restaurant.location.address}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });

    return (
      <>
        <div className="popular-dishes">
          <div className="bg-img-2 ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="section-title text-center grey_bg">
                    <h2>Restaurant in your location</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim nostrud exercitation ullamco
                      laboris nisi.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="dises-list">
                        <OwlCarousel
                          className="owl-theme text-center"
                          items={1}
                          loop
                          margin={30}
                          nav
                        >
                          {res}
                        </OwlCarousel>
                      </div>
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
