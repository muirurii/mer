import Link from "next/link";

const Users = () => {
  return (
    <div>
      <div className="text-center">
        <br></br>
        <h4>All Users</h4>
        <hr></hr>
        <br></br>
      </div>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Customer Ref</th>
            <th scope="col">Registration No</th>
            <th scope="col">Email</th>
            <th scope="col">Cell No</th>
            <th scope="col">Telephone No</th>
            <th scope="col">District</th>
            <th scope="col">Municipality</th>
            <th scope="col">Address</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Doe</td>
            <td>2345</td>
            <td>5671</td>
            <td>jane@gmail.com</td>
            <td>+3463622</td>
            <td>West</td>
            <td>Township</td>
            <td>Town</td>
            <td>34567</td>
           <td><Link href="/client/details" className="btn btn-primary btn-sm">View</Link></td>
           <td><Link href="/client/edit" className="btn btn-primary btn-sm">Edit</Link></td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>456</td>
            <td>5672</td>
            <td>johndoe@gmail.com</td>
            <td>51673</td>
            <td>+3625673</td>
            <td>Central</td>
            <td>East</td>
            <td>4678</td>
           <td><Link href="/client/details" className="btn btn-primary btn-sm">View</Link></td>
           <td><Link href="/client/edit" className="btn btn-primary btn-sm">Edit</Link></td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>2345</td>
            <td>5671</td>
            <td>jane@gmail.com</td>
            <td>+3463622</td>
            <td>West</td>
            <td>Township</td>
            <td>Town</td>
            <td>34567</td>
           <td><Link href="/client/details" className="btn btn-primary btn-sm">View</Link></td>
           <td><Link href="/client/edit" className="btn btn-primary btn-sm">Edit</Link></td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>456</td>
            <td>5672</td>
            <td>johndoe@gmail.com</td>
            <td>51673</td>
            <td>+3625673</td>
            <td>Central</td>
            <td>East</td>
            <td>4678</td>
           <td><Link href="/client/details" className="btn btn-primary btn-sm">View</Link></td>
           <td><Link href="/client/edit" className="btn btn-primary btn-sm">Edit</Link></td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>2345</td>
            <td>5671</td>
            <td>jane@gmail.com</td>
            <td>+3463622</td>
            <td>West</td>
            <td>Township</td>
            <td>Town</td>
            <td>34567</td>
           <td><Link href="/client/details" className="btn btn-primary btn-sm">View</Link></td>
           <td><Link href="/client/edit" className="btn btn-primary btn-sm">Edit</Link></td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>456</td>
            <td>5672</td>
            <td>johndoe@gmail.com</td>
            <td>51673</td>
            <td>+3625673</td>
            <td>Central</td>
            <td>East</td>
            <td>4678</td>
           <td><Link href="/client/details" className="btn btn-primary btn-sm">View</Link></td>
           <td><Link href="/client/edit" className="btn btn-primary btn-sm">Edit</Link></td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Users;
