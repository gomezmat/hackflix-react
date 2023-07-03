import React from "react";
import profilePic from "/profilepic.png";
import linkedin from "/linkedin.png";
import github from "/github.png";
import reactLogo from "/reactLogo.svg";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="container">
        <div className="infoContact mt-5 mb-5">
          <div className="row">
            <div className="col-12">
              <div className="">
                <div>
                  <img
                    className="mt-4"
                    id="profilePic"
                    src={profilePic}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-white">
              <div className="text-center mt-3">
                <h2>Contact me!</h2>
                <h5>This project was created by Mateo Gómez</h5>
                <h5>
                  using: <span className="span-react"> React </span>
                </h5>
                <img
                  src={reactLogo}
                  className="react-logo mt-4"
                  alt="React logo"
                />
              </div>
              <div className="m-5">
                <p>
                  Im a full stack developer participating in a 3-month bootcamp
                  with over 600 hours dedicated to programming is an individual
                  who possesses a comprehensive understanding of both front-end
                  and back-end development. I have embarked on an intensive
                  training program to gain proficiency in various technologies
                  and frameworks, enabling them to handle all aspects of web
                  development.
                </p>
                <p>
                  The bootcamp's immersive nature, lasting 3 months and
                  dedicating over 600 hours to programming, allows me to gain
                  practical experience by working on real-world projects. They
                  collaborate with their peers, participate in coding
                  challenges, and receive guidance from experienced instructors,
                  ultimately honing their skills and becoming well-rounded
                  professionals capable of handling end-to-end web development
                  projects.
                </p>
              </div>
              <div className="links-contact d-flex justify-content-center mb-5">
                <a href="https://www.linkedin.com/in/mateo-g%C3%B3mez-mello/">
                  <img
                    className="img-links-contact me-3"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
                <a href="https://github.com/gomezmat">
                  <img
                    className="img-links-contact"
                    src={github}
                    alt="github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
