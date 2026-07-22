import Form from "@/src/components/Form";

const Hero = ({ title, desc }) => {
  return (
    <section className="services-hero-section" id="home">
      <div className="container services-hero-grid">
        <div className="services-hero-content">
          <h1 className="title-section">{title}</h1>
          <p className="services-hero-desc">{desc} </p>
        </div>

        {/* Form Container */}
        <Form />
      </div>
    </section>
  );
};

export default Hero;
