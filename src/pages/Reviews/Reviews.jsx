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
            Client Reviews | Words That <br /> Speak Volumes of{" "}
            <span>
              Our Service <br />
            </span>{" "}
            Excellence
          </>
        }
        description="  is the preferred choice of researchers across the globe to meet their publication goals. Why? Let’s hear it from those who experienced our assistance."
      />
      <SuccessStories />
      <FAQs />
      <Footer />
    </>
  );
};

export default Reviews;
