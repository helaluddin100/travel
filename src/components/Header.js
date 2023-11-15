import React, { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
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
                  <a href="#">
                    <i className="icon_group"></i> Home
                  </a>
                </li>

                <li className="menu-item destinations">
                  <a href="destinations.html">
                    <i className="icon_pin"></i> Destinations
                  </a>
                </li>

                <li className="menu-item our-travel">
                  <a href="#">
                    <i className="icon_globe_alt"></i> Our Travel
                  </a>
                </li>

                <li className="menu-item special-offers">
                  <a href="special-offers.html">
                    <i className="icon_ribbon"></i> Special Offers
                  </a>
                </li>

                <li className="menu-item hotel">
                  <a href="#">
                    <i className="icon_building_alt"></i> List
                  </a>
                </li>

                <li className="menu-item shortcodes">
                  <a href="#" className="active">
                    <i className="fa fa-shopping-cart"></i> Shop
                  </a>
                </li>

                <li className="menu-item contact">
                  <a href="page-site-map.html">
                    <i className="fa fa-user-circle-o"></i> Login
                  </a>
                </li>
              </ul>

              {/* <select className="top-drop-menu nav visible-sm visible-xs visible-md">
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
              </select> */}
            </nav>
          </div>
        </div>
      </div>

      <div className="toggle-menu-holder">
        <a className="toggle-menu" href="#" onClick={handleToggle}></a>

        <div className={toggle ? "menu-body closed" : "menu-body"}>
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
