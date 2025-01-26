import React from 'react'

export default function Imagecard() {
  return (
    <div>
      <section class="image-card_section" id="service">
        <div class="sec-text fade4 ">
          <h2>For Anything You Need</h2>
          <p>Our stellar services</p>
        </div>
        <div class="cen-bar">
          <div class="image-card" data-aos="fade-up" data-aos-duration="2000">
            <div class="image-card-list">
              <img
                src="./img/vertical-shot-young-delivery-men-moving-objects-out-car_23-2148944588.jpg"
                alt="photo-image"
              />
              <div class="image-text">Move in/out</div>
            </div>
            <div class="image-card-list">
              <img
                src="./img/concept-man-cleaning-his-home_23-2148133395.jpg"
                alt="photo-image"
              />
              <div class="image-text">Deep clean</div>
            </div>
            <div class="image-card-list">
              <img
                src="./img/front-view-young-male-with-washer-holding-liquid-powder-white-wall_140725-108007.jpg"
                alt="photo-image"
              />
              <div class="image-text">Laundry</div>
            </div>
          </div>
        </div>
        <div class="btn6">
          <button class="btn4">See All Service</button>
        </div>
      </section>
    </div>
  )
}
