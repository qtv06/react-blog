import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
      <div className="container">
        <div className="topbar-left">
          <button className="topbar-toggler">☰</button>
          <a className="topbar-brand" href="index.html">
            <img className="logo-default" src="assets/img/logo.png" alt="logo" />
            <img className="logo-inverse" src="assets/img/logo-light.png" alt="logo" />
          </a>
        </div>
        <div className="topbar-right">
          <ul className="topbar-nav nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/new-artice" className="nav-link">Write new article</Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link">Hey Garry!
                <i className="fa fa-caret-down" />
              </Link>
              <div className="nav-submenu">
                <Link to="/single-article" className="nav-link">My articles</Link>
                <Link to="/logout" className="nav-link">Logout</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;