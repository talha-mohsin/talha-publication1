import ThankYou from "../../components/ThankYou";
import React, {useState} from "react";

const Hero = () => {
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

  return (
    <section className="services-hero-section" id="home">
      <div className="container services-hero-grid">
        <div className="services-hero-content">
          <h1 className="title-section">
            Confirm Your <br /> Acceptance With Our <br /> Pre-Submission{" "}
            <span>
              Peer <br /> Review Services
            </span>
          </h1>
          <p className="services-hero-desc">
            Struggling to get your research paper ready for submission? Don’t
            risk unnecessary rejection and hire TheJournalPublishers.com. We
            offer tailored pre submission peer review services to help refine
            manuscripts and align them with the journal's standard format.
            Consult with us today and ensure your work stands out.
          </p>
        </div>

        {isSubmitted && <ThankYou onClose={() => setIsSubmitted(false)} />}

        {/* Form Container */}
        <div className="services-hero-form-container">
      <div className="form-head">
        <h3>Place an order</h3>
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
          {errors.services && <span className="error-msg">{errors.services}</span>}
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
      </div>
    </section>
  );
};

// Simple inline styles for form inputs
const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
const buttonStyle = {
  padding: "12px",
  backgroundColor: "#1E3E62",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Hero;
