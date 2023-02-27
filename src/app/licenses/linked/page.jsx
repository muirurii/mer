import Link from "next/image";

const page = () => {
  return (
      <div className="container h-100">
        <div className="text-center">
          <br></br>
          <h4>Linked Licenses</h4>
          <hr></hr>
          <br></br>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>LICENSE NO</th>
                <th>TRADING NO</th>
                <th>STATUS</th>
                <th>LAST RENEWED</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    3617
                </td>
                <td>
                    4667
                </td>
                <td>
                    Active
                </td>
                <td>
                    02 Nov 2020
                </td>
                <td>
                <Link href="/licenses/details" className="btn btn-primary btn-sm">View</Link>
                </td>
            </tr>
            <tr>
                <td>
                    4356
                </td>
                <td>
                    6788
                </td>
                <td>
                    Expired
                </td>
                <td>
                    01 Dec 2019
                </td>
                <td>
                <Link href="/licenses/details" className="btn btn-primary btn-sm">View</Link>
                </td>
            </tr>
            <tr>
                <td>
                    3617
                </td>
                <td>
                    4667
                </td>
                <td>
                    Active
                </td>
                <td>
                    02 Nov 2020
                </td>
                <td>
                <Link href="/licenses/details" className="btn btn-primary btn-sm">View</Link>
                </td>
            </tr>
            <tr>
                <td>
                    4356
                </td>
                <td>
                    6788
                </td>
                <td>
                    Expired
                </td>
                <td>
                    01 Dec 2019
                </td>
                <td>
                <Link href="/licenses/details" className="btn btn-primary btn-sm">View</Link>
                </td>
            </tr>
            <tr>
                <td>
                    3617
                </td>
                <td>
                    4667
                </td>
                <td>
                    Active
                </td>
                <td>
                    02 Nov 2020
                </td>
                <td>
                <Link href="/licenses/details" className="btn btn-primary btn-sm">View</Link>
                </td>
            </tr>
            <tr>
                <td>
                    4356
                </td>
                <td>
                    6788
                </td>
                <td>
                    Expired
                </td>
                <td>
                    01 Dec 2019
                </td>
                <td>
                <Link href="/licenses/details" className="btn btn-primary btn-sm">View</Link>
                </td>
            </tr>
        </tbody>
          </table>
        </div>
      </div>
  );
};

export default page;
