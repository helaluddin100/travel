import React from "react";

function Header() {
  return (
    <header id="header" className="wide-fat">
      <div className="container">
        <div className="col-xs-12 col-sm-2 no-margin">
          <div className="branding">
            <h1 className="site-title">
              <a href="#">
                <img src="assets/img/site-logo.png" alt="Traveline" />{" "}
              </a>
            </h1>
          </div>
        </div>

        <div className="col-xs-12 col-sm-10 no-margin">
          <div id="main-menu">
            <nav className="navigation">
              <ul className="hidden-xs hidden-sm hidden-md">
                <li className="menu-item about-us">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <i className="icon_group"></i> Home
                  </a>

                  <ul className="dropdown-menu" role="menu">
                    <li className="active" role="presentation">
                      <a role="menuitem" tabIndex="-1" href="index.html">
                        Homepage-1
                      </a>

                      <a role="menuitem" tabIndex="-1" href="index-2.html">
                        Homepage-2
                      </a>

                      <a role="menuitem" tabIndex="-1" href="index-mini.html">
                        Homepage-3
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item destinations">
                  <a href="destinations.html">
                    <i className="icon_pin"></i> Destinations
                  </a>
                </li>

                <li className="menu-item our-travel">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <i className="icon_globe_alt"></i> Our Travel
                  </a>

                  <ul className="dropdown-menu" role="menu">
                    <li className="active" role="presentation">
                      <a role="menuitem" tabIndex="-1" href="our-travel.html">
                        our travel
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="our-travel-sidebar.html"
                      >
                        our travel-sidebar
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="our-travel-right-sidebar.html"
                      >
                        our travel-right sidebar
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="our-travel-detail.html"
                      >
                        our travel-detail
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item special-offers">
                  <a href="special-offers.html">
                    <i className="icon_ribbon"></i> Special Offers
                  </a>
                </li>

                <li className="menu-item hotel">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <i className="icon_building_alt"></i> List
                  </a>

                  <ul className="dropdown-menu" role="menu">
                    <li className="active" role="presentation">
                      <a role="menuitem" tabIndex="-1" href="hotel-list.html">
                        hotel list
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="hotel-list-wide.html"
                      >
                        hotel list-wide
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="hotel-list-right-sidebar.html"
                      >
                        hotel list-sidebar
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="hotel-list-fullwidth.html"
                      >
                        hotel list-fullwidth
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item shortcodes">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <i className="icon_map"></i> Hotels
                  </a>

                  <ul className="dropdown-menu" role="menu">
                    <li className="active" role="presentation">
                      <a role="menuitem" tabIndex="-1" href="hotel-detail.html">
                        hotel detail
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="hotel-detail-travel-info.html"
                      >
                        hotel detail-travel info
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="hotel-detail-payment.html"
                      >
                        hotel detail-payment
                      </a>

                      <a
                        role="menuitem"
                        tabIndex="-1"
                        href="hotel-detail-confirm.html"
                      >
                        hotel detail-confirm
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item contact">
                  <a href="page-site-map.html">
                    <i className="icon_contacts"></i> Pages
                  </a>
                </li>
              </ul>

              <select className="top-drop-menu nav visible-sm visible-xs visible-md">
                <optgroup label="Homepage">
                  <option value="index.html">Homepage-1</option>

                  <option value="index-2.html">Homepage-2</option>

                  <option value="index-mini.html">Homepage-3</option>
                </optgroup>

                <optgroup label="Destinations">
                  <option value="destinations.html">Destinations</option>
                </optgroup>

                <optgroup label="Our Travels">
                  <option value="our-travel.html">Our Travel</option>

                  <option value="our-travel-sidebar.html">
                    Our Travel-Sidebar
                  </option>

                  <option value="our-travel-right-sidebar.html">
                    Our Travel-Right Sidebar
                  </option>

                  <option value="our-travel-detail.html">
                    Our Travel-Detail
                  </option>
                </optgroup>

                <optgroup label="Special Offers">
                  <option value="special-offers.html">Special Offers</option>
                </optgroup>

                <optgroup label="Hotels List">
                  <option value="hotel-list.html">Hotel List</option>

                  <option value="hotel-list-wide.html">Hotel List-Wide</option>

                  <option value="hotel-list-right-sidebar.html">
                    Hotel List-Sidebar
                  </option>

                  <option value="hotel-list-fullwidth.html">
                    Hotel List-Fullwidth
                  </option>
                </optgroup>

                <optgroup label="Hotels Detail">
                  <option value="hotel-detail.html">Hotel Detail</option>

                  <option value="hotel-detail.html">
                    Hotel Detail-Travel Info
                  </option>

                  <option value="hotel-detail.html">
                    Hotel Detail-Payment
                  </option>

                  <option value="hotel-detail.html">
                    Hotel Detail-Confirm
                  </option>
                </optgroup>

                <optgroup label="Contact">
                  <option value="contact.html">Contact</option>
                </optgroup>
              </select>
            </nav>
          </div>
        </div>
      </div>

      <div className="toggle-menu-holder">
        <a className="toggle-menu" href="#"></a>

        <div className="menu-body closed">
          <ul>
            <li>
              <a data-toggle="modal" data-target="#loginBox" href="#">
                <i className="fa fa-lock"></i> login
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-user"></i> register
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-bullseye"></i> newsletter
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-volume-down"></i> newletter
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-comments"></i> blog
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-phone"></i> support center
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-dollar"></i> price
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
