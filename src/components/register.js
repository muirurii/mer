export default function Register() {
    return (
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>Register</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="password" className="form-label">Trading name</label>
                                <input type="text" className="form-control" id="password" name="password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Email</label>
                                <input type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Password</label>
                                <input type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Confirm Password</label>
                                <input type="text" className="form-control" id="confirm-password" />
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
                            <div className="mb-3 col-lg-6 col-md-6 form-check">
                                <br></br>
                                <input type="checkbox" className="form-check-input" id="terms" name="terms" />
                                <label className="form-check-label" for="terms">I agree to the <a href="#">terms and conditions</a></label>
                            </div>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6">
                            <br></br>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div>
    )
}
