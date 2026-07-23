import DatabaseSupport from "@/src/components/DatabaseSupport";
import FAQs from "@/src/components/FAQs";
import Footer from "@/src/components/Footer";
import HelpBanner from "@/src/components/CTABanner";
import HolisticServices from "@/src/components/HolisticServices";
import Navbar from "@/src/components/Navbar";
import PartnersLogos from "@/src/components/PartnersLogos";
import StandardCompliance from "@/src/components/StandardCompliance";
import Testimonials from "@/src/components/Testimonials";
import Hero from "@/src/partials/About/Hero";
import Services from "@/src/partials/About/Services";
import girlBg from "/assets/girl-bg.png";
import React from "react";
import CTABanner from "@/src/components/CTABanner";
import ContactSection from "@/src/partials/Contact/ContactSection";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        title={
          <>
            The <span> Journal Publishers </span> About Us
          </>
        }
        description="Curious about what drives The Journal Publishers to succeed in the publication of papers? Let us go through our values of service, tradition and quality-based approach that enables us to deliver success in publishing your paper. This page will help you learn more about our goals and team competence."
      />
      <Services />
      <StandardCompliance
              cards={[
                {
                  title: "Transparency",
                  description:
                    " Transparency is our core principle when it comes to the services we provide and we maintain transparency through our operations.",
                  icon: "/assets/standardcard-icon.png",
                },
                {
                  title: "Integrity",
                  description:
                    "Our principle is that we should promote honesty, ethics and plagiarism-free research.",
                  icon: "/assets/standardcard-icon.png",
                },
                {
                  title: "Excellence",
                  description:
                    " Journal Publishers aims at maintaining the best possible standards within the services it provides.",
                  icon: "/assets/standardcard-icon.png",
                },
              ]}
            />
      <HolisticServices
        title={
          <>
            Publishing Your Research Paper -{" "}
            <span> We Offer Complete Publishing </span> Solutions
          </>
        }
        desc="Are you ready to publish research paper in journal? Take advantage of our complete solutions for research paper publishing."
        services={[
          {
            title: "Research Writing",
            description:
              "Our research paper publishing service will assist you in writing an original and value-adding content for your research.",
          },
          {
            title: "Editing/Proofreading",
            description:
              "Enhance your manuscript with the help of our industry experts who have relevant experience.",
          },
          {
            title: "Formatting",
            description:
              "In whatever style MLA, APA, or Chicago, our experts format your manuscript according to the standards set by the journals.",
          },
          {
            title: "Choosing a Journal",
            description:
              "Need some help in choosing a suitable journal? Our team will guide you in making appropriate choice for your research paper.",
          },
          {
            title: "Plagiarism Detection",
            description:
              "If there are any issues relating to plagiarism, we provide reliable help in eliminating plagiarism.",
          },
          {
            title: "Technical Review",
            description:
              "Make sure your manuscript is updated through us as we undertake the review process on various aspects of your manuscript.",
          },
        ]}
      />
      <CTABanner
        title={
          <>
            Professional Assistance with <span> Paper Publication </span> in
            Journals 24/7!
          </>
        }
        description="Our qualified experts provide paper publication in journal services with 24/7 availability. You can avail the services of our experienced professionals anytime, as per your requirements, and we ensure you get the best assistance from us."
        showBadges={true}
        textColor="#ffffff"
        bgImage="/assets/girl-background.png"
        primaryButton={{
          text: "Quote Request",
          variant: "red",
          onClick: () => {},
        }}
        secondaryButton={{
          text: "Chat Now",
          variant: "outline-white",
          onClick: () => {},
        }}
      />
      <DatabaseSupport
        title={
          <>
            Research Paper Publication Service at Low Cost ! Contact Now
          </>
        }
        description="Are you looking for research paper publication services on low rates? We suggest you try The Journal Publishers, which provides cost-efficient services for our customers. Apart from being cheap, we provide you with custom quotes and flexible payment methods. Therefore, no need to worry about budget issues anymore. "
        buttonText="Submit Your Manuscript"
        bgImage={girlBg}
        reverseLayout={false}
      />
      <PartnersLogos />
      <Testimonials />
      <ContactSection />
      <FAQs />
      <Footer />
    </>
  );
};

export default About;
