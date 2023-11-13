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
      <section id="our-travel" class="section wide-fat">
        <div class="container">
          <article id="post-4" class="our-travel section-intro">
            <h1 class="page-title">
              Our <span class="higlight">Travel</span>
            </h1>

            <div class="entry-content">
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
            <div class="controls">
              <ul>
                <li
                  class={`${activeTravel === 1 ? "filter active" : "filter"} `}
                  onClick={() => toggleActive(1)}
                >
                  All
                </li>

                <li
                  class={`${activeTravel === 2 ? "filter active" : "filter"} `}
                  onClick={() => toggleActive(2)}
                >
                  Asia
                </li>

                <li
                  class={`${activeTravel === 3 ? "filter active" : "filter"} `}
                  onClick={() => toggleActive(3)}
                >
                  Africa
                </li>

                <li
                  class={`${activeTravel === 4 ? "filter active" : "filter"} `}
                  onClick={() => toggleActive(4)}
                >
                  Oceania
                </li>

                <li
                  class={`${activeTravel === 5 ? "filter active" : "filter"} `}
                  onClick={() => toggleActive(5)}
                >
                  Europe
                </li>

                <li
                  class={`${activeTravel === 6 ? "filter active" : "filter"} `}
                  onClick={() => toggleActive(6)}
                >
                  America
                </li>
              </ul>
            </div>

            <div id="Grid" class="row">
              <div
                className={
                  activeTravel === 1
                    ? "tour-items active-tour-item "
                    : "tour-items"
                }
              >
                <div class="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Asia Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-1.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Asia Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-2.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Oceania Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-3.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Europe Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-4.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
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
                <div class="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Asia Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-1.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
                            Load More Hotel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Asia Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-2.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
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
                <div class=" col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Oceania Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-3.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
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
                <div class="col-md-6 col-sm-12 col-xs-12 tour-category-item">
                  <div class="inner">
                    <div class="part">
                      <h3 class="category-heading">Europe Tours</h3>

                      <div class="featured-tour">
                        <a href="#" title="Siam Paragon, Bangkok">
                          <img
                            src="assets/images/content/featured-tour-4.png"
                            alt="Siam Paragon, Bangkok"
                            class="responsive-image"
                          />
                        </a>

                        <div class="entry">
                          <article class="entry-content">
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

                          <div class="entry-meta">
                            <div class="star-holder">
                              <div class="star">
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

                            <span class="review">
                              <a href="#">24 Reviews</a>
                            </span>

                            <span class="go-detail">
                              <a href="#">More</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="part">
                      <h3 class="list-heading">Hotel List</h3>

                      <div class="hotel-lists">
                        <ul>
                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Diamond Hotel"
                            >
                              <img
                                src="assets/images/content/diamond-hotel.png"
                                alt="Diamond Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Diamond Hotel">
                                  Diamond Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $150
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="Hotel Name Here"
                            >
                              <img
                                src="assets/images/content/hotel-name-here.png"
                                alt="Hotel Name Here"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="Hotel Name Here">
                                  Hotel Name Here
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $199
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>

                          <li class="hotel-list-item">
                            <a
                              class="thumbnailz mini"
                              href="#"
                              title="AdelFox Hotel"
                            >
                              <img
                                src="assets/images/content/adelfox-hotel.png"
                                alt="AdelFox Hotel"
                              />

                              <span class="overlay"></span>
                            </a>

                            <article class="entry-content">
                              <h3>
                                <a href="#" title="AdelFox Hotel">
                                  AdelFox Hotel
                                </a>
                              </h3>

                              <span class="price">
                                <span class="higlight emphasize value">
                                  $100
                                </span>
                                /Night
                              </span>
                              <br />

                              <a href="#" class="button mini">
                                Book
                              </a>
                            </article>
                          </li>
                        </ul>

                        <div class="load-more-hotel">
                          <a href="#" class="button wide-fat">
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
      {/* class="section wide-fat" */}
      <section
        id="testimonials"
        className={
          activeTravel === 3 ? "tour-items active-tour-item " : "tour-items"
        }
      >
        <div class="container">
          <article id="post-44" class="testimonials section-intro">
            <h1 class="page-title">What Other People Say About Us</h1>
          </article>
        </div>

        <div id="sliding-testimony" class="flexslider">
          <ul class="slides">
            <li class="post">
              <div class="container">
                <div class="entry-content">
                  <h2 class="testimony-author">John Doe</h2>

                  <div class="star-ratings">
                    <span>
                      <i class="icon_star"></i>

                      <i class="icon_star"></i>

                      <i class="icon_star"></i>

                      <i class="icon_star"></i>

                      <i class="icon_star"></i>
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

                  <h3 class="impressive-figures-heading">
                    These Impressive Figures
                  </h3>

                  <div class="criteria">
                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_map_alt"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span> <span>Tours</span>
                      </div>
                    </div>

                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_group"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span>{" "}
                        <span>Tourists</span>
                      </div>
                    </div>

                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_pin"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span>{" "}
                        <span>Destinations</span>
                      </div>
                    </div>

                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_building_alt"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span> <span>Hotels</span>
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
        <div class="container">
          <article id="post-44" class="testimonials section-intro">
            <h1 class="page-title">What Other People Say About Us</h1>
          </article>
        </div>

        <div id="sliding-testimony" class="flexslider">
          <ul class="slides">
            <li class="post">
              <div class="container">
                <div class="entry-content">
                  <h2 class="testimony-author">John Doe</h2>

                  <div class="star-ratings">
                    <span>
                      <i class="icon_star"></i>

                      <i class="icon_star"></i>

                      <i class="icon_star"></i>

                      <i class="icon_star"></i>

                      <i class="icon_star"></i>
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

                  <h3 class="impressive-figures-heading">
                    These Impressive Figures
                  </h3>

                  <div class="criteria">
                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_map_alt"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span> <span>Tours</span>
                      </div>
                    </div>

                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_group"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span>{" "}
                        <span>Tourists</span>
                      </div>
                    </div>

                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_pin"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span>{" "}
                        <span>Destinations</span>
                      </div>
                    </div>

                    <div class="criteria-item">
                      <div class="circle">
                        <i class="icon_building_alt"></i>
                      </div>

                      <div class="stats">
                        <span class="number">2.36545</span> <span>Hotels</span>
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
