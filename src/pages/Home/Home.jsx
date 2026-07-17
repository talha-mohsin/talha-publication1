import React, { useState, useRef, useEffect } from "react";
import { X, Send, Upload, Check, MessageSquare } from "lucide-react";

// Import Partials
import Header from "../../components/Header.jsx";
import Navbar from "../../components/Navbar.jsx";
import Hero from "../../partials/Home/Hero.jsx";
import SelfPublishing from "../../partials/Home/SelfPublishing.jsx";
import StandardCompliance from "../../components/StandardCompliance.jsx";
import PeerReview from "../../components/PeerReview.jsx";
import HolisticServices from "../../components/HolisticServices.jsx";
import SubmissionProcess from "../../partials/Home/SubmissionProcess.jsx";
import DatabaseSupport from "../../components/DatabaseSupport.jsx";
import Testimonials from "../../components/Testimonials.jsx";
import FAQs from "../../components/FAQs.jsx";
import Footer from "../../components/Footer.jsx";
import PartnersLogos from "@/src/components/PartnersLogos.jsx";
import girlBg from "../../../assets/girl-bg.png";
import CTABanner from "../../components/CTABanner.jsx";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      {/* Topbar and Main Navbar */}
      <Header />
      <Navbar />

      {/* Main Single Page Sections */}
      <Hero />
      <SelfPublishing />
      <StandardCompliance />
      <PeerReview />
      <HolisticServices />
      <SubmissionProcess />
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
        bgImage="../../assets/girl-background.png"
        primaryButton={{
          text: "Slick Your Submission",
          variant: "red",
          onClick: () => {},
        }}
        secondaryButton={{
          text: "Live Chat",
          variant: "outline-white",
          icon: <MessageSquare size={16} />,
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
