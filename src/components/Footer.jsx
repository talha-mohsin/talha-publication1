import React from "react";
import { InstagramIcon, FacebookIcon, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  const services = [
    { label: "Peer Review Service", path: "/services/peer-review" },
    { label: "Manuscript Service", path: "/services/manuscript" },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Compact Single Grid Layout with 5 Columns */}
        <div className="footer-main-grid">
          {/* Col 1: Logo & Description */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/assets/Pubmed-Publish-BW-.png" alt="Footer Logo" />
            </div>
            <p className="footer-desc">
              Among our employers: startups like torchsensors.com with
              incredible Early Fire Detection Sensors, innovators like
              hedgehoghealth.com changing the way autism is diagnosed.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`footer-nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <div className="footer-links">
              {services.map((link, idx) => (
                <Link
                  to={link.path}
                  key={idx}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Follow Us */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <a href="tel:+0000000000">+00 000 00000</a>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>41 London Road, Reigate RH2 9RJ, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Col 5: Contact Us */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <InstagramIcon />
              <FacebookIcon />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>©Copyright 2026 thejournalpublishers.com Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
