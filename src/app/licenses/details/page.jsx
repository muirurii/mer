export default function LicenseDetails() {
    return (
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>License Details</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="username" className="form-label">Licence Number</label>
                                <input 
                                disabled
                                type="text" className="form-control" id="username"
                                name="username"
                                value="John Doe"
                                readOnly
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="email" className="form-label">Customer Ref</label>
                                <input 
                                disabled
                                type="email"
                                className="form-control" id="email" name="email"
                                value="john@gmail.com"
                                readOnly
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="trading_name" className="form-label">Trading name</label>
                                <input 
                                disabled
                                type="text" className="form-control" 
                                id="trading_name" name="trading_name"
                                value="John Doe"
                                readOnly
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="license_status" className="form-label">Licence status </label>
                                <input type="text" className="form-control"
                                 id="license_status"
                                value="active"
                                disabled
                                readOnly
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="renewal_date" className="form-label">Renewal Date</label>
                                <input 
                                disabled
                                value="2020-04-09"
                                readOnly
                                type="date" className="form-control" id="renewal_date" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="issue" className="form-label">Latest licence issued date </label>
                                <input 
                                disabled
                                value="2021-05-14"
                                readOnly
                                type="date" className="form-control" id="issue" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="confirm-password" className="form-label">Licence Approved by</label>
                                <input 
                                disabled
                                readOnly
                                value="John Doe"
                                type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="confirm-password" className="form-label">Licence Holder Info</label>
                                <input 
                                disabled
                                readOnly
                                value="Jane Doe"
                                type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="confirm-password" className="form-label">Full Name / Business Name</label>
                                <input 
                                disabled
                                readOnly
                                value="Jane Doe"
                                type="text" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label htmlFor="confirm-password" className="form-label">Date of Payment</label>
                                <input 
                                disabled
                                readOnly
                                value="2020-04-09"
                                type="date" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Last amount allocated</label>
                                <input 
                                disabled
                                readOnly
                                value="400"
                                type="date" className="form-control" id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Date of allocation</label>
                                <input 
                                disabled
                                readOnly
                                value="2020-02-23"
                                type="date" className="form-control" id="confirm-password" />
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
                                                        <label htmlFor="username" className="form-label">District</label>
                                                        <input 
                                                        disabled
                                                        readOnly
                                                        value="New District"
                                                        type="text"
                                                        className="form-control" id="username" name="username" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label htmlFor="email" className="form-label">Municipality</label>
                                                        <input 
                                                        disabled
                                                        readOnly
                                                        value="Central"
                                                        type="email" className="form-control" id="email" name="email" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label htmlFor="password" className="form-label">Town</label>
                                                        <input 
                                                        disabled
                                                        readOnly
                                                        value="Center"
                                                        type="text" className="form-control" id="password" name="password" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label htmlFor="password" className="form-label">Full Address</label>
                                                        <input 
                                                        disabled
                                                        readOnly
                                                        value="User address"
                                                        type="text" className="form-control" id="password" name="password" />
                                                    </div>
                                                    <div className="mb-3 col-lg-6 col-md-6">
                                                        <label htmlFor="password" className="form-label">Coordinates</label>
                                                        <input 
                                                        disabled
                                                        readOnly
                                                        value="20467"
                                                        type="text" className="form-control" id="password" name="password" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div> 
        )
}
