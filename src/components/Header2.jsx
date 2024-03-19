import React from "react";
import '../styles/Header2.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Header2() {

  return (
    <div className="start-nav">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand me-auto" href="#">
            <img src="../images/brand-logo (1) (1).png" alt="" />
          </a>
          <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="../images/brand-logo (1) (1).png" alt="" />
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-left pe-3">
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item mx-lg-2">
                  <a class="nav-link" href="/shop">Shop</a>
                </li>
                <li class="nav-item mx-lg-2">
                  <a class="nav-link" href="#">Categories</a>
                </li>
                <li class="nav-item mx-lg-2">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
          <a href="#" class="login-button">Login</a>
          <button class="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    </div>
  );
}

export default Header2;