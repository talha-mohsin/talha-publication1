import React, { useState } from "react";
import { Instagram, LocateIcon, Mail, Phone, Twitter } from "lucide-react";
import ThankYou from "./ThankYou";
import { sendMailData } from "../mailService/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // <-- Loading state
  const [apiError, setApiError] = useState(""); // <-- API error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      if (value.length > 11) return; 
      if (value !== "" && !/^\d+$/.test(value)) return; 
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.services.trim()) newErrors.services = "Service is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // <-- Updated Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      setIsLoading(true);
      setApiError("");

      try {
        // API call
        await sendMailData(formData);

        setFormData({
          name: "",
          phone: "",
          email: "",
          services: "",
          message: "",
        });
        setIsSubmitted(true);
      } catch (error) {
        setApiError("Failed to send message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="contact-section" id="home">
      <div className="container contact-grid">
        {/* --- Left Red Card --- */}
        <div className="contact-content">
          <div className="contact-content-inner">
            <h2>End-to-End Publishing Services</h2>
            <p className="contact-desc">
              From the stage of manuscript writing to acceptance into the journal, we support the complete publishing process for researchers and authors.
            </p>

            <div className="contact-form-links">
              <div className="link-details">
                <div className="icon-circle">
                  <Mail size={16} />
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@example.com">
                    info@example.com
                  </a>
                </div>
              </div>
              <div className="link-details">
                <div className="icon-circle">
                  <Phone size={16} />
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+0000000000">+00 000 00000</a>
                </div>
              </div>
              <div className="link-details">
                <div className="icon-circle">
                  <LocateIcon size={16} />
                </div>
                <div>
                  <h3>Address</h3>
                  <a>41 London Road, Reigate RH2 9RJ, United Kingdom</a>
                </div>
              </div>
            </div>

            <div className="contact-form-foot-links">
              <div className="social-icon">
                <Twitter size={16} />
              </div>
              <div className="social-icon">
                <Instagram size={16} />
              </div>
              <div className="social-icon">
                <span style={{ fontWeight: "bold", fontSize: "12px" }}>D</span>
              </div>
            </div>
          </div>
        </div>

        {isSubmitted && <ThankYou onClose={() => setIsSubmitted(false)} />}

        {/* --- Right White Form Card --- */}
        <div className="contact-form-container">
          <div className="contact-form-head">
            <h1 className="title-section contact-form-title">
              Send Us a Message
            </h1>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span className="label-text">Name *</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </label>

            <label>
              <span className="label-text">Phone Number *</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && (
                <span className="error-msg">{errors.phone}</span>
              )}
            </label>

            <label>
              <span className="label-text">Email *</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
            </label>

            <label>
              <span className="label-text">Services *</span>
              <input
                type="text"
                name="services"
                value={formData.services}
                onChange={handleChange}
                placeholder="Select a Services"
                className={errors.services ? "input-error" : ""}
              />
              {errors.services && (
                <span className="error-msg">{errors.services}</span>
              )}
            </label>

            <label className="full-width">
              <span className="label-text">Message (Optional)</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
              />
            </label>

            {/* API Error Message */}
            {apiError && <div className="full-width"><p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{apiError}</p></div>}

            <div className="submit-btn-wrapper full-width">
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;