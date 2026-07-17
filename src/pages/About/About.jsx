import DatabaseSupport from "@/src/components/DatabaseSupport";
import FAQs from "@/src/components/FAQs";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import HelpBanner from "@/src/components/CTABanner";
import HolisticServices from "@/src/components/HolisticServices";
import Navbar from "@/src/components/Navbar";
import PartnersLogos from "@/src/components/PartnersLogos";
import StandardCompliance from "@/src/components/StandardCompliance";
import Testimonials from "@/src/components/Testimonials";
import Hero from "@/src/partials/About/Hero";
import Services from "@/src/partials/About/Services";
import girlBg from "../../../assets/girl-bg.png";
import React from "react";
import CTABanner from "@/src/components/CTABanner";

const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero
        title={
          <>
            About The{" "}
            <span>
              Journal <br /> Publishers
            </span>
          </>
        }
        description="Struggling with research paper publication? Stop worrying, you have got reliable experts to back you—Hire   today. We help scholars publish research in the top journals, employing our years of field experience and professional expertise. Consult with us today for an effortless publication process."
      />
      <Services />
      <StandardCompliance />
      <HolisticServices />
      <CTABanner
        title={
          <>
            Get Professional{" "}
            <span>
              Journal <br /> Publication
            </span>{" "}
            Help 24/7!
          </>
        }
        description="We publish paper in journal with 24/7 support. Our trusted team of experts are at your disposal whenever you need them..."
        showBadges={true}
        textColor="#ffffff"
        bgImage=" assets/girl-background.png"
        primaryButton={{
          text: "Slick Your Submission",
          variant: "red",
          onClick: () => {},
        }}
        secondaryButton={{
          text: "Live Chat",
          variant: "outline-white",
          onClick: () => {},
        }}
      />
      <DatabaseSupport
        title={
          <>
            Get Journal Paper Publication Support <br /> Across Leading
            Databases
          </>
        }
        description="During our decade or more of service experience, we have assisted numerous authors, students and professionals with their academic goals. Our portfolio is a diverse exhibition of our work, reflecting our expertise in this field."
        buttonText="Submit Your Manuscript"
        bgImage={girlBg}
        reverseLayout={false}
      />
      <PartnersLogos />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
};

export default About;
