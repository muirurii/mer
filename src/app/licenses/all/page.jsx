const AllLicenses = () => {
  return (
    <div>
        <div className="text-center">
        <br></br>
        <h4>All Licenses</h4>
        <hr></hr>
        <br></br>
      </div>
<table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">
              License No
            </th>
            <th scope="col">
              Customer Ref
            </th>
            <th scope="col">
              Trading Name
            </th>
            <th scope="col">
              Status
            </th>
            <th scope="col">
              Renewal Date
            </th>
            <th scope="col">
              Issue Date
            </th>
            <th scope="col">
              Holder Info
            </th>
            <th scope="col">
              Full Name / Business Name
            </th>
            <th scope="col">
              Date of payment
            </th>
            <th scope="col">
              Last amount allocated
            </th>
            <th scope="col">
              Date of allocation
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5262</td>
            <td>4576</td>
            <td>John Doe</td>
            <td>Active</td>
            <td>13 March 2020</td>
            <td>06 Feb 2021</td>
            <td>Info</td>
            <td>John Doe</td>
            <td>15 Feb 2020</td>
            <td>R 450</td>
            <td>05 Dec 2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AllLicenses;