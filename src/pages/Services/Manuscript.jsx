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

const Manuscript = () => {
  return (
    <>
      <Navbar />
      <Hero
        title={
          <>
            Manuscript Writing Service for Journal Paper Publication -{" "}
            <span> A Success Formula for You</span>
          </>
        }
        desc="Tired of facing rejection letters from your target journals time and again? Don’t worry, TheJournalPublishers.com is here to assist you. Get our unique manuscript writing service for journal paper publication that will help turn your manuscript into a ready-to-publish journal paper. "
      />
      <SelfPublishing
        title={
          <>
            Work Together With Expert Manuscript Writers{" "}
            <span> to Strengthen Your Research Process</span>
          </>
        }
        desc="Is it difficult for you to publish your paper in a famous journal? Are publications posing you a challenge? We are here with our expert manuscript writers to help you. They hold vast experience in all types of academic and scientific fields. Regardless of whether you are a professional or a novice researcher, we at TheJournalPublishers.com will make sure that your paper is polished, well-organized and adheres to the publishing standards."
        desc2="We will do everything from the literature review to methodology to the presentation of data, formatting and editing. Your paper will not only meet the requirements but will also excel in them. Get in touch with our manuscript writing services now and enhance your research."
        btn1="Hire Writers"
        btn2="Get started"
      />
      <StandardCompliance
        cards={[
          {
            title: "Guaranteed Security",
            description:
              "At TheJournalPublishers.com, we follow a very high standard of security policy to provide complete confidentiality and ownership of your manuscript.",
            icon: "/assets/standardcard-icon.png",
          },
          {
            title: "24/7 Customer Support",
            description:
              "Our customer service team is always here for you at 24/7 and we would be happy to respond whenever you contact us.",
            icon: "/assets/standardcard-icon.png",
          },
          {
            title: "Trust Us Globally",
            description:
              "Having 2.5+ satisfied clients all around the world, our services of manuscript writing have made possible publishing of authors' manuscripts in journals.",
            icon: "/assets/standardcard-icon.png",
          },
        ]}
      />
      <PeerReview
        title="Make Your Manuscript a Piece of Art with Our Manuscript Writing Assistance for Journal Articles"
        desc="Find it difficult to write a manuscript? Or need some help with editing and formatting? Our Manuscript Writing Experts are here for you. Be it peer-reviewed articles or research briefs; our services span across various fields to give you the excellent support you need. No matter what changes you want – structure improvement or referencing – you have nothing to worry about. "
        papers={[
          "Medicine",
          "AI",
          "Research Proposals",
          "Editorials",
          "Clinical Research",
          "Data Science & Technology",
          "Conference Papers",
          "Literature Review",
          "Engineering",
          "Life Sciences",
          "Rapid Communication",
          "Quality Control",
          "Physical Sciences",
          "Environmental Research",
          "Case Studies & Reports",
          "Auditing",
          "Business & Management Studies",
          "Systematic Reviews",
          "Research Article",
          "Methods Paper",
          "Humanities & Social Sciences",
          "Abstracts",
          "Book Reviews",
        ]}
        btn1="Get Started "
        btn2="Live Chat"
      />
      <DatabaseSupport
        title={
          <>
            Concept To Final Stage - Get Incredible Manuscript Writing Services
            from Us!
          </>
        }
        description="For getting your manuscript published, it is the experience and credibility which really matter the most. Our trusted manuscript writing services are provided to all those individuals who want to represent themselves professionally by presenting their concepts and views in the most accurate manner possible. From the creation of your drafts to revision, making sure everything is properly structured, having the right tone and grammar, our professionals will help you get incredible manuscripts written for your journals. No matter whether you are publishing a new book or sending out a manuscript to any renowned journal, our end-to-end manuscript writing services will be there for you."
        buttonText="Place Order"
        buttonText2="Contact Us"
        bgImage={publishingBg}
      />
      <CTABanner
        title={
          <>
            Unmatched Manuscript Writing Services for a{" "}
            <span> Journal to Speak Your Mind!</span>
          </>
        }
        description="We are convinced that your ideas need to be conveyed through clarity and precision. And this is why we provide unmatched manuscript writing services that will help convert your ideas into an impressive write-up."
        showBadges={true}
        textColor="#1a1a1a" // Dark text for light background
        bgImage="../assets/girl2-bg.png"
        primaryButton={{
          text: "Hire writer",
          variant: "red",
          onClick: () => {},
        }}
        secondaryButton={{
          text: "Help",
          variant: "outline-dark",
          onClick: () => {},
        }}
      />
      <WorkSubmission
        title="Upload Your Manuscript Now – Get Expert Peer Review in just 4 Easy Steps!"
        desc="Looking to understand how we really do it? The pre-publication peer review services for journals & articles are meant to make life easy for you as far as publishing is concerned. From editing and formatting to structuring, we have experts ready at your service at all times. In addition, from helping you draft the research to the editing process, we guarantee quality at every step. Here’s how it is done."
        steps={[
          {
            id: "01",
            title: "Order Placement",
            desc: "All you have to do is provide your manuscript, journal guidelines, and deadline details in our order form.",
          },
          {
            id: "02",
            title: "Peer Reviewer Assignment",
            desc: "Your work will be assigned to the best-suited peer-review expert from that particular subject area.",
          },
          {
            id: "03",
            title: "Track Progress",
            desc: "As soon as your order is accepted by us, our writers will start working on your manuscript.",
          },
          {
            id: "04",
            title: "Delivered Detailed Peer Review Comments",
            desc: "In the end, you will get comprehensive comments from your reviewers along with an edited manuscript",
          },
        ]}
      />
      <Benefits
        l_title="The best manuscript writing service that helps you in every phase!"
        l_heading="Publish Your Manuscript!"
        l_desc="Dream of publishing your paper in a prestigious journal with just one click? Get the help of our manuscript helpers and convert your dream into reality by availing yourself the best academic assistance right away. Here we provide you a better, credible and smooth experience."
        r_title="From Idea to Publication - Explore Our Services Offered By The Journal Publishers!"
        r_point1="Avail high-quality manuscripts from topic selection to research drafting from our experts."
        r_point2="Get 100% confidential and secured services and make sure that your personal data and orders remain protected."
        r_point3="Transparent and affordable prices to avail the service without making a hole in your pocket."
        r_point4="Professional assistance on various subjects like case studies, research papers, book reviews and more."
        r_point5="Make use of timely delivery and 24/7 customer support for your tight deadline."
        r_point6="Expert guidance to maintain academic standard no matter what the cost may be."
      />
      <ResearchBanner
        title="Your Manuscripts Have Every Right To See Print! - Collaborate with Us!"
        desc="Your manuscripts deserve all the attention. We have a team of highly skilled researchers and editors who will help you fine-tune your manuscripts in terms of precision, professionalism, and clarity, ensuring that they meet all the publishing requirements. Your manuscripts will be transformed into a masterpiece!"
        btn1="In need of help?"
        btn2="Contact Us"
      />
      <Footer />
    </>
  );
};

export default Manuscript;
