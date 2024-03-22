import React from 'react';
import SignIn from './SignIn';
import '../styles/Header2.css';
function Header() {

  return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img id="brand-logo" src="/images/brand-logo (1) (1).png" alt='Brand Logo' />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item header-element">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                  {/* <Link to="/" class="nav-link active">Home</Link> */}
                </li>
                <li class="nav-item header-element">
                  <a class="nav-link" href='/shop' >Shop</a>
                  {/* <Link to="/shop" class="nav-link">Shop</Link> */}
                </li>
                <li class="nav-item header-element">
                  <a class="nav-link" href="#">Categories</a>
                </li>
                <li>
                  <form class="d-flex mx-auto header-element" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </li>
              </ul>
              <div>
                <img className='header-element' src='./images/e-commerce (1).png' alt='wishlist-img' />
                <img className='header-element' src='./images/shopping-bag (1).png' alt='cart-img' />
                <img className='header-element' src='./images/person.png' alt='user-img' /> {/*<SignIn />*/}
              </div>
              <button class="btn btn-outline-primary me-2">Sign Up</button>
              <button class="btn btn-outline-success me-2">Login</button>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Header;