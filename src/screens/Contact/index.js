import React, { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailBulk,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {
      name: "",
      email: "",
    },
  });

  const { name, email, subject, message, errors } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm() || !name || !email || !subject || !message) {
      alert("Please provide value in each input field");
    } else {
      alert("Form Submitted Successfully");

      setState({
        name: "",
        email: "",
        subject: "",
        message: "",
        errors: {
          name: "",
          email: "",
        },
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    } else {
      newErrors.email = "";
    }

    setState((prevState) => ({
      ...prevState,
      errors: newErrors,
    }));
    return valid;
  };

  return (
    <section class="contact-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-md-6">
                  <div class="contact-wrap w-100 p-lg-5 p-4">
                    <h3 class="mb-4">Send us a message</h3>
                    <form
                      id="contactForm"
                      class="contactForm "
                      onSubmit={handleSubmit}
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class={`form-control ${
                                errors.name ? "is-invalid" : ""
                              }`}
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                            <div class="invalid-feedback">{errors.name}</div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class={`form-control ${
                                errors.email ? "is-invalid" : ""
                              }`}
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                            <div class="invalid-feedback">{errors.email}</div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class={`form-control `}
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              class={`form-control 
                              `}
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <button type="submit" class="btn btn-primary">
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-stretch">
                  <div class="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Contact us</h3>
                    <p class="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div class="dbox w-100 d-flex align-items-start">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </div>
                      <div class="text pl-4 mt-2">
                        <p>
                          <span>Address:</span> Ankara,Turkey
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://123456789">0539999999999</a>
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faMailBulk} />
                      </div>
                      <div class="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:dilancirkin@gmail.com">
                            dilancirkin@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
