import React from "react";
import Button from "./Button.jsx";
import { BookOpen } from "lucide-react";

export default function DatabaseSupport({
  title,
  description,
  buttonText,
  onButtonClick,
  bgImage,
  buttonText2,
}) {
  return (
    <div className="overlapping-banner-wrapper">
      {/* Adds a 'layout-reverse' class dynamically if reverseLayout is true */}
      <section className={`overlapping-section`}>
        
        {/* We use a div for the background so we can pass the image prop dynamically */}
        <div 
          className="overlapping-bg" 
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div className="container">
          <div className="overlapping-content">
            <h2 className="overlapping-title">{title}</h2>
            <p className="overlapping-desc">{description}</p>
            <Button
              text={buttonText}
              variant="navy"
              onClick={onButtonClick}
            />
            {buttonText2 ? <Button
              text={buttonText2}
              variant="white" 
              onClick={onButtonClick}
            /> : ""}
          </div>
        </div>
      </section>
    </div>
  );
}
