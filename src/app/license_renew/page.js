export default function LicenseDetails() {
    return (
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>Renew License</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="username" className="form-label">License Number</label>
                                <input type="text" className="form-control" id="username" name="username" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="email" className="form-label">Customer Ref</label>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="password" className="form-label">Trading name</label>
                                <input type="text" className="form-control" id="password" name="password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">License status </label>
                                <input type="text" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Renewal Date</label>
                                <input type="date" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Latest license issued date </label>
                                <input type="date" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">License Approved by</label>
                                <input type="text" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">License Holder Info</label>
                                <input type="text" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Full Name / Business Name</label>
                                <input type="text" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Date of Payment</label>
                                <input type="date" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Last amount allocated</label>
                                <input type="date" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Date of allocation</label>
                                <input type="date" className="form-control Email address" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-12 col-md-12">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                Address
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="accordion-body">
                                                <div className='row'>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="username" className="form-label">District</label>
                                                        <input type="text" className="form-control" id="username" name="username" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="email" className="form-label">Municipality</label>
                                                        <input type="email" className="form-control" id="email" name="email" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="password" className="form-label">Town</label>
                                                        <input type="text" className="form-control" id="password" name="password" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="password" className="form-label">Full Address</label>
                                                        <input type="text" className="form-control" id="password" name="password" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="password" className="form-label">Coordinates</label>
                                                        <input type="text" className="form-control" id="password" name="password" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label className="form-label">Trading Hours</label>
                                <br></br>
                                
                                <input type='checkbox'/> <span>Monday</span><br></br>
                                <input type='checkbox'/> <span>Tuesday</span><br></br>
                                <input type='checkbox'/> <span>Wednesday</span><br></br>
                                <input type='checkbox'/> <span>Thursday</span><br></br>
                                <input type='checkbox'/> <span>Friday</span><br></br>
                                <input type='checkbox'/> <span>Saturday</span><br></br>
                                <input type='checkbox'/> <span>Sunday</span><br></br>
                                <input type='checkbox'/> <span>Public Holidays</span><br></br>
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <br></br>
                                <button type="submit" className="btn btn-outline-primary">Register</button>
                            </div>

                        </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div>
    )
}
