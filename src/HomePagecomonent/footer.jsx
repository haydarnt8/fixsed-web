import React from "react";

const footer = () => {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1" href="#home">
              Home
            </a>
            <a href="#about">About</a>

            <a href="#accidents">Accidents</a>

            <a href="countries">Countries</a>

            <a href="#internationallaws">International Laws</a>

            <a href="#faq">FAQ</a>

            <a href="#faq">Contact</a>
          </p>

          <p>DRONE UNDER INTERNATIONAL HUMANITARIAN</p>
        </div>
      </footer>
    </>
  );
};

export default footer;
