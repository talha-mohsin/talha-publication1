import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="terms-page-container">
      {/* Header - Navy Blue */}
      <div className="terms-header">
        <h2>Terms & Conditions</h2>
      </div>

      {/* Scrollable Content */}
      <div className="terms-content">
        <p>
          <strong>Last Updated: July 2026</strong>
        </p>
        <p>
          Welcome to  . By accessing or using our website
          and services, you agree to be bound by these Terms and Conditions.
        </p>

        <h3>1. Services Provided</h3>
        <p>
          We provide comprehensive publishing support, including manuscript
          formatting, editing, peer review assistance, and journal submission
          guidance. Our services do not guarantee acceptance into any specific
          journal, as the final decision rests with the respective editorial
          boards.
        </p>

        <h3>2. User Responsibilities</h3>
        <p>
          Authors are solely responsible for the originality, factual accuracy,
          and integrity of their submitted manuscripts. Any form of plagiarism
          or ethical misconduct will result in immediate termination of our
          services.
        </p>

        <h3>3. Payments and Refunds</h3>
        <p>
          All service fees must be paid upfront unless a custom milestone
          agreement is established. Refunds are only applicable if our team
          fails to deliver the agreed-upon services within the stipulated
          timeframe.
        </p>

        <h3>4. Confidentiality</h3>
        <p>
          We adhere to strict non-disclosure policies. Your unpublished
          research, data, and personal information will never be shared with
          third parties without your explicit consent.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
