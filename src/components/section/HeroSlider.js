import React from "react";
import {
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "swiper/css";
import HeroFrom from "./HeroFrom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
const HeroSlider = () => {
  return (
    <>
      <div className="banner-form-wrapper">
        <div className="banner-form">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="search-filter row no-gutters box-shadow sm-tb-40px">
                  <div className="filter-tabs  col-lg-5 background-second-color">
                    <img
                      className="hidden-xs"
                      src="http://placehold.it/200x130"
                      alt=""
                    />
                    <ul className="nav nav-tabs flex-column" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                        >
                          <i className="fa fa-hotel"></i> Hotels
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                        >
                          <i className="fa fa-plane"></i> Flights
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#messages"
                          role="tab"
                        >
                          <i className="fa fa-cab"></i> Cars
                        </a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="filter-output booking-form-box col-lg-7">
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content  padding-30px background-white">
                      <div
                        className="tab-pane active"
                        id="home"
                        role="tabpanel"
                      >
                        <div className="form-group margin-bottom-5px">
                          <label>Destination</label>
                          <div className="destination">
                            <input
                              type="text"
                              className="input-text full-width"
                              placeholder="Enter Destination"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-5px">
                          <label>Check Out</label>
                          <div className="date-input">
                            <input
                              type="text"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-5px">
                          <label>Check Out</label>
                          <div className="date-input">
                            <input
                              type="text"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <div className="row margin-bottom-10px">
                          <div className="form-group col">
                            <label>Rooms</label>
                            <div className="rooms">
                              <input
                                type="text"
                                className="input-text full-width"
                                placeholder="1"
                              />
                            </div>
                          </div>
                          <div className="form-group col">
                            <label>Children</label>
                            <div className="children">
                              <input
                                type="text"
                                className="input-text full-width"
                                placeholder="0"
                              />
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
                        >
                          <i className="fa fa-search"></i> Hotel Search
                        </a>
                      </div>
                      <div className="tab-pane" id="profile" role="tabpanel">
                        {/* <!-- ====== Flights ====== --> */}
                        <div className="form-group margin-bottom-5px">
                          <label>Flying from:</label>
                          <div className="destination">
                            <input
                              type="text"
                              className="input-text full-width"
                              placeholder="Flying from"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-5px">
                          <label>Flying to:</label>
                          <div className="destination">
                            <input
                              type="text"
                              className="input-text full-width"
                              placeholder="Flying to"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-5px">
                          <label>Departing:</label>
                          <div className="date-input">
                            <input
                              type="text"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-25px">
                          <label>Returning:</label>
                          <div className="date-input">
                            <input
                              type="text"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
                        >
                          <i className="fa fa-search"></i> Flights Search
                        </a>
                        {/* <!-- ====== //  Flights ====== --> */}
                      </div>
                      <div className="tab-pane" id="messages" role="tabpanel">
                        {/* <!-- ====== Cars ====== --> */}
                        <div className="form-group  margin-bottom-5px">
                          <label>Location:</label>
                          <div className="destination">
                            <input
                              type="text"
                              className="input-text full-width"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                        <div className="form-group  margin-bottom-5px">
                          <label>Type of car :</label>
                          <div className="destination">
                            <input
                              type="text"
                              className="input-text full-width"
                              placeholder="Type of car"
                            />
                          </div>
                        </div>
                        <div className="form-group  margin-bottom-5px">
                          <label>Pick up Date:</label>
                          <div className="date-input">
                            <input
                              type="text"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-25px">
                          <label>Drop off Date:</label>
                          <div className="date-input">
                            <input
                              type="text"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
                        >
                          <i className="fa fa-search"></i> Cars Search
                        </a>
                        {/* <!-- ====== //  Cars ====== --> */}
                      </div>
                    </div>
                    {/* <!-- Tab panes --> */}
                    <div className="clearfix"></div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
