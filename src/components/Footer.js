import React from "react";

function Footer() {
  return (
    <footer className=" text-lg-left">
      <div className="container">
        <div className="row padding-tb-100px">
          <div className="col-lg-6 sm-mb-35px">
            <div className="about">
              <div className="logo margin-bottom-20px">
                <a href="#">
                  <img src="assets/img/site-logo.png" alt="" />
                </a>
              </div>
              <p className="text-grey-2">
                Mauris fermentum porta sem, non hendrerit enim bibendum
                consectetur. Fusce diam est, porttitor vehicula gravida at,
                accumsan bibendum tincidunt imperdiet. Maecenas quis magna
                faucibus, varius ante sit amet, varius augue. Praesent aliquam,
                a imperdiet lacus libero ac tellus. Nunc fringilla ullamcorper
                quam at lacinia.
              </p>
            </div>
          </div>
          <div className="col-lg-3 sm-mb-35px">
            <ul className="footer-menu-items">
              <li>
                <a href="#" className="text-main-color">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Ask a Question
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-main-color">
                  Alerts messages
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className="images-feed list-unstyled">
              <li className=" padding-tb-5px">
                <a href="#" className="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li className=" padding-tb-5px">
                <a href="#" className="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li className=" padding-tb-5px">
                <a href="#" className="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li className=" padding-tb-5px">
                <a href="#" className="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li className=" padding-tb-5px">
                <a href="#" className="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
              <li className=" padding-tb-5px">
                <a href="#" className="padding-lr-5px d-block">
                  <img src="http://placehold.it/400x400" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
