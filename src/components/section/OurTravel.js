import React, { useState } from "react";
import { TabPane } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
const OurTravel = () => {
  const [activeTravel, setActiveTravel] = useState(1);
  const toggleActive = (index) => {
    setActiveTravel(index);
  };
  return (
    <>
      <section id="our-travel" className="section wide-fat">
        <div className="container">
          <article id="post-4" className="our-travel section-intro">
            <h1 className="page-title">
              Our <span className="higlight">Travel</span>
            </h1>

            <div className="entry-content">
              <p>
                Integer sollicitudin ligula non enim sodales, non lacinia nunc
                ornare. Sed commodo tempor dapibus.
                <br /> Duis convallis turpis in tortor volutpat, eget rhoncus
                nisi fringilla. Phasellus ornare risus in euismod varius nullam
                feugiat ultrices.
                <br /> Sed condimentum est libero, aliquet iaculis diam bibendum
                ullamcorper.
              </p>
            </div>
          </article>
          <div
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <div className="controls">
              <ul>
                <li
                  className={`${
                    activeTravel === 1 ? "filter active" : "filter"
                  } `}
                  onClick={() => toggleActive(1)}
                >
                  All
                </li>

                <li
                  className={`${
                    activeTravel === 2 ? "filter active" : "filter"
                  } `}
                  onClick={() => toggleActive(2)}
                >
                  Asia
                </li>

                <li
                  className={`${
                    activeTravel === 3 ? "filter active" : "filter"
                  } `}
                  onClick={() => toggleActive(3)}
                >
                  Africa
                </li>

                <li
                  className={`${
                    activeTravel === 4 ? "filter active" : "filter"
                  } `}
                  onClick={() => toggleActive(4)}
                >
                  Oceania
                </li>

                <li
                  className={`${
                    activeTravel === 5 ? "filter active" : "filter"
                  } `}
                  onClick={() => toggleActive(5)}
                >
                  Europe
                </li>

                <li
                  className={`${
                    activeTravel === 6 ? "filter active" : "filter"
                  } `}
                  onClick={() => toggleActive(6)}
                >
                  America
                </li>
              </ul>
            </div>

            <div id="Grid" className="row">
              <div
                className={
                  activeTravel === 1
                    ? "tour-items active-tour-item "
                    : "tour-items"
                }
              >
                <div className="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Asia Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-1.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Asia Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-2.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Oceania Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-3.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Europe Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-4.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeTravel === 2
                    ? "tour-items active-tour-item "
                    : "tour-items"
                }
              >
                <div className="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Asia Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-1.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Asia Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-2.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeTravel === 4
                    ? "tour-items active-tour-item "
                    : "tour-items"
                }
              >
                <div className=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Oceania Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-3.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeTravel === 5
                    ? "tour-items active-tour-item "
                    : "tour-items"
                }
              >
                <div className="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div className="inner">
                    <div className="part">
                      <h3 className="category-heading">Europe Tours</h3>

                      <div className="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-4.png"
                            alt="Siam Paragon, Bangkok"
                            className="responsive-image"
                          />
                        </a>

                        <div className="entry">
                          <article className="entry-content">
                            <h1>
                              <a href="#" title="Siam Paragon, Bangkok">
                                Siam Paragon, Bangkok
                              </a>
                            </h1>

                            <p>
                              Phasellus condimentum lacus nec justo lacinia
                              sodales. Pellentesque pellentesque ultricies urna,
                              at pretium est aliquet et. Sed nec porta lectus.
                              Sed laoree.
                            </p>
                          </article>

                          <div className="entry-meta">
                            <div className="star-holder">
                              <div className="star">
                                <img
                                  src="assets/images/star-on.png"
                                  alt="1"
                                  title="bad"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="2"
                                  title="poor"
                                />
                                <img
                                  src="assets/images/star-on.png"
                                  alt="3"
                                  title="regular"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="4"
                                  title="good"
                                />
                                <img
                                  src="assets/images/star-off.png"
                                  alt="5"
                                  title="gorgeous"
                                />
                                <input type="hidden" name="score" value="3" />
                              </div>
                            </div>

                            <span className="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span className="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="part">
                      <h3 className="list-heading">Hotel List</h3>

                      <div className="hotel-lists">
                        <ul>
                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li className="hotel-list-item">
                            <a
                              className="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span className="overlay"></span>
                            </a>

                            <article className="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span className="price">
                                <span className="higlight emphasize value">
                                  ৳100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" className="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div className="load-more-hotel">
                          <a href="#" className="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* className="section wide-fat" */}
      <section
        id="testimonials"
        className={
          activeTravel === 3 ? "tour-items active-tour-item " : "tour-items"
        }
      >
        <div className="container">
          <article id="post-44" className="testimonials section-intro">
            <h1 className="page-title">What Other People Say About Us</h1>
          </article>
        </div>

        <div id="sliding-testimony" className="flexslider">
          <ul className="slides">
            <li className="post">
              <div className="container">
                <div className="entry-content">
                  <h2 className="testimony-author">John Doe</h2>

                  <div className="star-ratings">
                    <span>
                      <i className="icon_star"></i>

                      <i className="icon_star"></i>

                      <i className="icon_star"></i>

                      <i className="icon_star"></i>

                      <i className="icon_star"></i>
                    </span>
                  </div>

                  <p>
                    Integer sollicitudin ligula non enim sodales, non lacinia
                    nunc ornare. Sed commodo tempor dapibus.
                    <br /> Duis convallis turpis in tortor volutpat, eget
                    rhoncus nisi fringilla. Phasellus ornare risus in euismod
                    varius nullam feugiat ultrices.
                    <br /> Sed condimentum est libero, aliquet iaculis diam
                    bibendum ullamcorper.
                  </p>

                  <h3 className="impressive-figures-heading">
                    These Impressive Figures
                  </h3>

                  <div className="criteria">
                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_map_alt"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Tours</span>
                      </div>
                    </div>

                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_group"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Tourists</span>
                      </div>
                    </div>

                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_pin"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Destinations</span>
                      </div>
                    </div>

                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_building_alt"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Hotels</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="testimonials"
        className={
          activeTravel === 6 ? "tour-items active-tour-item " : "tour-items"
        }
      >
        <div className="container">
          <article id="post-44" className="testimonials section-intro">
            <h1 className="page-title">What Other People Say About Us</h1>
          </article>
        </div>

        <div id="sliding-testimony" className="flexslider">
          <ul className="slides">
            <li className="post">
              <div className="container">
                <div className="entry-content">
                  <h2 className="testimony-author">John Doe</h2>

                  <div className="star-ratings">
                    <span>
                      <i className="icon_star"></i>

                      <i className="icon_star"></i>

                      <i className="icon_star"></i>

                      <i className="icon_star"></i>

                      <i className="icon_star"></i>
                    </span>
                  </div>

                  <p>
                    Integer sollicitudin ligula non enim sodales, non lacinia
                    nunc ornare. Sed commodo tempor dapibus.
                    <br /> Duis convallis turpis in tortor volutpat, eget
                    rhoncus nisi fringilla. Phasellus ornare risus in euismod
                    varius nullam feugiat ultrices.
                    <br /> Sed condimentum est libero, aliquet iaculis diam
                    bibendum ullamcorper.
                  </p>

                  <h3 className="impressive-figures-heading">
                    These Impressive Figures
                  </h3>

                  <div className="criteria">
                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_map_alt"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Tours</span>
                      </div>
                    </div>

                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_group"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Tourists</span>
                      </div>
                    </div>

                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_pin"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Destinations</span>
                      </div>
                    </div>

                    <div className="criteria-item">
                      <div className="circle">
                        <i className="icon_building_alt"></i>
                      </div>

                      <div className="stats">
                        <span className="number">2.36545</span>{" "}
                        <span>Hotels</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurTravel;
