const Invoice = () => {
    return (
      <div>
        <div className="text-center">
        <br></br>
        <h4>Invoices</h4>
        <hr></hr>
        <br></br>
      </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                Invoice Number
              </th>
              <th scope="col">
                Linked Account
              </th>
              <th scope="col">
                Amount
              </th>
              <th scope="col">
                Date issued
              </th>
              <th scope="col">
                Date of Upload
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3617</td>
              <td>John Doe</td>
              <td>4</td>
              <td>23 Nov 2020</td>
              <td>02 Jan 2019</td>
            </tr>
            <tr>
              <td>4356</td>
              <td>Jane Doe</td>
              <td>3</td>
              <td>01 Apr 2019</td>
              <td>01 Dec 2017</td>
            </tr>
            <tr>
              <td>3617</td>
              <td>John Doe</td>
              <td>4</td>
              <td>23 Nov 2020</td>
              <td>02 Jan 2019</td>
            </tr>
            <tr>
              <td>4356</td>
              <td>Jane Doe</td>
              <td>3</td>
              <td>01 Apr 2019</td>
              <td>01 Dec 2017</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Invoice;
  