import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/partials/About/Hero";
import ContactSection from "@/src/partials/Contact/ContactSection";
import React from "react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        title={
          <>
            Getting Started? Submit <span> Your Manuscript </span> Now!
          </>
        }
        description="Kick off your publishing process by sharing your manuscript with us, and we will take care of it for you. Our team is available round-the-clock to answer any questions you may have. "
      />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Contact;
