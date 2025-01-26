import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

export default function Form() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div>
      <section
        className="form_section"
        data-aos="fade-up"
        id="plan"
      >
        <div className="col-lg-5 d-lg-block"></div>
        <form className="row g-2 column g-10">
          <h2 className="text-center">Get a Free Estimate</h2>
          <h4 className="text-center">Contact Us</h4>
          <div className="col-md-4">
            <label htmlFor="firstname" className="form-label">
              Firstname*
            </label>
            <input type="text" className="form-control" id="firstname" />
          </div>
          <div className="col-md-4">
            <label htmlFor="lastname" className="form-label">
              Lastname*
            </label>
            <input type="text" className="form-control" id="lastname" />
          </div>
          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Phone Number*
            </label>
            <input type="tel" className="form-control" id="phone" />
          </div>
          <div className="col-md-4">
            <label htmlFor="address" className="form-label">
              Address*
            </label>
            <input type="text" className="form-control" id="address" />
          </div>
          <div className="col-md-4">
            <label htmlFor="city" className="form-label">
              City*
            </label>
            <input type="text" className="form-control" id="city" />
          </div>
          <div className="col-md-4">
            <label htmlFor="room" className="form-label">
              Room*
            </label>
            <select id="room" className="form-select">
              <option value="" disabled selected>
                Choose...
              </option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedroom</option>
              <option value="3">3 Bedroom</option>
              <option value="4">4 Bedroom</option>
            </select>
          </div>
          <div className="col-md-8">
            <label htmlFor="service" className="form-label">
              Service*
            </label>
            <select id="service" className="form-select">
              <option value="" disabled selected>
                Choose...
              </option>
              <option value="cleaning">Cleaning</option>
              <option value="laundry">Laundry</option>
              <option value="food_service">Food Service</option>
            </select>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-center">
              Get a Quote
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
