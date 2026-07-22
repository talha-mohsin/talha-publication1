import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeSet, setActiveSet] = useState(0);

  const reviews = [
    {
      text: "Many thanks for the wonderful editing! My paper looks perfect and submittable. The editor worked well and was very helpful. He listened with care to all my needs and fulfilled.",
      name: "Henry P PhD",
      designation: "Researcher Education Department",
    },
    {
      text: "I was on a search for a reputable service to publish my research work, and I stumbled upon this one! I thought it looked business-like, and so I employed it. It was a great choice as they did not leave any stone unturned with respect to meeting my expectations. My paper for the class has been turned in and I hope it goes well. Thanks.",
      name: "Maria L Postgraduate",
      designation: "Student Law School",
    },
    {
      text: "The Journal Publishers is highly recommended for publishing assistance. The team has a very consistent work ethic – I can substantiate this with my own experience! Thanks to this great service, my paper is in and will be published shortly! Thanks. ",
      name: "Reggie J MPhil Scholar",
      designation: "Evening of the Months for Computer Engineering students",
    },
    {
      text: "I have been so impressed by the swift and efficient support given by The Journal Publishers. I needed to be edited quickly and they were able to provide me with the assistance within hours and provided me with an absolutely fantastic outcome. Pls, rates are also affordable. Recommended! Ph.D. students in the Human Development and Psychopathology program.Ph.D.",
      name: "Elena Rostova",
      designation:
        "students in the Human Development and Psychopathology program.",
    },
    {
      text: "When I went to The Journal Publishers my draft was in a very rough form. The team did help me greatly when it comes to setting it to perfection, and now it's ready to submit. Thank you.",
      name: "Ben E",
      designation: "Lecturer Social Sciences",
    },
    {
      text: "I am highly grateful to the expert team of The Journal Publishers for the dependable help it offered for my research creation and publication. The team has been my support and help from the selection of the topic to submission. Full Stars on my part!",
      name: "Kate D",
      designation: "Research Fellow Environmental Studies",
    },
    {
      text: "The Journal Publishers is highly recommended for publishing. The team is extremely dependable since I'm personally made use of their professional service. All my paper has been submitted, and will be published soon, thanks to this good service! Thanks.",
      name: "Reggie J",
      designation: "MPhil Scholar Computer Engineering",
    },
    {
      text: "Impressive! The service is just as deserving of accolades as it has garnered. Team is well qualified and knowledgeable. Everything from the publication process, they have taken care of it so smoothly. Thanks.",
      name: "John R",
      designation: "Postdoc Researcher Molecular Biology",
    },
    {
      text: "Did not know I could get such an impressive service at these rates. The team was very thorough in their service, and rates were also affordable. Thank you.",
      name: "Lena Y",
      designation: "Assistant Professor of Political Science",
    },
    {
      text: "I wish to express my sincere thanks to the highly professional staff of The Journal Publishers for their timely assistance in creating and publishing my research work. The team is my constant support and help from the topic selection to submission of the project. Now that's 5 stars from my side!",
      name: "Kate D",
      designation: "Research Fellow Environmental Studies",
    },
    {
      text: "I was seeking publishing support as my difficult routine was a big obstacle in publishing it alone. Luckily, I found The Journal Publishers. The service is just commendable. The editor I had was very smart and customer oriented. He has assisted me to improve my paper, and he also worked on my paper before I even submitted it. Thanks.",
      name: "Clara T",
      designation: "Master`s Student Public Health",
    },
    {
      text: "I am pleased with the support I received in the publication by The Journal Publishers. The editing was beautifully done and the team was with me all the way till it was submitted. It is still monitoring the progress of the paper submission. Commendable!",
      name: "Mark G",
      designation: "Scholar Economics",
    },
    {
      text: "My psychology paper is completed and published, and I'm really thankful to The Journal Publishers team for that. They have always been there for me at every turn, with their wonderful advice and guidance. Highly recommended!",
      name: "Evie Y",
      designation: "Independent Researcher Psychology",
    },
    {
      text: "I felt like publishing support was needed for my PhD so I approached The Journal Publishers, whose recommendation I had followed when my friends needed their doctoral papers published. I found that to be very effective and this is the case with me too as these experts have polished, enhanced and submitted my paper within the time limit. It's also of par excellence quality. At the moment I am hoping for the best. Thank you so much.",
      name: "Leo P",
      designation: "PhD Aspirant Artificial Intelligence",
    },
    {
      text: "My paper has been published and I am super excited! The team at The Journal Publishers deserves to be credited and honored as it has been made possible because of their endless support 24/7. All stars clear – no doubts!",
      name: "Audrey K",
      designation: "Visiting Faculty Media Studies",
    },
    {
      text: "All I can say is that the Journal Publishers helped me in submitting my paper and that is a great service to be given. The editors were skilled and efficient and formatting was par excellence, and the team has complete technical knowledge with regard to journal submissions. Recommended!",
      name: "Amelia O",
      designation: "Collaborative Research Assistant Business Studies",
    },
  ];

  const ITEMS_PER_PAGE = 2;

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

  const currentReviews = reviews.slice(
    activeSet * ITEMS_PER_PAGE,
    activeSet * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const handlePrev = () => {
    setActiveSet((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setActiveSet((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="testimonials-section section-padding" id="reviews">
      <div className="container">
        {/* Top Centered Header */}
        <div className="text-center top-heading-area">
          <h2 className="section-title">
            Researchers Trust Us | <span>Read the reviews</span>
          </h2>
          <p className="section-subtitle testi-subtitle">
            Having a clear service methodology and being able to assist them, we
            are rated full stars by researchers and scholars around the region.
            Whether it is providing an entirely anonymous and secure service
            experience or ensuring that quality is present in every service we
            provide, we are guaranteeing 100% satisfaction every step of the
            way. That is the reason why all our clients greatly appreciate us
            and choose us as the best company to publish their research paper.
            Check reviews
          </p>
        </div>

        {/* Overlapping Layout Wrapper */}
        <div className="testi-overlap-wrapper">
          {/* Left Column: Image & Controls */}
          <div className="testi-left-col">
            <div className="testi-image">
              <img src="/assets/customer-books.png" alt="Customer Books" />
            </div>

            {/* Custom Slider Buttons matching the screenshot */}
            <div className="slider-controls">
              <button
                className="slider-btn prev-btn"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="slider-btn next-btn"
                onClick={handleNext}
                aria-label="Next"
              >
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
                    <div className="author-info">
                      <h5>{rev.name}</h5>
                      <p>{rev.designation}</p>
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
