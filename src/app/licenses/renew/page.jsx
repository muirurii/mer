export default function LicenseDetails() {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center bg-white">
      <div className="row d-flex justify-content-center ">
        <div className="col-lg-12 col-md-12">
          <div className="text-center">
            <br></br>
            <h4>Renew License</h4>
            <hr></hr>
            <br></br>
          </div>
          <form method="post">
            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="username" className="form-label">
                  License Application type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  readOnly
                  disabled
                  value="Renewal"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="username" className="form-label">
                  License Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  readOnly
                  disabled
                  value={123}
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="password" className="form-label">
                  Trading name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  readOnly
                  disabled
                  value="John Doe"
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
                  value="REF"
                  readOnly
                  disabled
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  License status{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="active"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Application Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="2020-01-05"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Latest license issued date{" "}
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="2020-01-05"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Amount due to MER
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="20"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Payment type
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">MER Online payment</option>
                  <option value="2">Bank</option>
                  <option value="3">EFT</option>
                </select>
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  District
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="New District"
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
                  readOnly
                  disabled
                  value="East"
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
                  readOnly
                  disabled
                  value="East"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Full address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="523"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Election Ward number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="523"
                />
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <label for="confirm-password" className="form-label">
                  Coordinates
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  readOnly
                  disabled
                  value="523"
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
                        Optional
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
                              Institution close to your outlet
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
                              Type of institution
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
                              Institution className
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
                              Estimated distance (kilometers)
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
                        Other
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <div className="column">
                          <div className="mb-3">
                            <label for="username" className="form-label w-100">
                              Are you an unrehabilitated insolvent
                            </label>
                            <select className="form-select" aria-label="Select">
                              <option selected>Open this select menu</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="email" className="form-label w-100">
                              Are you the subject of a court order declaring you
                              a person of unsound mind/ mentally
                              disordered/mentally defective?
                            </label>
                            <select className="form-select" aria-label="Select">
                              <option selected>Open this select menu</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="password" className="form-label w-100">
                              Have you been convicted of contravening the
                              Mpumalanga Liquor Licensing Act, 2006 for the past
                              three years?
                            </label>
                            <select className="form-select" aria-label="Select">
                              <option selected>Open this select menu</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="password" className="form-label w-100">
                              Have you been convicted of an offense the elements
                              of which are inconsistent with the object of the
                              Mpumalanga Liquor Licensing Act, 2006 for the past
                              three years?
                            </label>
                            <select className="form-select" aria-label="Select">
                              <option selected>Open this select menu</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="password" className="form-label w-100">
                              Have any Compliance Notices been issued to the
                              business during the past 12 months?
                            </label>
                            <select className="form-select" aria-label="Select">
                              <option selected>Open this select menu</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="password" className="form-label w-100">
                              Have any “Written Notice to Appear in Court” been
                              issued to the business during the past 12 months?
                            </label>
                            <select className="form-select" aria-label="Select">
                              <option selected>Open this select menu</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="password" className="form-label w-100">
                              Did you pay any admission of guilt fines for any
                              contraventions pertaining to liquor trading during
                              the past 12 months?
                            </label>
                            <select className="form-select" aria-label="Select">
                              <option selected>Open this select menu</option>
                              <option value="1">Yes</option>
                              <option value="2">No</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label for="password" className="form-label">
                              Supporting documents
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Upload documents"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 col-lg-6 col-md-6">
                <br></br>
                <button type="submit" className="btn btn-primary">
                  Renew
                </button>
              </div>
            </div>
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}
