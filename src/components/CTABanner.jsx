import React, {useState} from "react";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

export default function CTABanner({
  title,
  description,
  showBadges = false,
  primaryButton,
  secondaryButton,
  bgImage,
  fgImage,
  textColor = "#ffffff" // Default color white
}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section  
      className="cta-banner-section" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        color: textColor // Dynamic text color
      }}
    >
      <div className="cta-banner-content">
        <h2 className="title-section">{title}</h2>
        <p>{description}</p>  

        {/* Conditionally render badges */}
        {showBadges && (
          <div className="best-imgs">
            <img src="/assets/bestchoice.png" alt="Best Choice" />
            <img src="/assets/bestquality.png" alt="Best Quality" />
          </div>
        )}

        <div className="btn-group banner-buttons">
          {primaryButton && (
            <Button
              text="Get Started"
              onClick={() => setIsModalOpen(true)}
              variant="red"
            />
          )}
          {secondaryButton && (
            <Button
              text={secondaryButton.text}
              variant={secondaryButton.variant}
              icon={secondaryButton.icon}
              onClick={secondaryButton.onClick}
            />
          )}
        </div>
      </div>
      
      {/* Conditionally render right-side image */}
      {fgImage && (
        <div className="cta-banner-img">
          <img src={fgImage} alt="Banner Graphic" />
        </div>
      )}
      <Form
          isModal={true}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
    </section>
  );
}