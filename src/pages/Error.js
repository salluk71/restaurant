import React, { Component } from "react";
export default class Error extends Component {
  render() {
    return (
      <>
        <div class="breadcrubs">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="breadcurbs-inner text-center">
                  <h3 class="breadcrubs-title">Our blog</h3>
                  <ul>
                    <li>
                      <a href="index.html">
                        home <span>//</span>
                      </a>
                    </li>
                    <li>404 Error</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-us">
          <div class="contact-information text-center ptb-100">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="single-contact-information">
                    <div class="contact-icon">
                      <a href="contact-us.html#">
                        <i class="mdi mdi-phone"></i>
                      </a>
                    </div>
                    <p>+012 345 678 102</p>
                    <p>+012 345 678 102</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="single-contact-information">
                    <div class="contact-icon">
                      <a href="contact-us.html#">
                        <i class="mdi mdi-dribbble"></i>
                      </a>
                    </div>
                    <p> email@website.com</p>
                    <p>info@example.com</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="single-contact-information">
                    <div class="contact-icon">
                      <a href="contact-us.html#">
                        <i class="mdi mdi-map-marker"></i>
                      </a>
                    </div>
                    <p>Address goes here,</p>
                    <p>street,Crossroad123.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-bottom-section ptb-100">
            <div class="bg-img"></div>
          </div>
        </div>
      </>
    );
  }
}
