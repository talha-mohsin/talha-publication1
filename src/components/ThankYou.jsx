import React from "react";
import { CheckCircle } from "lucide-react";

const ThankYou = ({ onClose }) => {
  return (
    <div className="thank-you-overlay">
      {/* Top Left Logo */}
      <div className="logo-container">
        <img src="/assets/Pubmed-Publish-BW-.png" alt=" " />
      </div>

      {/* Left Aligned Content Card */}
      <div className="thank-you-card">
        {/* Optional Icon (Left Aligned) */}
        <CheckCircle className="success-icon" size={60} strokeWidth={2} />
        
        <h2>Thank You For Submitting!</h2>
        <p>
          Your message has been successfully sent. Our team will contact you
          within 24-48 hours.
        </p>
        
        <button onClick={onClose} className="back-btn">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ThankYou;