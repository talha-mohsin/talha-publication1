import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeSet, setActiveSet] = useState(0);

  const reviews = [
    {
      text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
      name: "Sophie Carter",
      location: "New York, USA",
      img: "../../assets/girl-circle.png", // Agar apna path ho toh update kar lein
    },
    {
      text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
      name: "Sophie Carter",
      location: "New York, USA",
      img: "../../assets/girl-circle.png",
    },
    {
      text: "The manuscript review was extremely detailed and professional. They helped me get into a top tier medical journal on my very first attempt. Highly recommended!",
      name: "Dr. Arthur Pendelton",
      location: "London, UK",
      img: "../../assets/girl-circle.png",
    },
    {
      text: "The communication was seamless, the peer review feedback was incredibly valuable, and formatting was spot on. A flawless service experience!",
      name: "Elena Rostova",
      location: "Munich, Germany",
      img: "../../assets/girl-circle.png",
    },
  ];

  // Sirf active page ke 2 reviews nikalne ke liye
  const currentReviews = reviews.slice(activeSet * 2, activeSet * 2 + 2);

  const handlePrev = () => {
    setActiveSet((prev) => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setActiveSet((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <section className="testimonials-section section-padding" id="reviews">
      <div className="container">
        
        {/* Top Centered Header */}
        <div className="text-center top-heading-area">
          <h2 className="section-title">
            RESEARCHERS TRUST US | <span>READ REVIEWS</span>
          </h2>
          <p className="section-subtitle testi-subtitle">
            We are rated full stars by researchers and scholars across the region, 
            given our transparent service methods and dedicated assistance. From 
            offering a completely confidential and secure service experience to 
            ensuring quality in every work we perform, we are offering 100% 
            satisfactory support at every stage. This is why most of our clients 
            praise us and consider us the preferred choice for research paper 
            publication. Check reviews
          </p>
        </div>

        {/* Overlapping Layout Wrapper */}
        <div className="testi-overlap-wrapper">
          
          {/* Left Column: Image & Controls */}
          <div className="testi-left-col">
            <div className="testi-image">
              <img src="../../assets/customer-books.png" alt="Customer Books" />
            </div>
            
            {/* Custom Slider Buttons matching the screenshot */}
            <div className="slider-controls">
              <button className="slider-btn prev-btn" onClick={handlePrev} aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <button className="slider-btn next-btn" onClick={handleNext} aria-label="Next">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Column: Heading & Cards */}
          <div className="testi-right-col">
            <h3 className="side-title">
              What Our Customers Say <br />
              About Us
            </h3>
            
            <div className="testimonials-grid">
              {currentReviews.map((rev, idx) => (
                <div
                  className={`testimonial-card ${idx === 0 ? "active" : "light-card"}`}
                  key={idx}
                >
                  <div className="quote-icon">“</div>
                  <p className="testimonial-content">{rev.text}</p>
                  
                  <div className="testimonial-author">
                    <img src={rev.img} alt={rev.name} className="author-avatar" />
                    <div className="author-info">
                      <h5>{rev.name}</h5>
                      <p>{rev.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}