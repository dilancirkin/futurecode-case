import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./megamenu.css";

function MegaMenu() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const { pathname } = location;
    setActiveLink(pathname.substring(1));
  }, [location]);

  return (
    <div class="navbar-container">
      <a class="navbar-brand" href="/">
        <img
          src="https://img.freepik.com/premium-vector/pen-logo-vector-simple-icon-illustration_683738-4643.jpg?w=740"
          alt="Logo"
          width="60"
          height="60"
          class="d-block mx-auto"
        />
      </a>
      <div class="green-line"></div>
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a
                  class={`nav-link ${activeLink === "" ? "active" : ""}`}
                  aria-current="page"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${activeLink === "blog" ? "active" : ""}`}
                  href="/blog"
                >
                  BLOG
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORY
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul>
                    <li>
                      <a href="#" class="dropdown-item">
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item">
                        Food & Drink
                      </a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item">
                        Fashion & Beauty
                      </a>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <a href="#" class="dropdown-item">
                        Art & Culture
                      </a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item">
                        Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item">
                        Technology
                      </a>
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <a href="#" class="dropdown-item">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item">
                        Sports & Fitness
                      </a>
                    </li>
                    <li>
                      <a href="#" class="dropdown-item">
                        {" "}
                        Nature
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                  href="/contact"
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <a class="navbar-brand" href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MegaMenu;
