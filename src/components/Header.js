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
                  <a href="#">
                    <i className="icon_pin"></i> Destinations
                  </a>
                </li>

                <li className="menu-item our-travel">
                  <a href="#">
                    <i className="icon_globe_alt"></i> Our Travel
                  </a>
                </li>

                <li className="menu-item special-offers">
                  <a href="#">
                    <i className="icon_ribbon"></i> Special Offers
                  </a>
                </li>

                {/* <li className="menu-item hotel">
                  <a href="#">
                    <i className="icon_building_alt"></i> List
                  </a>
                </li> */}

                <li className="menu-item shortcodes">
                  <a href="#" className="active">
                    <i className="fa fa-shopping-cart"></i> Shop
                  </a>
                </li>

                <li className="menu-item contact">
                  <a href="#">
                    <i className="fa fa-user-circle-o"></i> Login
                  </a>
                </li>
              </ul>
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
