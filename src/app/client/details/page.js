export default function UserDetails() {
    return (
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>User Details</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="username" className="form-label">Full name or Company name</label>
                                <input type="text" className="form-control"
                                id="username" name="username"
                                placeholder="John Doe"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="email" className="form-label">Customer Ref</label>
                                <input type="email" className="form-control"
                                id="email" name="email"
                                placeholder="REF"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="password" className="form-label">ID/Company registration number <span className="green-tag">Verified</span></label>
                                <input type="text" className="form-control"
                                id="password" placeholder="2335"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Email address <span className="green-tag">Verified</span></label>
                                <input type="text" className="form-control"
                                id="confirm-password" 
                                placeholder="john@gmail.com"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Cell number <span className="green-tag">Verified</span></label>
                                <input type="text" className="form-control"
                                id="confirm-password" 
                                placeholder="123456"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Telephone number</label>
                                <input type="text" className="form-control"
                                id="confirm-password"
                                placeholder="12345"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">District</label>
                                <input type="text" className="form-control"
                                id="confirm-password"
                                placeholder="New district"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Municipality</label>
                                <input type="text" className="form-control"
                                id="confirm-password"
                                placeholder="Central"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Town</label>
                                <input type="text" className="form-control"
                                placeholder="East"
                                id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Full address</label>
                                <input type="text" className="form-control"
                                placeholder="6729"
                                id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-12 col-md-12">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                More
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="accordion-body">
                                                <div className='row'>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="username" className="form-label">Contact Person or Manager</label>
                                                        <input type="text" className="form-control"
                                                        id="username" name="username"
                                                        placeholder="John Doe"
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="email" className="form-label">Full name</label>
                                                        <input type="text" className="form-control" id="email" 
                                                        name="email" 
                                                        placeholder="John Doe"
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label for="password" className="form-label">Work number</label>
                                                        <input type="text" className="form-control" id="password"
                                                        name="password" 
                                                        placeholder="3245"
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
                                <input type="checkbox" className="form-check-input" id="terms" name="terms" />
                                <label className="form-check-label" for="terms">I agree to the <a href="#">terms and conditions</a></label>
                            </div>
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6">
                            <br></br>
                            <button type="submit" className="btn btn-primary">Apply for license</button>
                        </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div>
    )
}
