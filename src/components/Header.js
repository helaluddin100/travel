import React from "react";

function Header() {
  return (
    <header id="header" class="wide-fat">
      <div class="container">
        <div class="col-xs-12 col-sm-2 no-margin">
          <div class="branding">
            <h1 class="site-title">
              <a href="#">
                <img src="assets/img/site-logo.png" alt="Traveline" />{" "}
              </a>
            </h1>
          </div>
        </div>

        <div class="col-xs-12 col-sm-10 no-margin">
          <div id="main-menu">
            <nav class="navigation">
              <ul class="hidden-xs hidden-sm hidden-md">
                <li class="menu-item about-us">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="icon_group"></i> Home
                  </a>

                  <ul class="dropdown-menu" role="menu">
                    <li class="active" role="presentation">
                      <a role="menuitem" tabindex="-1" href="index.html">
                        Homepage-1
                      </a>

                      <a role="menuitem" tabindex="-1" href="index-2.html">
                        Homepage-2
                      </a>

                      <a role="menuitem" tabindex="-1" href="index-mini.html">
                        Homepage-3
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="menu-item destinations">
                  <a href="destinations.html">
                    <i class="icon_pin"></i> Destinations
                  </a>
                </li>

                <li class="menu-item our-travel">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="icon_globe_alt"></i> Our Travel
                  </a>

                  <ul class="dropdown-menu" role="menu">
                    <li class="active" role="presentation">
                      <a role="menuitem" tabindex="-1" href="our-travel.html">
                        our travel
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="our-travel-sidebar.html"
                      >
                        our travel-sidebar
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="our-travel-right-sidebar.html"
                      >
                        our travel-right sidebar
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="our-travel-detail.html"
                      >
                        our travel-detail
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="menu-item special-offers">
                  <a href="special-offers.html">
                    <i class="icon_ribbon"></i> Special Offers
                  </a>
                </li>

                <li class="menu-item hotel">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="icon_building_alt"></i> List
                  </a>

                  <ul class="dropdown-menu" role="menu">
                    <li class="active" role="presentation">
                      <a role="menuitem" tabindex="-1" href="hotel-list.html">
                        hotel list
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="hotel-list-wide.html"
                      >
                        hotel list-wide
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="hotel-list-right-sidebar.html"
                      >
                        hotel list-sidebar
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="hotel-list-fullwidth.html"
                      >
                        hotel list-fullwidth
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="menu-item shortcodes">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="icon_map"></i> Hotels
                  </a>

                  <ul class="dropdown-menu" role="menu">
                    <li class="active" role="presentation">
                      <a role="menuitem" tabindex="-1" href="hotel-detail.html">
                        hotel detail
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="hotel-detail-travel-info.html"
                      >
                        hotel detail-travel info
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="hotel-detail-payment.html"
                      >
                        hotel detail-payment
                      </a>

                      <a
                        role="menuitem"
                        tabindex="-1"
                        href="hotel-detail-confirm.html"
                      >
                        hotel detail-confirm
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="menu-item contact">
                  <a href="page-site-map.html">
                    <i class="icon_contacts"></i> Pages
                  </a>
                </li>
              </ul>

              <select class="top-drop-menu nav visible-sm visible-xs visible-md">
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

      <div class="toggle-menu-holder">
        <a class="toggle-menu" href="#"></a>

        <div class="menu-body closed">
          <ul>
            <li>
              <a data-toggle="modal" data-target="#loginBox" href="#">
                <i class="fa fa-lock"></i> login
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-user"></i> register
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-bullseye"></i> newsletter
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-volume-down"></i> newletter
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-comments"></i> blog
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-phone"></i> support center
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-dollar"></i> price
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
