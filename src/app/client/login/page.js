
export default function Login() {
    return (
        <div className='container h-100 d-flex flex-column justify-content-center bg-white'>
            <div className='row d-flex justify-content-center '>
                <div className="col-lg-12 col-md-12">
                    <div className='text-center'>
                        <br></br>
                        <h4>Log in</h4>
                        <hr></hr>
                        <br></br>
                    </div>
                    <form method='post'>
                        <div className='row'>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="username" className="form-label">Customer Ref</label>
                                <input type="text" className="form-control"
                                id="username" name="username"
                                />
                            </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <label for="confirm-password"
                                className="form-label">Password</label>
                                <input type="text" className="form-control"
                                value="340"
                                readOnly
                                disabled
                                id="confirm-password" />
                            </div>
                        </div>
                            <div className="mb-3 col-lg-6 col-md-6">
                                <br></br>
                                <button type="submit" className="btn btn-primary">Log in</button>
                            </div>
                    </form>
                    <br></br><br></br>
                </div>
            </div>
        </div>
    )
}
