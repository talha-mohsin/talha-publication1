import React from "react";
import { Star } from "lucide-react"; // Import Star icon

const SuccessStoriesCard = ({ title, desc }) => {
  return (
    <div className="successStoriesCard">
      {/* Stars Section */}
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
        ))}
      </div>
      
      <h3>{title}</h3>
      <p>{desc}</p>
      
      <div className="successCardFoot">
        <img src="../assets/successcardfoot.png" alt="icon" />
        <span>Education Department</span>
      </div>
    </div>
  );
};

export default SuccessStoriesCard;