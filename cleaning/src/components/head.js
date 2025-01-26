import React from 'react'
import '../App.css';

function Head() {
  return (
    <div>
        <section className="navbar_section">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#cleanic">
              The Cleanic
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-4">
                  <a className="nav-link" aria-current="page" href="#plan">
                    Plan
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="#service">
                    Service
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item mx-4" id="log">
                  <a className="nav-link" href="#login">
                    Log In <i className="fa-solid fa-circle-user"></i>
                  </a>
                </li>
                <button className="btn mx-5" type="submit">
                  Book Now
                </button>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div
          className="text-content fade-in-up"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="display-1">Remarkably Cleaner.</h1>
          <h2 className="display-4">Amazingly Simpler.</h2>
          <br />
          <p className="lead">
            Providing spotless cleaning services for busy
            <br />
            people since 2035. Always on time, always smiling.
          </p>
          <button className="btn2" type="submit">
            Book Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Head