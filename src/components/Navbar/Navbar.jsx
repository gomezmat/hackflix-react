import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <div
            id="hackflix"
            className="navbar-brand text-danger font-weight-bold me-auto"
            href="#"
          >
            <Link className="text-danger" to="/">
              HACKFLIX
            </Link>
          </div>

          <div id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  <div
                    id="links-navbar"
                    className="d-flex ms-3 align-items-center"
                  >
                    <Link className="home-link" to="/">
                      <strong>Home</strong>
                    </Link>
                    <Link className="home-link" to="/about-us">
                      <strong>About us</strong>
                    </Link>
                    <Link className="home-link" to="/contact">
                      <strong>Contact</strong>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
