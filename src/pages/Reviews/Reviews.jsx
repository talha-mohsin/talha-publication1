import FAQs from "@/src/components/FAQs";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/partials/About/Hero";
import SuccessStories from "@/src/partials/Reviews/SuccessStories";
import React from "react";

const Reviews = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero
        title={
          <>
            ClieClient Reviews | Words That Mean Everything About{" "}
            <span> Our Excellent Service</span>
          </>
        }
        description="The Journal Publishers is the first option for all researchers around the world when it comes to publishing needs. How come? Hear what our clients say. "
      />
      <SuccessStories />
      <FAQs />
      <Footer />
    </>
  );
};

export default Reviews;
