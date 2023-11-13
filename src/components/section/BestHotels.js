import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const BestHotels = () => {
  return (
    <>
      <section id="hotels" class="section wide-fat">
        <div class="container">
          <article id="post-5" class="hotels section-intro">
            <h1 class="page-title">
              Best <span class="higlight">Hotels</span>
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

          <div class="hotels-filter">
            <div class="container">
              <div class="search-heading col-md-3 col-sm-6">
                <h3>120 Hotels from $150</h3>
              </div>

              <div class="vertical-hotel-filter col-md-9 col-sm-6">
                <form class="hotels-filter-form" method="get">
                  <ul>
                    <li class="short-by form-member">
                      <span>Short by</span>
                    </li>

                    <li class="form-member form-member1">
                      <select class="chosen-select">
                        <option value="">Hotel Name 1</option>

                        <option value="">Hotel Name 2</option>

                        <option value="">Hotel Name 3</option>

                        <option value="">Hotel Name 4</option>

                        <option value="">Hotel Name 5</option>

                        <option value="">Hotel Name 6</option>
                      </select>
                    </li>

                    <li class="form-member form-member1">
                      <select class="chosen-select">
                        <option value="">Price 1</option>

                        <option value="">Price 2</option>

                        <option value="">Price 3</option>

                        <option value="">Price 4</option>

                        <option value="">Price 5</option>

                        <option value="">Price 6</option>
                      </select>
                    </li>

                    <li class="form-member form-member1">
                      <select class="chosen-select">
                        <option value="">Guest Rating 1</option>

                        <option value="">Guest Rating 2</option>

                        <option value="">Guest Rating 3</option>

                        <option value="">Guest Rating 4</option>

                        <option value="">Guest Rating 5</option>

                        <option value="">Guest Rating 6</option>
                      </select>
                    </li>

                    <li class="form-member form-member1">
                      <select class="chosen-select">
                        <option value="">Reviews 1</option>

                        <option value="">Reviews 2</option>

                        <option value="">Reviews 3</option>

                        <option value="">Reviews 4</option>

                        <option value="">Reviews 5</option>

                        <option value="">Reviews 6</option>
                      </select>
                    </li>

                    <li class="most-popular form-member">
                      <span>Most Popular</span>
                    </li>

                    <li class="filter-btn form-member">
                      <input type="submit" value="Search" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>

          <div class="contents-wrapper">
            <div class="row">
              <div class="sidebar col-md-3 col-sm-6">
                <div class="widget">
                  <h3 class="widget-title">Hotel Search</h3>

                  <div class="location-search-widget">
                    <form class="location-search" method="get">
                      <div class="search-field">
                        <div class="destination-field">
                          <input id="destinationfield" type="text" />
                        </div>
                      </div>

                      <div class="search-field">
                        <div class="col-field-left">
                          <label for="e">Check in date</label>

                          <br />

                          <input
                            id="e"
               
                            type="date"
                            value="d MM yy"
                          />
                        </div>

                        <div class="col-field-right">
                          <label for="check-out-date2">Check out date</label>

                          <br />

                          <input
                            id="check-out-date2"
                            class="traveline_date_input"
                            type="date"
                            value="d MM yy"
                          />
                        </div>
                      </div>

                      <div class="search-field">
                        <div class="col-field-left">
                          <div class="hotel-field">
                            <label for="hotel">Hotel</label>

                            <br />

                            <input id="hotel" type="text" />
                          </div>
                        </div>

                        <div class="col-field-right">
                          <div class="col-field-left">
                            <div class="adult-left">
                              <label for="adult">Adult</label>

                              <br />

                              <div class="quantity">
                                <input id="adult" class="qty" type="text" />
                              </div>
                            </div>
                          </div>

                          <div class="col-field-right">
                            <div class="children-field">
                              <label for="children">Children</label>

                              <br />

                              <div class="quantity">
                                <input id="children" class="qty" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="search-field">
                        <input
                          type="submit"
                          class="button wide-fat"
                          value="Search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div class="widget rating-filter-widget">
                  <h3 class="widget-title">Star Rating</h3>

                  <form>
                    <ul class="check-box-items">
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

                <div class="widget">
                  <h3 class="widget-title">Price Filter</h3>
                  {/* <PriceRangeSlider/> */}
                  <div className="price-range-item">
                    <p>$0</p>
                    <p>$100</p>
                  </div>
                  <RangeSlider />
                </div>

                <div class="widget hotel-type-filter-widget">
                  <h3 class="widget-title">Type</h3>

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

              <div class="contents grid-contents col-md-9 col-sm-6">
                <div class="row">
                  <div class="content col-md-4 col-sm-12">
                    <div class="inner">
                      <a class="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-1.png"
                          alt="Your Hotel Title Here"
                          class="responsive-image"
                        />

                        <span class="overlay">Details</span>
                      </a>

                      <div class="entry">
                        <article class="entry-content">
                          <h2 class="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span class="price">
                            <span class="higlight emphasize value">$150</span>{" "}
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

                  <div class="content col-md-4 col-sm-12">
                    <div class="inner">
                      <a class="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-2.png"
                          alt="Your Hotel Title Here"
                          class="responsive-image"
                        />

                        <span class="overlay">Details</span>
                      </a>

                      <div class="entry">
                        <article class="entry-content">
                          <h2 class="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span class="price">
                            <span class="higlight emphasize value">$150</span>{" "}
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

                  <div class="content col-md-4 col-sm-12">
                    <div class="inner">
                      <a class="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-3.png"
                          alt="Your Hotel Title Here"
                          class="responsive-image"
                        />

                        <span class="overlay">Details</span>
                      </a>

                      <div class="entry">
                        <article class="entry-content">
                          <h2 class="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span class="price">
                            <span class="higlight emphasize value">$150</span>{" "}
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

                  <div class="content col-md-4 col-sm-12">
                    <div class="inner">
                      <a class="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-4.png"
                          alt="Your Hotel Title Here"
                          class="responsive-image"
                        />

                        <span class="overlay">Details</span>
                      </a>

                      <div class="entry">
                        <article class="entry-content">
                          <h2 class="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span class="price">
                            <span class="higlight emphasize value">$150</span>{" "}
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

                  <div class="content col-md-4 col-sm-12">
                    <div class="inner">
                      <a class="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-5.png"
                          alt="Your Hotel Title Here"
                          class="responsive-image"
                        />

                        <span class="overlay">Details</span>
                      </a>

                      <div class="entry">
                        <article class="entry-content">
                          <h2 class="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span class="price">
                            <span class="higlight emphasize value">$150</span>{" "}
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

                  <div class="content col-md-4 col-sm-12">
                    <div class="inner">
                      <a class="thumbnailz" href="#">
                        <img
                          src="assets/images/content/post-thumb-6.png"
                          alt="Your Hotel Title Here"
                          class="responsive-image"
                        />

                        <span class="overlay">Details</span>
                      </a>

                      <div class="entry">
                        <article class="entry-content">
                          <h2 class="post-title">
                            <a href="#" title="Your Hotel Title Here">
                              Your Hotel Title Here
                            </a>
                          </h2>

                          <span class="price">
                            <span class="higlight emphasize value">$150</span>{" "}
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
                </div>

                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="load-more-posts">
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
      </section>
    </>
  );
};

export default BestHotels;
