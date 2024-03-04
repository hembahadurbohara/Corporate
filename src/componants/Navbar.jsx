import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container ">
        <a className="navbar-brand " href="/">
          <img id='im' src="https://image.similarpng.com/very-thumbnail/2021/09/Abstract-Letter-H-3D-Logo-template-on-transparent-background-PNG.png" alt="Logo" /> H Insurance Company
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Overview</a></li>
                <li><a className="dropdown-item" href="#">Board of Directors</a></li>
                <li><a className="dropdown-item" href="#">Management Team</a></li>
                <li><a className="dropdown-item" href="#">Vision and Mission</a></li>
                <li><a className="dropdown-item" href="#">Reinsurer</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Investor Relations</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Quarterly Reports</a></li>
                <li><a className="dropdown-item" href="#">Annual Reports</a></li>
                <li><a className="dropdown-item" href="#">Achievement</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Endowment Policies</a></li>
                <li><a className="dropdown-item" href="#">Endowment and whole life</a></li>
                <li><a className="dropdown-item" href="#">Term Insurance</a></li>
                <li><a className="dropdown-item" href="#">Money Back Policies</a></li>
                <li><a className="dropdown-item" href="#">Micro Insurance</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">FE Policy</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">FE Policy Individual</a></li>
                <li><a className="dropdown-item" href="#">FE Policy Manpower</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Customer Care</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Pay Premium</a></li>
                <li><a className="dropdown-item" href="#">Survival Benefits Payment</a></li>
                <li><a className="dropdown-item" href="#">Maturity Payment Inquiry</a></li>
                <li><a className="dropdown-item" href="#">Apply for Policy</a></li>
                <li><a className="dropdown-item" href="#">FAQ</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Agency</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Apply For Training</a></li>
                <li><a className="dropdown-item" href="#">Training Schedule</a></li>
                <li><a className="dropdown-item" href="#">Code of Conduct</a></li>
                <li><a className="dropdown-item" href="#">Training Resources</a></li>
                <li><a className="dropdown-item" href="#">Active Agency List</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Media</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Notice</a></li>
                <li><a className="dropdown-item" href="#">News and Updates</a></li>
                <li><a className="dropdown-item" href="#">Blogs</a></li>
                <li><a className="dropdown-item" href="#">Gallery</a></li>
                <li><a className="dropdown-item" href="#">Downloads</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Endowment Policies</a></li>
                <li><a className="dropdown-item" href="#">Endowment and whole life</a></li>
                <li><a className="dropdown-item" href="#">Term Insurance</a></li>
                <li><a className="dropdown-item" href="#">Money Back Policies</a></li>
                <li><a className="dropdown-item" href="#">Micro Insurance</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
