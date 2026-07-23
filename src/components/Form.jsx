import React, { useState } from "react";
import { X } from "lucide-react";
import ThankYou from "./ThankYou";

const Form = ({ isModal = false, isOpen = true, onClose }) => {
  // 1. Data track karne ke liye state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  // 2. Errors track karne ke liye state
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Agar modal open nahi hai toh kuch render na ho
  if (isModal && !isOpen) return null;

  // 3. Input Handle Logic (Phone validation yahi hogi)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: Sirf numbers allow aur max length 11
    if (name === "phone") {
      if (value.length > 11) return;
      if (value !== "" && !/^\d+$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // User jab type kare to error remove kar dein
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // 4. Submit par Validation Check
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

  // 5. Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form fields ko reset karna
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: "",
        message: "",
      });

      setIsSubmitted(true);
    }
  };

  const formContent = (
    <>
      {isSubmitted && <ThankYou onClose={() => setIsSubmitted(false)} />}

      <div className={`services-hero-form-container ${isModal ? "modal-form-box" : ""}`}>
        <div className="form-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3>Let's Get Started!</h3>
          {/* Modal ke liye Close (X) Button */}
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
          {/* Name Field */}
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

          {/* Email Field */}
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

          {/* Phone Field */}
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

          {/* Services Field */}
          <div className="input-wrapper">
            <input
              type="text"
              name="services"
              value={formData.services}
              onChange={handleChange}
              placeholder="Services *"
              className={errors.services ? "input-error" : ""}
            />
            {errors.services && (
              <span className="error-msg">{errors.services}</span>
            )}
          </div>

          {/* Message Field (Optional) */}
          <div className="input-wrapper">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
            />
          </div>

          <button type="submit">Submit Now</button>
        </form>
      </div>
    </>
  );

  // Agar modal true hai toh background backdrop aur blur ke sath wrap karein
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