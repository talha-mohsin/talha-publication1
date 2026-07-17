import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  ShieldAlert,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // useLocation add kiya hai
import TermsAndConditions from "./TermsAndConditions"; // Component Import
import PrivacyPolicy from "../pages/Privacy/Privacy"; // Component Import

export default function Footer() {
  const location = useLocation(); // Active link check karne ke liye zaroori hai

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact Us", path: "/contact" },
  ];

  const services = [
    { label: "Peer Review", id: "peer-review" },
    { label: "Manuscript Writing", id: "services" },
    { label: "Publication Support", id: "services" },
    { label: "Scientific Communication", id: "services" },
    { label: "Data Analytics", id: "services" },
    { label: "Education Content", id: "services" },
    { label: "Medical Data Collection", id: "services" },
  ];

  const moreLinks = [
    { label: "Subjects", id: "peer-review" },
    { label: "Industries", id: "compliance" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-head">
          {/* Logo & Description */}
          <div className="footer-head-left">
            <div className="footer-logo">
              <img src=" assets/logo-footer.png" alt="Footer Logo" />
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
              Among our employers: startups like torchsensors.com with
              incredible Early Fire Detection Sensors, innovators like
              hedgehoghealth.com changing the way autism is diagnosed.
            </p>
          </div>
          {/* Follow Us & Trust Badges */}
          <div className="footer-head-right">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Behance">
                <img src=" assets/social-icon1.png" alt="" />
              </a>
              <a href="#" className="social-icon" aria-label="Dribbble">
                <img src=" assets/social-icon2.png" alt="" />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <img src=" assets/social-icon3.png" alt="" />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <img src=" assets/social-icon4.png" alt="" />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <img src=" assets/social-icon5.png" alt="" />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <img src=" assets/social-icon6.png" alt="" />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <img src=" assets/social-icon7.png" alt="" />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <img src=" assets/social-icon8.png" alt="" />
              </a>
            </div>

            <div className="trust-badges">
              <div className="payment-badges-row">
                <img src=" assets/payment-group.png" alt="" />
              </div>
              <div className="security-badges-row">
                <img src=" assets/trusted-footer.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((item) => (
                <span key={item.path}>
                  <Link
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
                </span>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <div className="footer-links">
              {services.map((link, idx) => (
                <a
                  href={`#${link.id}`}
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* More & Legal Links */}
          <div className="footer-col">
            <h4>More</h4>
            <div className="footer-links">
              {moreLinks.map((link, idx) => (
                <a
                  href={`#${link.id}`}
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {link.label}
                </a>
              ))}

              {/* Terms ka link */}
              <Link to="/terms" onClick={() => window.scrollTo(0, 0)}>
                Terms & Conditions
              </Link>

              {/* Privacy ka link */}
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>©Copyright 2026 thejournalpublishers.com Rights Reserved</p>
          <div className="footer-bottom-links">
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
              }}
              style={{ textDecoration: "underline" }}
            >
              Rated 4.8/5 based on 5768 Reviews
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
