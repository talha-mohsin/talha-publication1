import DatabaseSupport from "@/src/components/DatabaseSupport";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Navbar";
import PeerReview from "@/src/components/PeerReview";
import StandardCompliance from "@/src/components/StandardCompliance";
import SelfPublishing from "@/src/partials/Home/SelfPublishing";
import Hero from "@/src/partials/Services/Hero";
import publishingBg from "../../../assets/man-bg.png";
import React from "react";
import CTABanner from "@/src/components/CTABanner";
import WorkSubmission from "@/src/partials/Services/WorkSubmission";
import Benefits from "@/src/partials/Services/Benefits";
import ResearchBanner from "@/src/partials/Services/ResearchBanner";

const Services = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <SelfPublishing />
      <StandardCompliance />
      <PeerReview />
      <DatabaseSupport
        title={
          <>
            Maximise Your Chances of Publication in Top <br /> Journals With Our
            Peer Review Service
          </>
        }
        description="Getting your research published in a reputable journal is highly competitive and even the smallest error can lead to rejection. That's why our peer review services for journal papers are designed to give you a real edge. At TheJournalPublishers.com, we provide comprehensive manuscript assessment, professional editing, plagiarism "
        buttonText="Place Order"
        buttonText2="Consult ?Us"
        bgImage={publishingBg}
      />
      <CTABanner
        title={
          <>
            From Draft to Acceptance - Get <br />
            Complete <span> Journal Publication</span> <br />
            Support With Us!
          </>
        }
        description="We publish paper in journal with 24/7 support. Our trusted team of experts are at your disposal whenever you need them..."
        showBadges={true}
        textColor="#1a1a1a" // Dark text for light background
        bgImage="../ assets/girl2-bg.png"
        primaryButton={{
          text: "Learn More",
          variant: "red",
          onClick: () => {},
        }}
        secondaryButton={{
          text: "Hire Experts",
          variant: "outline-dark",
          onClick: () => {},
        }}
      />
      <WorkSubmission />
      <Benefits />
      <ResearchBanner />
      <Footer />
    </>
  );
};

export default Services;