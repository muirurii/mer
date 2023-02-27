export default function Profile() {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center bg-white">
      <div className="row d-flex justify-content-center ">
        <div className="col-lg-12 col-md-12">
          <div className="text-center">
            <br></br>
            <h4>Register Profile</h4>
            <hr></hr>
            <br></br>
          </div>
          <form method="post">
            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="username" className="form-label">
                  Full Name or Company name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="email" className="form-label">
                  Customer Ref
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="password" className="form-label">
                  ID/Company registration number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Telephone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirming-password"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  District{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Municipality
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Town
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Full Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <div className="mb-3 col-lg-12 col-md-12">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        If Not Sole Proprietor(Contact Person)
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="username" className="form-label">
                              Contact Person or Manager
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              name="username"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="email" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="password" className="form-label">
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="password"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="password" className="form-label">
                              ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="password"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="password" className="form-label">
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="password"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="password" className="form-label">
                              Work Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="password"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="password" className="form-label">
                              Cell Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="password"
                            />
                          </div>
                          <div className="mb-3 col-lg-6 col-md-6">
                            <label for="password" className="form-label">
                              Job Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 col-lg-6 col-md-6 form-check">
                <br></br>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                  name="terms"
                />
                <label className="form-check-label" for="terms">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <div className="ml-4">
              <br></br>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
