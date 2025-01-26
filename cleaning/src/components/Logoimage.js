import React from 'react'

export default function Logoimage() {
  return (
    <div>
           <section class="logo-image_section">
    <div class="featured-in">
      <h2>Featured In</h2>
      <div class="logos" data-aos="zoom-in">
        <img src={`${process.env.PUBLIC_URL}/logos/4 (1)_edited.webp`} alt="Latch Logo" class="logo"/>
        <img src="./logos/6_edited.webp" alt="Stella Maris Logo" class="logo"/>
        <img src="./logos/Latch_.webp" alt="Gasparyan Logo" class="logo"/>
        <img src="./logos/c837a6_8ab94f5bf37f4d2b84dd2bc2fafa0646~mv2.webp" alt="Volve Logo" class="logo"/>
        <img src="./logos/7 (1)_edited.webp" alt="Foreva Logo" class="logo"/>
      </div>
    </div>
  </section>
    </div>
  )
}
