import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>BLOG</span>SITE
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Category
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <p>
                <FontAwesomeIcon icon={faPhone} />
                05888999996
              </p>
              <p>
                <FontAwesomeIcon icon={faMailBulk} />
                dilancirkin@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                Ankara,Turkey
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
