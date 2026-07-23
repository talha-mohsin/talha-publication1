import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Phone, ChevronDown } from "lucide-react";
import Button from "../components/Button.jsx";
import Form from "./Form.jsx";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false); // Mobile Dropdown ke liye alag state

  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    {
      label: "Services",
      path: "/services",
      children: [
        {
          label: "Peer Review Service",
          path: "/services/peer-review",
        },
        {
          label: "Manuscript Service",
          path: "/services/manuscript",
        },
      ],
    },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="navbar" id="main-navigation">
        <div className="container navbar-content">
          <div className="logo">
            <Link to="/">
              <img src="/assets/Pubmed-Publish-Logo.png" alt="Logo" />
            </Link>
          </div>

          {/* DESKTOP NAV LINKS */}
          <ul className="nav-links desktop-nav">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className="nav-item"
                // Hover per open hone ka logic
                onMouseEnter={() => item.children && setOpenDropdown(true)}
                onMouseLeave={() => item.children && setOpenDropdown(false)}
                // Click per open/close hone ka logic
                onClick={() => item.children && setOpenDropdown(!openDropdown)}
                style={{ position: "relative" }}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  {item.label}
                  {/* Parent Link par Icon ab display hoga */}
                  {item.children && <ChevronDown size={16} />}
                </Link>

                {item.children && openDropdown && (
                  <ul className="nav-dropdown-menu">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="desktop-cta">
              <Button
                text="Get Started"
                onClick={() => setIsModalOpen(true)}
                variant="navy"
              />
            </div>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`sidebar-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <aside className={`mobile-sidebar ${mobileMenuOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <img src="/assets/Pubmed-Publish-BW-.png" alt="Logo" />
          <button
            className="close-sidebar"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        <div className="sidebar-scroll-area">
          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <div key={item.path} style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? "active" : ""}
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {/* Icon yahan Parent (Services) ke samne lagaya gaya hai */}
                  {item.children && (
                    <button
                      onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ChevronDown
                        size={22}
                        style={{
                          transform: mobileSubmenuOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "0.3s",
                        }}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu sirf tab dikhega jab toggle (click) hoga */}
                {item.children && mobileSubmenuOpen && (
                  <div
                    className="mobile-submenu"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      paddingLeft: "15px",
                      marginTop: "10px",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ color: "#d1d5db", fontSize: "0.95rem" }} // Optional styling for child links
                      >
                        {child.label}
                        {/* Bache hue links se icon hata diya gaya hai */}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <hr className="sidebar-divider" />

          {/* Contact Info */}
          <div className="sidebar-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Mail size={18} />{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
            <div className="contact-item">
              <Button
                text="Get Started"
                onClick={() => setIsModalOpen(true)}
                variant="red"
              />
            </div>
          </div>
        </div>

        <Form
          isModal={true}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </aside>
    </>
  );
}
