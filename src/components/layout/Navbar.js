/*
 *   Copyright (c) 2021 Pravin Sawant
 *   All rights reserved.
 */
// module start
import React from "react";
import { Link, NavLink } from "react-router-dom";
import './nav.css';
// module end

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger" style={{position:"sticky",top:"0"}}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          React User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          {/* home */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            {/* about */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            {/* contact */}
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
    {/* button */}
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
