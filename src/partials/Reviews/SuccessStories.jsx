import React, {useState} from "react";
import SuccessStoriesCard from "./SuccessStoriesCard";

const SuccessStories = () => {
  // 6 cards ka data array
  const storiesData = [
    {
      id: 1,
      title: "Henry P. PhD ",
      desc: "Thank you very much for the outstanding editing, researcher. My paper is perfect and ready to submit. The editor worked very effectively and patiently. He listened to the wishes and desires that I had and he provided it. Trustpilot Education Department",
    },
    {
      id: 2,
      title: "Hudson K ",
      desc: "Doctoral Candidate I am so impressed with the help from The Journal Publishers which I received in a quick and effective way. I needed immediate editing assistance and the team got me the job done in a few hours and did a fantastic job! They also have affordable rates, pls. Recommended! Trustpilot Biomedical Sciences",
    },
    {
      id: 3,
      title: "Maria L ",
      desc: "I was a post-graduate student and was looking for a good service to help me publish my research work and came across this service. Looks professional and I took it. This was a great choice as the team went above and beyond to deliver what I was expecting. My paper has been submitted, and I am hoping for the best results. Thanks. Trustpilot Law School",
    },
    {
      id: 4,
      title: "Ben E ",
      desc: "Lecturer My draft was in a very rough form when I approached The Journal Publishers. The team, though, helped me a great deal in its entirety about polishing it up to perfection and now it's ready to be submitted. Thank you. Trustpilot Social Sciences",
    },
    {
      id: 5,
      title: "Reggie J ",
      desc: "The Journal Publishers is a highly recommended journal to publish this paper as a MPhil scholar. The team's professional service is very reliable as I had a first hand experience in it. My paper has been submitted and will soon be published, all due to the commendable efforts of this service! Thanks. Trustpilot Computer Engineering ",
    },
    {
      id: 6,
      title: "Kate D ",
      desc: "The Journal Publishers was a very reliable research support group whose expert services I am very grateful to them for my research creation and publication. The team has always been my support and help throughout the topic selection, preparation and submission. I'll give you a whole lot of stars! Trustpilot Environmental Studies",
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
          <h1>These are some of the stories we have heard about our publications.</h1>
          <p>
            From students to research professionals, we are the #1 choice when it comes to paper publication services. We have a team of professionals and ethical practices that ensure our services are the reliable ones among researchers.
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
              <img src="../assets/leftarrow-icon.png" alt="Previous" />
            </button>
            <button className="nav-btn-next" onClick={handleNext}>
              <img src="../assets/rightarrow-icon.png" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
