import React from "react";
import "./about.css";

function About() {
  return (
    <section class="py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <h1 class="text-center mt-4">ABOUT US</h1>
          <div class="col-12 col-lg-6 col-xl-5 mt-4">
            <img
              class="img-fluid rounded"
              loading="lazy"
              src="https://t4.ftcdn.net/jpg/06/61/14/69/360_F_661146913_75FCqiZRHlV1etDB3TmVf4sudg1CfNcY.jpg"
              alt=""
            />
          </div>
          <div class="col-12 col-lg-6 col-xl-7">
            <div class="row justify-content-xl-center">
              <div class="col-12 col-xl-11">
                <p class="lead fs-4 text-secondary mb-3">
                  We help people to build incredible brands and superior
                  products. Our perspective is to furnish outstanding
                  captivating services.
                </p>
                <p class="mb-5">
                  Nullam gravida orci ac luctus molestie. Fusce finibus congue
                  erat, non aliquam magna tincidunt at. Aenean lacinia arcu ex,
                  sed pharetra nibh porta a. Curabitur vel consequat nibh, ac
                  interdum nisl. Nunc pulvinar nec massa vitae sollicitudin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
