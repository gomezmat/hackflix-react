import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column align-items-center">
                <h5 className="hackflix-footer text-danger">HACKFLIX</h5>
                <h6 className="text-white">Hack Academy &#169;</h6>
                <small className="text-secondary">
                  Mateo Gómez | All rights reserved
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
