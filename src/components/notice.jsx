const Notice = () => {
  return (
    <div>
      <div className="text-center">
        <br></br>
        <h4>Notices</h4>
        <hr></hr>
        <br></br>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Notice Name</th>
            <th scope="col">Approved By</th>
            <th scope="col">Date of Approval</th>
            <th scope="col">Date of Upload</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Notice 1</td>
            <td>John Doe</td>
            <td>02 Nov 2020</td>
            <td>23 Jan 2020</td>
          </tr>
          <tr>
            <td>Notice 2</td>
            <td>Jane Doe</td>
            <td>01 Dec 2019</td>
            <td>01 Apr 2018</td>
          </tr>
          <tr>
            <td>Notice 1</td>
            <td>John Doe</td>
            <td>02 Nov 2020</td>
            <td>23 Jan 2020</td>
          </tr>
          <tr>
            <td>Notice 2</td>
            <td>Jane Doe</td>
            <td>01 Dec 2019</td>
            <td>01 Apr 2018</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Notice;
