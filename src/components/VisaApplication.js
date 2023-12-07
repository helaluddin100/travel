import React from "react";

function VisaApplication() {
  return (
    <div>
      <section>
        <div className="visa">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="visa-form">
                  <div className="form-title">
                    <h3>Online Visa Application</h3>
                  </div>
                  <div className="visa-form-input">
                    <form action="">
                      <div className="form-group">
                        <label for="exampleInputPassword1">Applicant ID</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="#8914"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Visa For</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="ITALY"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="MR"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Mobile Number</label>
                        <div className="row">
                          <div className="col-2">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="+880"
                            />
                          </div>
                          <div className="col-10">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-submit-btn">
                        <button type="submit" className="visa-submit-btn">
                          APPLY NOW
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisaApplication;
