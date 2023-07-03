import React from "react";
import { Carousel } from "antd";
import "./Header.css";

function Header() {
  return (
    <header className="mb-5">
      <Carousel autoplay autoplaySpeed={10000}>
        <div className="carousel1">
          <div className="top-movies ms-3 mt-3 text-center">
            <span>
              <strong>Our top movies</strong>{" "}
            </span>
          </div>
          <div className="carousel-title-div text-center">
            <h3 className="mb-2">Discover Your Cinematic Favorites!</h3>
            <h6 className="ms-3 me-3">
              Immerse Yourself in the World of Movies: Your Boundless Cinematic
              Adventure.
            </h6>
          </div>
        </div>
        <div className="carousel2">
          <div className="top-movies ms-3 mt-3 text-center">
            <span>
              <strong>Our top movies</strong>{" "}
            </span>
          </div>
          <div className="carousel-title-div text-center">
            <h3 className="mb-2">Unleash Your Movie Obsession!</h3>
            <h6 className="ms-3 me-3">
              Unlock the Magic of Cinema: Dive into Endless Movie Marvels.
            </h6>
          </div>
        </div>
        <div className="carousel3">
          <div className="top-movies ms-3 mt-3 text-center">
            <span>
              <strong>Our top movies</strong>{" "}
            </span>
          </div>
          <div className="carousel-title-div text-center">
            <h3 className="mb-2">Indulge in Your Movie Passion!</h3>
            <h6 className="ms-3 me-3">
              Indulge in Cinematic Delights: Your Gateway to Film Bliss
            </h6>
          </div>
        </div>
        <div className="carousel4">
          <div className="top-movies ms-3 mt-3 text-center">
            <span>
              <strong className="">Our top movies</strong>
            </span>
          </div>
          <div className="carousel-title-div text-center">
            <h3 className="mb-2">Lights, Camera, Favorites!</h3>
            <h6 className="ms-3 me-3">
              Embrace the Silver Screen: Discover a Universe of Movie Wonders.
            </h6>
          </div>
        </div>
      </Carousel>
    </header>
  );
}

export default Header;
