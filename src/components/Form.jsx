import React, { useState } from "react";
import { X } from "lucide-react";
import ThankYou from "./ThankYou";
import { sendMailData } from "../mailService/api";

const Form = ({ isModal = false, isOpen = true, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // <-- Loading state
  const [apiError, setApiError] = useState(""); // <-- API Error state

  if (isModal && !isOpen) return null;

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
      newErrors.phone = "Must be at least 10 digits.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
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
        // API Call
        await sendMailData(formData);
        
        // Success hone par form reset aur Thank You screen show
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: "",
          message: "",
        });
        setIsSubmitted(true);
      } catch (error) {
        setApiError("Failed to send your message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const formContent = (
    <>
      {isSubmitted && <ThankYou onClose={() => setIsSubmitted(false)} />}

      <div className={`services-hero-form-container ${isModal ? "modal-form-box" : ""}`}>
        <div className="form-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3>Let's Get Started!</h3>
          {isModal && (
            <button 
              type="button" 
              className="modal-close-icon-btn" 
              onClick={onClose}
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "inherit" }}
            >
              <X size={24} />
            </button>
          )}
        </div>

        <form className="services-hero-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No *"
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="services"
              value={formData.services}
              onChange={handleChange}
              placeholder="Services *"
              className={errors.services ? "input-error" : ""}
            />
            {errors.services && <span className="error-msg">{errors.services}</span>}
          </div>

          <div className="input-wrapper">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
            />
          </div>

          {/* Show API Error if any */}
          {apiError && <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{apiError}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Submit Now"}
          </button>
        </form>
      </div>
    </>
  );

  if (isModal) {
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
};

export default Form;