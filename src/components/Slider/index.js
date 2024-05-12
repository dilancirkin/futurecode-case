import React, { useState } from "react";
import "./slider.css";

function Slider({ slides }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            class={`carousel-item ${idx === index ? "active" : ""}`}
            data-bs-interval={slide.interval}
          >
            <img
              class="d-block w-100"
              src={slide.imageURL}
              alt={`Slide ${idx + 1}`}
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>{slide.title}</h3>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
        onClick={() =>
          handleSelect((index - 1 + slides.length) % slides.length)
        }
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
        onClick={() => handleSelect((index + 1) % slides.length)}
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
