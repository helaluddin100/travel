import React from "react";

function Footer() {
  return (
    <footer class="text-center text-lg-left">
      <div class="container">
        <div class="row padding-tb-100px">
          <div class="col-lg-6 sm-mb-35px">
            <div class="about">
              <div class="logo margin-bottom-20px">
                <a href="#">
                  <img src="assets/img/site-logo.png" alt="" />
                </a>
              </div>
              <p class="text-grey-2">
                Mauris fermentum porta sem, non hendrerit enim bibendum
                consectetur. Fusce diam est, porttitor vehicula gravida at,
                accumsan bibendum tincidunt imperdiet. Maecenas quis magna
                faucibus, varius ante sit amet, varius augue. Praesent aliquam,
                a imperdiet lacus libero ac tellus. Nunc fringilla ullamcorper
                quam at lacinia.
              </p>
            </div>
          </div>
          <div class="col-lg-3 sm-mb-35px">
            <ul class="footer-menu row margin-0px padding-0px list-unstyled">
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Home
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Featured
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Feedback
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Ask a Question
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Team
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Maintenance
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Get a Quote
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Contact Us
                </a>
              </li>
              <li class="col-6  padding-tb-5px">
                <a href="#" class="text-main-color">
                  Alerts messages
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <ul class="images-feed row no-gutters margin-0px padding-0px list-unstyled">
              <li class="col-4 padding-tb-5px">
                <a href="#" class="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li class="col-4 padding-tb-5px">
                <a href="#" class="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li class="col-4 padding-tb-5px">
                <a href="#" class="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li class="col-4 padding-tb-5px">
                <a href="#" class="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li class="col-4 padding-tb-5px">
                <a href="#" class="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li class="col-4 padding-tb-5px">
                <a href="#" class="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row padding-tb-30px border-top-1 border-grey-1">
          <div class="col-lg-4">
            <p class="text-lg-left">
              <span class="text-third-color">Travelz</span> | @2017 All copy
              rights reserved
            </p>
          </div>
          <div class="col-lg-4 sm-mb-20px">
            <div class="text-center">
              <img src="images/cards.png" alt="" />
            </div>
          </div>
          <div class="col-lg-4">
            <ul class="social_link list-inline text-sm-center text-lg-right">
              <li class="list-inline-item">
                <a class="facebook" href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="youtube" href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="google" href="#">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="twitter" href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="rss" href="#">
                  <i class="fa fa-rss" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            {/* <!-- // Social --> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
