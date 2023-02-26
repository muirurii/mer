const Compliance = () => {
    return (
      <div>
        <div className="text-center">
        <br></br>
        <h4>Compliance</h4>
        <hr></hr>
        <br></br>
      </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                License Number
              </th>
              <th scope="col">
                Compliance Code
              </th>
              <th scope="col">
                Inspector Name
              </th>
              <th scope="col">
                Date of Inspection
              </th>
              <th scope="col">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3617</td>
              <td>4667</td>
              <td>John Doe</td>
              <td>02 Nov 2020</td>
              <td>23 Jan 2020</td>
            </tr>
            <tr>
              <td>4356</td>
              <td>6788</td>
              <td>Jane Doe</td>
              <td>01 Dec 2019</td>
              <td>01 Apr 2018</td>
            </tr>
            <tr>
              <td>3617</td>
              <td>4667</td>
              <td>John Doe</td>
              <td>02 Nov 2020</td>
              <td>23 Jan 2020</td>
            </tr>
            <tr>
              <td>4356</td>
              <td>6788</td>
              <td>Jane Doe</td>
              <td>01 Dec 2019</td>
              <td>01 Apr 2018</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Compliance;