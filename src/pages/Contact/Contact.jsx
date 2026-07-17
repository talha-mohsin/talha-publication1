import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/partials/About/Hero";
import ContactSection from "@/src/partials/Contact/ContactSection";
import React from "react";

const Contact = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero
        title={
          <>
            Ready to Begin? Share{" "}
            <span>
              Your <br /> Manuscript
            </span>{" "}
            Today!
          </>
        }
        description="Start your publication journey with us—share your draft and let our experts work on it. We are available 24/7 to address your queries, concerns, and provide assistance whenever needed."
      />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Contact;
