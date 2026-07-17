import React, {useState} from "react";
import SuccessStoriesCard from "./SuccessStoriesCard";

const SuccessStories = () => {
  // 6 cards ka data array
  const storiesData = [
    {
      id: 1,
      title: "Henry P.",
      desc: "Thank you so much for the exceptional editing. My paper looks flawless and ready to submit. The editor was really efficient and understanding.",
    },
    {
      id: 2,
      title: "Sarah L.",
      desc: "The guidance provided was top-notch. I struggled with the structure, but the team transformed it into a publication-ready piece.",
    },
    {
      id: 3,
      title: "Dr. Ahmed",
      desc: "Extremely professional service. Their attention to detail regarding journal standards helped me get accepted in my first attempt.",
    },
    {
      id: 4,
      title: "John D.",
      desc: "Active listening and quick delivery. I am very impressed with how they handled the confidentiality of my unpublished research.",
    },
    {
      id: 5,
      title: "Maria K.",
      desc: "Affordable and transparent. The pre-submission peer-review saved me from a lot of potential rejections.",
    },
    {
      id: 6,
      title: "Robert B.",
      desc: "A great experience. The editor understood my requirements perfectly and delivered exactly what I was looking for.",
    },
  ];

  // Current index track karne ke liye state
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  // Next logic (Looping: 0 -> 1 -> 0)
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + cardsPerPage) % storiesData.length);
  };

  // Previous logic (Looping: 0 -> 1 -> 0)
  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - cardsPerPage + storiesData.length) % storiesData.length,
    );
  };

  // Current 3 cards slice karna
  const currentCards = storiesData.slice(
    currentIndex,
    currentIndex + cardsPerPage,
  );

  return (
    <section className="successStories-section">
      <div className="container">
        <div className="successStories">
          <h1>Our Publication Success Stories</h1>
          <p>
            From students to research professionals, we are the #1 choice when
            it comes to paper publication services. Our dedicated experts and
            ethical service practices make us the dependable option among
            research circles.
          </p>

          <div className="successStoriesCards">
            {currentCards.slice(0, 3).map((story) => (
              <SuccessStoriesCard
                key={story.id}
                title={story.title}
                desc={story.desc}
              />
            ))}
          </div>

          {/* Styled Navigation Buttons */}
          <div className="successStoriesBtn">
            <button className="nav-btn-prev" onClick={handlePrev}>
              <img src="../ assets/leftarrow-icon.png" alt="Previous" />
            </button>
            <button className="nav-btn-next" onClick={handleNext}>
              <img src="../ assets/rightarrow-icon.png" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
