
export default function LicenseDetails() {
    return (
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>Approvers View</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="username" className="form-label">Licence Number</label>
                                <input type="text" className="form-control"
                                id="username" name="username"
                                value="John Doe"
                                readOnly
                                disabled
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="email" className="form-label">Customer Ref</label>
                                <input type="email" className="form-control" 
                                id="email" name="email" 
                                value="REF2"
                                readOnly
                                disabled
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="password" className="form-label">Trading name</label>
                                <input type="text" className="form-control"
                                id="password" name="password"
                                value="John Doe"
                                readOnly
                                disabled
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password"
                                className="form-label">Payment Verified</label>
                                <input type="text" className="form-control"
                                id="confirm-password" 
                                readOnly
                                disabled
                                value="Yes"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Application date </label>
                                <input type="date" className="form-control"
                                value="2020-12-02"
                                id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password" className="form-label">Approved By</label>
                                <input type="text" className="form-control"
                                id="confirm-password" />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password"
                                className="form-label">Amount Paid</label>
                                <input type="text" className="form-control"
                                value="340"
                                readOnly
                                disabled
                                id="confirm-password" />
                            </div>
                        </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <br></br>
                                <button type="submit" className="btn btn-primary">Approve</button>
                            </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div>
    )
}
