import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-page-container">
      {/* Header - Navy Blue */}
      <div className="privacy-header">
        <h2>Privacy Policy</h2>
      </div>

      {/* Scrollable Content */}
      <div className="privacy-content">
        <p>
          <strong>Last Updated: July 2026</strong>
        </p>
        <p>
          At  , we are committed to protecting your
          privacy and ensuring the security of your personal and academic
          data.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect personal details (such as name, email, and phone
          number) when you fill out our contact or submission forms. We also
          temporarily store your research manuscripts to provide formatting
          and review services.
        </p>

        <h3>2. How We Use Your Data</h3>
        <p>
          Your information is strictly used to communicate with you, process
          your service requests, and deliver our publishing support. We do
          not sell, rent, or trade your data to marketing agencies.
        </p>

        <h3>3. Data Security</h3>
        <p>
          We implement advanced encryption and secure servers to protect
          your intellectual property. Once a project is successfully
          completed and published, we securely delete your manuscript files
          from our active databases unless requested otherwise.
        </p>

        <h3>4. Your Rights</h3>
        <p>
          You have the right to request access to, modification of, or
          deletion of your personal data at any time by contacting us at
          <strong> info@example.com</strong>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;