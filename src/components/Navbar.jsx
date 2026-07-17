import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // 1. Link aur useLocation import karein
import { Menu, X, Mail, Phone } from 'lucide-react';
import Button from '../components/Button.jsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // 2. Current route check karne ke liye

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="navbar" id="main-navigation">
        <div className="container navbar-content">
          <div className="logo">
            <Link to="/">
              <img src=" assets/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* DESKTOP NAV LINKS */}
          <ul className="nav-links desktop-nav">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="desktop-cta">
              <Button text="+0000000000" variant="navy" href="tel:+0000000000" />
            </div>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`sidebar-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <aside className={`mobile-sidebar ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <img src=" assets/logo-footer.png" alt="Logo" />
          <button className="close-sidebar" onClick={() => setMobileMenuOpen(false)}><X size={28} /></button>
        </div>

        <div className="sidebar-scroll-area">
          <nav className="sidebar-nav">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <hr className="sidebar-divider" />
          
          {/* Contact Info */}
          <div className="sidebar-contact">
            <h4>Contact Info</h4>
            <div className="contact-item"><Mail size={18} /> <a href="mailto:info@example.com">info@example.com</a></div>
            <div className="contact-item"><Phone size={18} /> <a href="tel:+0000000000">+00 000 00000</a></div>
          </div>
        </div>
      </aside>
    </>
  );
}