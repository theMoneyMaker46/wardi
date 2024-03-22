import React from "react";
import '../styles/Header2.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Header2({cartCount}) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">
            <img src="../images/brand-logo (1) (1).png" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="../images/brand-logo (1) (1).png" alt="" />
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ps-3">
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item mx-lg-2">
                  <a className="nav-link" href="/shop">Shop</a>
                </li>
                <li className="nav-item mx-lg-2">
                  <a className="nav-link" href="#">Categories</a>
                </li>
                <li className="nav-item mx-lg-2">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
              <form className="d-flex ps-4" role="search">
                <input className="form-control me-2 searchBar" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success searchButton" type="submit">Search</button>
                {/* <a className="nav-link" href="#"><img src="../images/search.png" alt="search-icon" /></a> */}
              </form>
              <div className="ms-auto d-flex  align-items-center">
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link pe-4" href="#" aria-expanded="false"><img src="../images/wishlist (1).png" alt="Wishlist" /></a></li>
                  <li className="nav-item"><a className="nav-link pe-4" href="#"><img src="../images/cart(1).png" alt="Shopping Bag" />{cartCount > 0 ? cartCount : ""}</a></li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle pe-4" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="../images/person.png" alt="User" />
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <a href="#" className="ms-lg-4 pe-4 login-button">Login</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
    </div>
  );
}

export default Header2;
