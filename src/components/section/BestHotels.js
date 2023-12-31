
import PriceRangeSlider from "./PriceRangeSlider";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import React, { useState, useEffect } from 'react';
import { InputNumber, Select, Space  } from 'antd';

const BestHotels = () => {
  const handleChange = (value) => {
    console.log('Number changed:', value);
  };
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  return (
    <>
      <section id="hotels" className="section wide-fat">
        <div className="container">
          <article id="post-5" className="hotels section-intro">
            <h1 className="page-title">
            TOUR <span className="higlight">PACAKGE</span>
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

          <div className="hotels-filter">
            <div className="container p-0">
              <div className="search-heading col-md-3 col-sm-6">
                <h3>120 Hotels from ৳150</h3>
              </div>

              <div className="vertical-hotel-filter col-md-9 col-sm-6">
                <form className="hotels-filter-form" method="get">
                  <ul>
                    <li className="short-by form-member">
                      <span>Short by</span>
                    </li>

                    <li className="form-member form-member1">
                      
                          <Select
      defaultValue="Hotel name-1"
      className="chosen-select"
      onChange={handleChange}
      options={[
        {
          value: 'hotel1',
          label: 'Hotel name-1',
        },
        {
          value: 'hotel2',
          label: 'Hotel name-2',
        },
        {
          value: 'hotel3',
          label: 'Hotel name-3',
        },
       
      ]}
    />
                    </li>

                    <li className="form-member form-member1">

                       
                      <Select
      defaultValue="Price 1"
      className="chosen-select"
      onChange={handleChange}
      options={[
        {
          value: 'price1',
          label: 'Price 1',
        },
        {
          value: 'price2',
          label: 'Price 2',
        },
        {
          value: 'price3',
          label: 'Price 3',
        },
       
      ]}
    />
                    </li>

                    <li className="form-member form-member1">
                      
                      <Select
      defaultValue="Guest Rating 1"
      className="chosen-select"
      onChange={handleChange}
      options={[
        {
          value: 'rating1',
          label: 'Guest Rating 1',
        },
        {
          value: 'rating2',
          label: 'Guest Rating 2',
        },
        {
          value: 'rating3',
          label: 'Guest Rating 3',
        },
       
      ]}
    />
                    </li>

                    <li className="form-member form-member1">
                      <Select
      defaultValue="Reviews 1"
      className="chosen-select"
      onChange={handleChange}
      options={[
        {
          value: 'reviews1',
          label: 'Reviews 1',
        },
        {
          value: 'reviews2',
          label: 'Reviews 2',
        },
        {
          value: 'reviews3',
          label: 'Reviews 3',
        },
       
      ]}
    />
                    </li>

                    <li className="most-popular form-member">
                      <span>Most Popular</span>
                    </li>

                    <li className="filter-btn form-member">
                      <input type="submit" value="Search" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>

          <div className="contents-wrapper">
            <div className="row">
              <div className="sidebar col-md-3">
                <div className="widget">
                  <h3 className="widget-title">Hotel Search</h3>

                  <div className="location-search-widget">
                    <form className="location-search" method="get">
                      <div className="search-field">
                        <div className="destination-field">
                          <input id="destinationfield" type="text" />
                        </div>
                      </div>

                      <div className="search-field">
                        <div className="col-field-left">
                          <label for="e">Check in date</label>

                          <br />

                          <input id="e" type="date" value="d MM yy" />
                        </div>

                        <div className="col-field-right">
                          <label for="check-out-date2">Check out date</label>

                          <br />

                          <input
                            id="check-out-date2"
                            className="traveline_date_input"
                            type="date"
                            value="d MM yy"
                          />
                        </div>
                      </div>

                      <div className="search-field">
                        <div className="col-field-left">
                          <div className="hotel-field">
                            <label for="hotel">Hotel</label>

                            <br />

                            <input id="hotel" type="text" />
                          </div>
                        </div>

                        <div className="col-field-right">
                          <div className="col-field-left">
                            <div className="adult-left">
                              <label for="adult">Adult</label>

                              <br />

                              <div className="quantity">
                              <InputNumber min={1} max={10} defaultValue={5} onChange={handleChange} />
                              </div>
                              
                            </div>
                          </div>

                          <div className="col-field-right">
                            <div className="children-field">
                              <label for="children">Children</label>

                              <br />

                              <div className="quantity">
                                {/* <input
                                  id="children"
                                  className="qty"
                                  type="text"
                                  value={count}
                                /> */}
                                <InputNumber c min={1} max={10} defaultValue={5} onChange={handleChange} />

                            
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="search-field">
                        <input
                          type="submit"
                          className="button wide-fat"
                          value="Search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="widget rating-filter-widget">
                  <h3 className="widget-title">Star Rating</h3>

                  <form>
                    <ul className="check-box-items">
                      <li>
                        <input type="checkbox" />
                        <label>
                          <img
                            src="assets/images/star_rating_1.png"
                            alt="1 Star"
                          />{" "}
                          <span>1 Star</span>
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>
                          <img
                            src="assets/images/star_rating_2.png"
                            alt="1 Star"
                          />{" "}
                          2 Star
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>
                          <img
                            src="assets/images/star_rating_3.png"
                            alt="1 Star"
                          />{" "}
                          3 Star
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>
                          <img
                            src="assets/images/star_rating_4.png"
                            alt="1 Star"
                          />{" "}
                          4 Star
                        </label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>
                          <img
                            src="assets/images/star_rating_5.png"
                            alt="1 Star"
                          />{" "}
                          5 Star
                        </label>
                      </li>
                    </ul>
                  </form>
                </div>

                <div className="widget md-none">
                  <h3 className="widget-title">Price Filter</h3>
                  {/* <PriceRangeSlider/> */}
                  <div className="price-range-item">
                    <p>৳0</p>
                    <p>৳100</p>
                  </div>
                  <RangeSlider />
                </div>

                <div className="widget md-none hotel-type-filter-widget">
                  <h3 className="widget-title">Type</h3>

                  <form>
                    <ul className="filter-input">
                      <li>
                        <input type="checkbox" />
                        <label>All</label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>Hotel</label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>Resort</label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>Bed and Breakfast</label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>Appartment</label>
                      </li>

                      <li>
                        <input type="checkbox" />
                        <label>Motel</label>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>

              <div className="contents grid-contents col-md-9">
                <div className="row">
                  <div className="content col-md-4 col-sm-12">
                    <div className="inner">
                      <a className="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-1.png"
                          alt="Your Hotel Title Here"
                          className="responsive-image"
                        />

                        <span className="overlay">Details</span>
                      </a>

                      <div className="entry">
                        <article className="entry-content">
                          <h2 className="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span className="price">
                            <span className="higlight emphasize value">
                              ৳150
                            </span>{" "}
                            /Night
                          </span>
                          <br />

                          <p>
                            Phasellus condimentum lacus nec justo lacinia
                            sodales. Pellentesque pellentesque ultricies urna,
                            at pretium est aliquet et. Sed nec porta lectus. Sed
                            laoree.
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

                  <div className="content col-md-4 col-sm-12">
                    <div className="inner">
                      <a className="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-2.png"
                          alt="Your Hotel Title Here"
                          className="responsive-image"
                        />

                        <span className="overlay">Details</span>
                      </a>

                      <div className="entry">
                        <article className="entry-content">
                          <h2 className="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span className="price">
                            <span className="higlight emphasize value">
                              ৳150
                            </span>{" "}
                            /Night
                          </span>
                          <br />

                          <p>
                            Phasellus condimentum lacus nec justo lacinia
                            sodales. Pellentesque pellentesque ultricies urna,
                            at pretium est aliquet et. Sed nec porta lectus. Sed
                            laoree.
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

                  <div className="content col-md-4 col-sm-12">
                    <div className="inner">
                      <a className="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-3.png"
                          alt="Your Hotel Title Here"
                          className="responsive-image"
                        />

                        <span className="overlay">Details</span>
                      </a>

                      <div className="entry">
                        <article className="entry-content">
                          <h2 className="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span className="price">
                            <span className="higlight emphasize value">
                              ৳150
                            </span>{" "}
                            /Night
                          </span>
                          <br />

                          <p>
                            Phasellus condimentum lacus nec justo lacinia
                            sodales. Pellentesque pellentesque ultricies urna,
                            at pretium est aliquet et. Sed nec porta lectus. Sed
                            laoree.
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

                  <div className="content col-md-4 col-sm-12">
                    <div className="inner">
                      <a className="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-4.png"
                          alt="Your Hotel Title Here"
                          className="responsive-image"
                        />

                        <span className="overlay">Details</span>
                      </a>

                      <div className="entry">
                        <article className="entry-content">
                          <h2 className="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span className="price">
                            <span className="higlight emphasize value">
                              ৳150
                            </span>{" "}
                            /Night
                          </span>
                          <br />

                          <p>
                            Phasellus condimentum lacus nec justo lacinia
                            sodales. Pellentesque pellentesque ultricies urna,
                            at pretium est aliquet et. Sed nec porta lectus. Sed
                            laoree.
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

                  <div className="content col-md-4 col-sm-12">
                    <div className="inner">
                      <a className="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-5.png"
                          alt="Your Hotel Title Here"
                          className="responsive-image"
                        />

                        <span className="overlay">Details</span>
                      </a>

                      <div className="entry">
                        <article className="entry-content">
                          <h2 className="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span className="price">
                            <span className="higlight emphasize value">
                              ৳150
                            </span>{" "}
                            /Night
                          </span>
                          <br />

                          <p>
                            Phasellus condimentum lacus nec justo lacinia
                            sodales. Pellentesque pellentesque ultricies urna,
                            at pretium est aliquet et. Sed nec porta lectus. Sed
                            laoree.
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

                  <div className="content col-md-4 col-sm-12">
                    <div className="inner">
                      <a className="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-6.png"
                          alt="Your Hotel Title Here"
                          className="responsive-image"
                        />

                        <span className="overlay">Details</span>
                      </a>

                      <div className="entry">
                        <article className="entry-content">
                          <h2 className="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span className="price">
                            <span className="higlight emphasize value">
                              ৳150
                            </span>{" "}
                            /Night
                          </span>
                          <br />

                          <p>
                            Phasellus condimentum lacus nec justo lacinia
                            sodales. Pellentesque pellentesque ultricies urna,
                            at pretium est aliquet et. Sed nec porta lectus. Sed
                            laoree.
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
                </div>

                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="load-more-posts">
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
      </section>
    </>
  );
};

export default BestHotels;
