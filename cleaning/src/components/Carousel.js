import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel() {
  return (
    <div>
      <section className="carousel-section">
        <div
          id="beforeAfterCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <h2 className="text-center">Before & After</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-5">
                  <div className="image-container">
                    <img
                      src="./befor-after/templatesdrive_A_magazine-worthy_cinematic_close-up_from_above__0c5d8bf8-d4c5-4931-8d80-b0 (1).webp"
                      className="d-block w-100"
                      alt="Before Cleaning 1"
                    />
                    <p className="text-center">Before</p>
                  </div>
                </div>
                <div className="col-10 col-sm-5">
                  <div className="image-container">
                    <img
                      src="./befor-after/templatesdrive_A_magazine-worthy_cinematic_close-up_from_above__0c5d8bf8-d4c5-4931-8d80-b0.webp"
                      className="d-block w-100"
                      alt="After Cleaning 1"
                    />
                    <p className="text-center">After</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-5">
                  <div className="image-container">
                    <img
                      src="./befor-after/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.webp"
                      className="d-block w-100"
                      alt="Before Cleaning 2"
                    />
                    <p className="text-center">Before</p>
                  </div>
                </div>
                <div className="col-10 col-sm-5">
                  <div className="image-container">
                    <img
                      src="./befor-after/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6 (1).webp"
                      className="d-block w-100"
                      alt="After Cleaning 2"
                    />
                    <p className="text-center">After</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-5">
                  <div className="image-container">
                    <img
                      src="./befor-after/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.webp"
                      className="d-block w-100"
                      alt="Before Cleaning 3"
                    />
                    <p className="text-center">Before</p>
                  </div>
                </div>
                <div className="col-10 col-sm-5">
                  <div className="image-container">
                    <img
                      src="./befor-after/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3 (1).webp"
                      className="d-block w-100"
                      alt="After Cleaning 3"
                    />
                    <p className="text-center">After</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#beforeAfterCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#beforeAfterCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
}
