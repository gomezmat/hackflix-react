import React from "react";
import firstProfile from "/profile1.jpg";
import secondProfile from "/profile2.jpg";
import thirdProfile from "/profile3.jpg";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 id="about-us-title" className="text-center mt-5 text-danger">
              HACKFLIX
            </h1>
            <small className="span-about-us d-flex justify-content-center text-white text-center mt-3 fw-bold">
              "Unleash your inner film buff with Hackflix: Your gateway to
              limitless cinematic adventures."
            </small>
            <p className="text-white text-center mt-3">
              Hackflix is a leading online platform for movies, offering an
              extensive collection of films for a captivating cinematic
              experience. With a user-friendly interface and a vast library of
              diverse genres, Hackflix provides endless entertainment options
              for movie enthusiasts. From Hollywood blockbusters to independent
              gems, our website delivers seamless streaming and an immersive
              movie-watching experience. Discover and enjoy the latest releases,
              timeless classics, and hidden gems from the comfort of your own
              home with Hackflix.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div
              className="card mt-5 mb-5 bg-dark text-white border border-white card-box-shadow hover-card"
              style={{ width: "18rem" }}
            >
              <img src={firstProfile} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="text-center fw-bold">Andres Prieto</p>
                <p className="card-text">
                  Tech-savvy problem solver, transforming ideas into functional
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div
              className="card mt-5 mb-5 bg-dark text-white border border-white card-box-shadow hover-card"
              style={{ width: "18rem" }}
            >
              <img src={secondProfile} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="text-center fw-bold">Mateo Gómez</p>
                <p className="card-text">
                  Dedicated coder crafting elegant solutions with precision and
                  expertise.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div
              className="card mt-5 mb-5 bg-dark text-white border border-white card-box-shadow hover-card"
              style={{ width: "18rem" }}
            >
              <img src={thirdProfile} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="text-center fw-bold">Diego Arrigonni</p>
                <p className="card-text">
                  Innovative programmer exploring new horizons in software
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
