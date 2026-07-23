import DatabaseSupport from "@/src/components/DatabaseSupport";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import PeerReview from "@/src/components/PeerReview";
import StandardCompliance from "@/src/components/StandardCompliance";
import SelfPublishing from "@/src/partials/Home/SelfPublishing";
import Hero from "@/src/partials/Services/Hero";
import publishingBg from "/assets/man-bg.png";
import React from "react";
import CTABanner from "@/src/components/CTABanner";
import WorkSubmission from "@/src/partials/Services/WorkSubmission";
import Benefits from "@/src/partials/Services/Benefits";
import ResearchBanner from "@/src/partials/Services/ResearchBanner";
import ContactSection from "@/src/components/ContactSection";

const PeerReviewService = () => {
  return (
    <>
      <Navbar />
      <Hero
        title={
          <>
            Get Confirmed of Your Submission with Our Pre-submission{" "}
            <span> Peer Review Service </span>
          </>
        }
        desc="Having difficulty preparing your manuscript for submission? Then do not give rise to an unnecessary rejection, but instead opt for TheJournalPublishers.com where you will be provided with our pre-submission peer review service according to your needs."
      />
      <SelfPublishing
        title={
          <>
            Collaborate with Expert Peer Review Specialists Having Over{" "}
            <span>
              {" "}
              10 Years of Experience | Discover Innovative Research through Us!
            </span>
          </>
        }
        desc="Are you looking for reliable assistance to improve your research before publication? Our peer review specialists come with years of experience in academics and offer unparalleled insights in helping to edit your manuscripts with utmost precision. Whatever be your experience as an author, our peer review specialists ensure that your work is of the best quality possible and that it adheres to the norms of a good scientific paper."
        desc2="From checking methodology to interpretation of data and making your paper structurally sound, our peer reviewers give a professional review that will make your chances of acceptance at reputable journals greater. Collaborate with The Journal Publishers now."
        btn1="Get Started"
        btn2="Live Chat"
      />
      <StandardCompliance
        cards={[
          {
            title: "Mismatched Security",
            description:
              "At TheJournalPublishers.com, we maintain strict standards for confidentiality and encryption to make sure that your data is safe.",
            icon: "/assets/standardcard-icon.png",
          },
          {
            title: "500+ Peer Review Specialists",
            description:
              "Our pool of 500+ peer reviewers ensures a wide coverage of various subjects and helps you publish articles in high impact journals.",
            icon: "/assets/standardcard-icon.png",
          },
          {
            title: "100% Timely Delivery",
            description:
              "If you have a strict deadline, our specialists work day and night to ensure timely delivery of your article submission.",
            icon: "/assets/standardcard-icon.png",
          },
        ]}
      />
      <PeerReview
        title="Enhance the Quality of Your Journal Articles Using Pre-Submission Manuscript Peer Review Services"
        desc="Are you not completely happy with the quality of your peer-reviewed research paper? Well, there is no need to be concerned since we can help in editing and reviewing various types of articles through our services. Be it structural problems or the improvement of the overall quality of your articles, our experts will make sure that your research is of high quality and free of errors."
        papers={[
          "Medicine",
          "Sciences",
          "AI & ML",
          "Clinical Trial Reports",
          "DataDriven Research",
          "Aerospace",
          "Data Base",
          "Accounting",
          "Conference Papers",
          "Life Sciences",
          "Chemical",
          "Quality Control",
          "Political",
          "Abstracts",
          "HR",
          "Research Paper",
          "Help Auditing",
          "Research Proposals",
          "Physical Engineering",
          "Graphics",
          "Environmental Sciences",
          "Interdisciplinary",
          "Studies Thesis Help",
          "Civic Systematic Reviews",
          "Higher Education Research",
        ]}
        btn1="Place Order"
        btn2="Talk To Us"
      />
      <DatabaseSupport
        title={
          <>
            Maximise Your Chance of Getting Published in Leading Journals
            Through Our Peer Reviewing Services
          </>
        }
        description="Being published in a credible journal is highly competitive and even the slightest mistake will result in the rejection of your work. This is where the peer reviewing services that we offer for journal papers comes in to help you gain the upper hand. On TheJournalPublishers.com, you can get your manuscripts reviewed, professionally edited, plagiarism checked and formatted in order to meet the high standards of all journals. In addition, our peer reviewing experts will assist you with statistical data, writing your review responses and managing your submission process. Get on the go now!"
        buttonText="Get Started"
        buttonText2="Let's Connect"
        bgImage={publishingBg}
      />
      <CTABanner
        title={
          <>
            Draft to Accepted - Get Full{" "}
            <span> Publishing Support for Your Journal Article </span> Today
            With Our Help!
          </>
        }
        description="Whether it is formatting, plagiarism detection, selecting the journal, submission, responding to the reviewers, or anything else that you may need to publish your article in a journal, we offer it all right here at TheJournalPublishers.com."
        showBadges={true}
        textColor="#1a1a1a" // Dark text for light background
        bgImage="../assets/girl2-bg.png"
        primaryButton={{
          text: "Find out more",
          variant: "red",
          onClick: () => {},
        }}
        secondaryButton={{
          text: "Contact an expert",
          variant: "outline-dark",
          onClick: () => {},
        }}
      />
      <WorkSubmission
        title="Submit Your Paper Now—Professional Peer Review Within Four Easy Steps!"
        desc="Wondering how we operate? Our pre-submission peer review service for journals and articles is geared towards making your process easier. Need help with editing, formatting or structure? Our expert reviewers are here to assist you at every point. Also, from helping you develop your draft until the editing phase, we ensure that your work receives the highest quality service. Through us, you will get the best professional feedback, refinement and submission ready work. Below is our process."
        steps={[
          {
            id: "01",
            title: "Order Placement",
            desc: "Simply complete our order form by providing us with your manuscript details, journal instructions and deadlines.",
          },
          {
            id: "02",
            title: "Assign Reviewer",
            desc: "We assign you the most relevant subject matter peer review expert.",
          },
          {
            id: "03",
            title: "Monitor Progress",
            desc: "After receiving your order, the writers will start working on your manuscript.",
          },
          {
            id: "04",
            title: "Delivery of Detailed Peer Review",
            desc: "Finally, receive detailed reviewer’s feedback and a professionally polished manuscript.",
          },
        ]}
      />
      <Benefits
        l_title="Our reliable publishing service, giving you all-round help during the entire publishing process."
        l_heading="Hire Us Now!"
        l_desc="Research publishing can only be a fulfilling process rather than being a tiring one. Here at Peer Review Support Online, we guarantee every researcher a rewarding publishing experience."
        r_title="Enjoy This Great Set of Publishing Services!"
        r_point1="Journals that accommodate different levels of research, ranging from the basic findings to breakthrough discoveries."
        r_point2="Full pre-submission peer-review service to enhance your manuscript in line with the journal requirements."
        r_point3="Helpful and knowledgeable experts who will guide you through the process in a variety of international journals."
        r_point4="Fast provision of necessary feedbacks and revisions so as to enable you meet the tight deadlines and standards."
        r_point5="Total secrecy and ownership of your work all throughout the publishing process."
        r_point6="Cost-effective, round-the-clock, and success-oriented publishing services."
      />
      <ResearchBanner
        title="Make Your Research Known Worldwide – We Can Do That for You!"
        desc="No need to be invisible. With our experienced peer review process for journal articles, assistance with selecting journals, perfect editing, and full publishing assistance, your manuscript will be published like a winner! With the help of our experienced peer reviewers, your research will reach the appropriate journals."
        btn1="Need Assistance"
        btn2="Contact Us"
      />
      <ContactSection />
      <Footer />
    </>
  );
};

export default PeerReviewService;
