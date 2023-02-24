import Image from 'next/image'
import { Inter } from 'next/font/google'
import Register from '@/components/register'
const inter = Inter({ subsets: ['latin'] })
import Nav from '@/components/nav'
export default function LicenseDetails() {
    return (
        <>
         <Nav/>
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>License Form</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="username" class="form-label">Licence Number</label>
                                <input type="text" class="form-control" id="username" name="username" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="email" class="form-label">Customer Ref</label>
                                <input type="email" class="form-control" id="email" name="email" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="password" class="form-label">Trading name</label>
                                <input type="text" class="form-control" id="password" name="password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Licence status </label>
                                <input type="text" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Renewal Date</label>
                                <input type="date" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Latest licence issued date </label>
                                <input type="date" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Licence Approved by</label>
                                <input type="text" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Licence Holder Info</label>
                                <input type="text" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Full Name / Business Name</label>
                                <input type="text" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Date of Payment</label>
                                <input type="date" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Last amount allocated</label>
                                <input type="date" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" class="form-label">Date of allocation</label>
                                <input type="date" class="form-control" className="Email address" id="confirm-password" />
                            </div>
                            <div class="mb-3 col-lg-12 col-md-12">
                                <div class="accordion" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                Address
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div class="accordion-body">
                                                <div className='row'>
                                                    <div class="mb-3 col-lg-6 col-md-6">
                                                        <label for="username" class="form-label">District</label>
                                                        <input type="text" class="form-control" id="username" name="username" />
                                                    </div>
                                                    <div class="mb-3 col-lg-6 col-md-6">
                                                        <label for="email" class="form-label">Municipality</label>
                                                        <input type="email" class="form-control" id="email" name="email" />
                                                    </div>
                                                    <div class="mb-3 col-lg-6 col-md-6">
                                                        <label for="password" class="form-label">Town</label>
                                                        <input type="text" class="form-control" id="password" name="password" />
                                                    </div>
                                                    <div class="mb-3 col-lg-6 col-md-6">
                                                        <label for="password" class="form-label">Full Address</label>
                                                        <input type="text" class="form-control" id="password" name="password" />
                                                    </div>
                                                    <div class="mb-3 col-lg-6 col-md-6">
                                                        <label for="password" class="form-label">Coordinates</label>
                                                        <input type="text" class="form-control" id="password" name="password" />
                                                    </div>
                                                    
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6 form-check">
                                <br></br>
                                <input type="checkbox" class="form-check-input" id="terms" name="terms" />
                                <label class="form-check-label" for="terms">I agree to the <a href="#">terms and conditions</a></label>
                            </div>
                            <div class="mb-3 col-lg-6 col-md-6">
                                <br></br>
                                <button type="submit" class="btn btn-outline-primary">Register</button>
                            </div>

                        </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div>
        </>
    )
}
