import React, { useState } from "react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
const HeroSlider = () => {
  const [activeFrom, setActiveFrom] = useState(1);
  const toggleActive = (index) => {
    setActiveFrom(index);
  };
  return (
    <>
      <div className="banner-form-wrapper">
        <div className="banner-form">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-9">
                <div className="search-filter row no-gutters box-shadow sm-tb-40px">
                  <div className="filter-tabs  col-md-5 background-second-color">
                    <img
                      className="hidden-xs"
                      src="assets/images/content/from-img.png"
                      alt=""
                    />
                    <ul className="nav nav-tabs flex-column" role="tablist">
                      <li
                        className={
                          activeFrom === 1 ? "nav-item active" : "nav-item"
                        }
                        onClick={() => toggleActive(1)}
                      >
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                        >
                          {/* <i class="fa fa-hotel"></i>  */}Visa
                        </a>
                      </li>
                      <li
                        className={
                          activeFrom === 2 ? "nav-item active" : "nav-item"
                        }
                        onClick={() => toggleActive(2)}
                      >
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                        >
                          {/* <i className="fa fa-plane"></i>  */}Hotel
                        </a>
                      </li>
                      <li
                        className={
                          activeFrom === 3 ? "nav-item active" : "nav-item"
                        }
                        onClick={() => toggleActive(3)}
                      >
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                        >
                          {/* <i className="fa fa-cab"></i>  */}TOUR PACAKGE
                        </a>
                      </li>

                      <li
                        className={
                          activeFrom === 4 ? "nav-item active" : "nav-item"
                        }
                        onClick={() => toggleActive(4)}
                      >
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                        >
                          {/* <i className="icon_pin"></i>  */}TRANSFER
                        </a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="filter-output booking-form-box col-md-7">
                    {/* <!-- Tab panes --> */}
                    <div className=" padding-30px background-white">
                      <div
                        className={
                          activeFrom === 1
                            ? "from-wrapper active"
                            : "from-wrapper"
                        }
                        id="home"
                        role="tabpanel"
                      >
                        <div className="form-group margin-bottom-5px">
                          <label>Where am I From?</label>
                          <div className="destination">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Bangladesh - BD</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group margin-bottom-5px">
                          <label>Where am I Going?</label>
                          <div className="date-input">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Traveling to</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group margin-bottom-5px">
                          <label>Mobile Number</label>
                          <div className="date-input">
                            <input
                              type="number"
                              className="input-text datepicker full-width"
                              placeholder="+880"
                            />
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
                        >
                          <i className="fa fa-search"></i>{" "}
                          <span>VISA SEARCH</span>
                        </a>
                      </div>
                      <div
                        className={
                          activeFrom === 2
                            ? "from-wrapper active"
                            : "from-wrapper"
                        }
                        id="profile"
                        role="tabpanel"
                      >
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
                              type="date"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-25px">
                          <label>Returning:</label>
                          <div className="date-input">
                            <input
                              type="date"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
                        >
                          <i className="fa fa-search"></i>{" "}
                          <span>Flights Search</span>
                        </a>
                        {/* <!-- ====== //  Flights ====== --> */}
                      </div>
                      <div
                        className={
                          activeFrom === 3
                            ? "from-wrapper active"
                            : "from-wrapper"
                        }
                        id="messages"
                        role="tabpanel"
                      >
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
                              type="date"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-25px">
                          <label>Drop off Date:</label>
                          <div className="date-input">
                            <input
                              type="date"
                              className="input-text datepicker full-width"
                              placeholder="15 / 5 / 2017"
                            />
                          </div>
                        </div>
                        <a
                          href="#"
                          className="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
                        >
                          <i className="fa fa-search"></i>{" "}
                          <span>Cars Search</span>
                        </a>
                        {/* <!-- ====== //  Cars ====== --> */}
                      </div>

                      <div
                        className={
                          activeFrom === 4
                            ? "from-wrapper active"
                            : "from-wrapper"
                        }
                        id="profile"
                        role="tabpanel"
                      >
                        <div className="transfer-filter">
                          <button className="transfer-btn active">One way</button>
                          <button className="transfer-btn">By the hour</button>
                          <button className="transfer-btn">Charter</button>
                        </div>
                        {/* <!-- ====== Flights ====== --> */}
                        <div className="form-group margin-bottom-5px">
                          <label>Pick up</label>
                          <div className="destination">
                            <input
                              type="text"
                              className="input-text full-width"
                              placeholder="Bangladesh - BD"
                            />
                          </div>
                        </div>
                        <div className="form-group margin-bottom-5px">
                          <label>Date/Time</label>
                          <div className="row">
                            <div className="col-6">
                              <div className="destination">
                                <input
                                  type="date"
                                  className="input-text full-width"
                                  placeholder="Bangladesh - BD"
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="destination">
                                <input
                                  type="time"
                                  className="input-text full-width"
                                  placeholder="Bangladesh - BD"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <div className="form-group margin-bottom-5px">
                              <label>Passengers</label>
                              <div className="enc-wrapper">
                                <button className="enc-btn">+</button>
                                <p>1</p>
                                <button className="enc-btn">+</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group margin-bottom-5px">
                              <label>Luggages</label>
                              <div className="enc-wrapper">
                                <button className="enc-btn">+</button>
                                <p>1</p>
                                <button className="enc-btn">+</button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="radio-input-group">
                          <p>Book return trip?</p>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Yes
                            </label>
                            
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="no"
                            />
                            <label
                              class="form-check-label"
                              for="no"
                            >
                              No
                            </label>
                            
                          </div>
                        </div>

                        <div className="col-md-12 p-0">
                        <div className="form-group margin-bottom-5px">
                          <label>Date/Time</label>
                          <div className="row">
                            <div className="col-6">
                              <div className="destination">
                                <input
                                  type="date"
                                  className="input-text full-width"
                                  placeholder="Bangladesh - BD"
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="destination">
                                <input
                                  type="time"
                                  className="input-text full-width"
                                  placeholder="Bangladesh - BD"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div className="col-md-12 p-0">
                        <div className="radio-input-group">
                          <p>Make ride non-refundable. </p>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="refundble"
                              id="refundble"
                            />
                            <label
                              class="form-check-label"
                              for="refundble"
                            >
                              Yes
                            </label>
                            
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="refundble"
                              id="no"
                            />
                            <label
                              class="form-check-label"
                              for="no"
                            >
                              No
                            </label>
                            
                          </div>
                        </div>
                        </div>
                        <a
                          href="#"
                          className="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
                        >
                          <i className="fa fa-search"></i>{" "}
                          <span>Cities Search</span>
                        </a>
                        {/* <!-- ====== //  Flights ====== --> */}
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
