import React, {useState} from "react";
import Button from "./Button.jsx";
import { BookOpen } from "lucide-react";
import Form from "./Form.jsx";

export default function DatabaseSupport({
  title,
  description,
  buttonText,
  onButtonClick,
  bgImage,
  buttonText2,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              text="Get Started"
              onClick={() => setIsModalOpen(true)}
              variant="navy"
            />
            {buttonText2 ? (
              <Button
                text={buttonText2}
                variant="white"
                onClick={onButtonClick}
                style={{
                  marginLeft: "10px",
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <Form
          isModal={true}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
    </div>
  );
}
