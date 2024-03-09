import React from  'react';
import ReactDOM from 'react-dom';

function Header () {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img id="brand-logo" src="/brand-logo.png" alt='Brand Logo' />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
              </li>
            <li>
            <form class="d-flex mx-auto" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </li>
        </ul>
         <button class="btn btn-outline-primary me-2">Sign Up</button>  
         <button class="btn btn-outline-success me-2">Login</button>
          </div>
        </div>
      </nav>
        </div>
    );
}

export default  Header;