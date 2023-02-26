import Image from 'next/image'
import { Inter } from 'next/font/google'
export default function LicenseDetails() {
    return (
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>Apply New License</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="username" className="form-label">Licence Number</label>
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
                                <label for="confirm-password" className="form-label">Licence status </label>
                                <input type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Renewal Date</label>
                                <input type="date" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Latest licence issued date </label>
                                <input type="date" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Licence Approved by</label>
                                <input type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Licence Holder Info</label>
                                <input type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Full Name / Business Name</label>
                                <input type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Date of Payment</label>
                                <input type="date" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Last amount allocated</label>
                                <input type="date" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Date of allocation</label>
                                <input type="date" className="form-control" id="confirm-password" />
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
                            <button type="submit" className="btn btn-primary">Apply for license</button>
                        </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div>
    )
}
