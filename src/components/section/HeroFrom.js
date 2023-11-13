import React from "react";

const HeroFrom = () => {
  return (
    <>
      <div className="hero-from-wrapper">
        {/* <!-- Tab panes --> */}
        <div class="tab-content  padding-30px background-white">
          <div class="tab-pane active" id="home" role="tabpanel">
            <div class="form-group margin-bottom-5px">
              <label>Destination</label>
              <div class="destination">
                <input
                  type="text"
                  class="input-text full-width"
                  placeholder="Enter Destination"
                />
              </div>
            </div>
            <div class="form-group margin-bottom-5px">
              <label>Check Out</label>
              <div class="date-input">
                <input
                  type="text"
                  class="input-text datepicker full-width"
                  placeholder="15 / 5 / 2017"
                />
              </div>
            </div>
            <div class="form-group margin-bottom-5px">
              <label>Check Out</label>
              <div class="date-input">
                <input
                  type="text"
                  class="input-text datepicker full-width"
                  placeholder="15 / 5 / 2017"
                />
              </div>
            </div>
            <div class="row margin-bottom-10px">
              <div class="form-group col">
                <label>Rooms</label>
                <div class="rooms">
                  <input
                    type="text"
                    class="input-text full-width"
                    placeholder="1"
                  />
                </div>
              </div>
              <div class="form-group col">
                <label>Children</label>
                <div class="children">
                  <input
                    type="text"
                    class="input-text full-width"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <a
              href="#"
              class="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
            >
              <i class="fa fa-search"></i> Hotel Search
            </a>
          </div>
          <div class="tab-pane" id="profile" role="tabpanel">
            {/* <!-- ====== Flights ====== --> */}
            <div class="form-group margin-bottom-5px">
              <label>Flying from:</label>
              <div class="destination">
                <input
                  type="text"
                  class="input-text full-width"
                  placeholder="Flying from"
                />
              </div>
            </div>
            <div class="form-group margin-bottom-5px">
              <label>Flying to:</label>
              <div class="destination">
                <input
                  type="text"
                  class="input-text full-width"
                  placeholder="Flying to"
                />
              </div>
            </div>
            <div class="form-group margin-bottom-5px">
              <label>Departing:</label>
              <div class="date-input">
                <input
                  type="text"
                  class="input-text datepicker full-width"
                  placeholder="15 / 5 / 2017"
                />
              </div>
            </div>
            <div class="form-group margin-bottom-25px">
              <label>Returning:</label>
              <div class="date-input">
                <input
                  type="text"
                  class="input-text datepicker full-width"
                  placeholder="15 / 5 / 2017"
                />
              </div>
            </div>
            <a
              href="#"
              class="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
            >
              <i class="fa fa-search"></i> Flights Search
            </a>
            {/* <!-- ====== //  Flights ====== --> */}
          </div>
          <div class="tab-pane" id="messages" role="tabpanel">
            {/* <!-- ====== Cars ====== --> */}
            <div class="form-group  margin-bottom-5px">
              <label>Location:</label>
              <div class="destination">
                <input
                  type="text"
                  class="input-text full-width"
                  placeholder="Location"
                />
              </div>
            </div>
            <div class="form-group  margin-bottom-5px">
              <label>Type of car :</label>
              <div class="destination">
                <input
                  type="text"
                  class="input-text full-width"
                  placeholder="Type of car"
                />
              </div>
            </div>
            <div class="form-group  margin-bottom-5px">
              <label>Pick up Date:</label>
              <div class="date-input">
                <input
                  type="text"
                  class="input-text datepicker full-width"
                  placeholder="15 / 5 / 2017"
                />
              </div>
            </div>
            <div class="form-group margin-bottom-25px">
              <label>Drop off Date:</label>
              <div class="date-input">
                <input
                  type="text"
                  class="input-text datepicker full-width"
                  placeholder="15 / 5 / 2017"
                />
              </div>
            </div>
            <a
              href="#"
              class="btn-sm btn-lg btn-block background-main-color text-white text-center text-uppercase font-weight-600"
            >
              <i class="fa fa-search"></i> Cars Search
            </a>
            {/* <!-- ====== //  Cars ====== --> */}
          </div>
        </div>
        {/* <!-- Tab panes --> */}
      </div>
    </>
  );
};

export default HeroFrom;
