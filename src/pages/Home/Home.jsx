import React, { useState, useRef, useEffect } from "react";
import { X, Send, Upload, Check, MessageSquare } from "lucide-react";

// Import Partials
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
import girlBg from "/assets/girl-bg.png";
import CTABanner from "../../components/CTABanner.jsx";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      {/* Topbar and Main Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <Hero />
      <SelfPublishing
        title={
          <>
            The Process of Transforming{" "}
            <span> Journal Publishing into The Best </span>
          </>
        }
        desc="Do you get tired of the endless process of journal publication? Do you need help with preparing rebuttals? If yes, then you should go to Thejournalpublishers.com, the best The Journal Publishers who can be proud of having a great number of helpers and publishing professionals."
        desc2="We will assist you in all stages of publishing process. From manuscript preparation to submission process - we are the professionals! Our editors, proofreaders and technical helpers know the different requirements of journals on various disciplines and act according to them. So there is no need to worry anymore, just contact us right now and get your paper published in the best journal!"
        btn1="Get Started"
        btn2="Contact Us"
      />
      <StandardCompliance
        cards={[
          {
            title: "Compliance with Standards",
            description:
              "No matter whether you wish to publish your paper in any science journal or in the arts, we will see that the standard is complied with.",
            icon: "/assets/standardcard-icon.png",
          },
          {
            title: "Intellectual Rights",
            description:
              "The research paper publishing service is meant to help you only; the complete intellectual rights of the research paper rest with you.",
            icon: "/assets/standardcard-icon.png",
          },
          {
            title: "Diverse Range of Journals",
            description:
              'No matter whether you need the research paper to be published in "Nature" journal or in "Science" journal, we provide our services in all research journals.',
            icon: "/assets/standardcard-icon.png",
          },
        ]}
      />
      <PeerReview
        title="We Publish Your Paper Successfully in Journal"
        desc="Our research publishing services will definitely make sure that you
                are offered professional assistance in all kinds of disciplines. Be it
                science, arts, engineering or anything else, we are capable of
                publishing all researches. With the ability to edit research papers
                and knowledge of standard guidelines, we publish your research paper
                successfully."
        papers={[
          "Computer Science",
          "Business",
          "Management",
          "Environmental Science",
          "Biology",
          "Engineering",
          "Psychology",
          "Physics",
          "Economics",
          "Medicine",
          "Education",
          "Chemistry",
          "Political",
          "Science",
          "Sociology",
          "Sciences",
          "Law",
        ]}
        btn1="Publish Your Paper NOW"
        btn2="Live Chat"
      />
      <HolisticServices
        title={
          <>
            We Provide Comprehensive Research Paper{" "}
            <span> Publishing Solutions</span>
          </>
        }
        desc="Need to Publish Your Research Paper in a Journal? Try our research paper publishing solutions which address all your queries and give satisfactory results."
        services={[
          {
            title: "Research Writing",
            description:
              "This service aids you in composing 100% plagiarism free and valuable content for your research.",
          },
          {
            title: "Editing/Proofreading",
            description:
              "Improve your manuscript by using our expert editors having industry experience.",
          },
          {
            title: "Formatting",
            description:
              "The professionals of our organization help you in formatting your manuscript as per the requirements of the journal.",
          },
          {
            title: "Selection of Journal",
            description:
              "Are you unable to decide which journal would be appropriate for your research paper? Get expert advice from us.",
          },
          {
            title: "Plagiarism Removal",
            description:
              "Have you any issues regarding plagiarism in your research? The Journal Publishers can assist you with plagiarism problems.",
          },
          {
            title: "Technical Review",
            description:
              "We make sure that your manuscript is updated with conducting feedback on different aspects.",
          },
        ]}
      />
      <SubmissionProcess />
      <CTABanner
        title={
          <>
            Get Journal Paper <span> Publishing Assistance 24/7!</span>
          </>
        }
        description="Our professional team is here for you round the clock to help you publish your paper in journal. Rest assured; our dedicated team will meet all your expectations and will make sure that you get best assistance from us."
        showBadges={true}
        textColor="#ffffff"
        bgImage="/assets/girl-background.png"
        primaryButton={{
          text: "Get Free Quote Now",
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
        title={<>Publish your Research Papers with us at Cheap Rates Today!</>}
        description="If you want to have a quality and affordable research paper publishing service, then choose The Journal Publishers. We offer cheap services. Moreover, we also offer custom quotes and flexible payments. Consequently, there is nothing to worry about since you will be able to accomplish your goals regardless of the price."
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
