import React, { Component } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Counter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            ContactUs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
