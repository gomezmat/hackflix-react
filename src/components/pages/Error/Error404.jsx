import React from "react";
import "./Error404.css";
import logo from "/error404.svg";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className="divError">
        <div className="title-error">
          <h1 className="text-white mb-4">Something went wrong</h1>
          <p className="text-white mb-4">
            Sorry, we couldn't find the page you were looking for. To return to
            the <strong className="text-danger">Hackflix</strong> homepage click
            on the button below.
          </p>
          <Link to="/">
            <strong className="btn btn-dark p-3">Go Home</strong>
          </Link>
        </div>
        <div className="image">
          <img src={logo} alt="error404" />
        </div>
      </div>
    </>
  );
}

export default Error404;
