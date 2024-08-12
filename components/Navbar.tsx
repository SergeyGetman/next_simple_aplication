import React from 'react';
import NavigateLink from './NavigateLink';

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light
                bg-dark bg-opacity-75 fixed-top text-light"
      >
        <div className="container">
          <NavigateLink className="navbar-brand text-light font-bold" href="/">
            GFG Blogs
          </NavigateLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavigateLink href="/" className="nav-item nav-link text-light">
                  Home
                </NavigateLink>
              </li>
              <li className="nav-item">
                <NavigateLink href="/blogcreate" className="nav-item nav-link text-light">
                  Create new Blog
                </NavigateLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
