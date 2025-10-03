import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      {/* Column 1: School Info */}
      <div className="footer-column">
        <h3>📍 Smart Vidyalaya</h3>
        <p>Excellence Road, Kareli, Narsinghpur, MP</p>
        <p>Indore Campus: Vijay Nagar</p>
        <p>Phone: +91-9876543210 / +91-9754321000</p>
        <p>Email: info@smartvidyalaya.in</p>
      </div>

      {/* Column 2: Quick Links */}
      <div className="footer-column">
        <h3>🔗 Quick Links</h3>
        <ul>
          <li><a href="/admissions">Admissions</a></li>
          <li><a href="/academics">Academics</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/downloads">Downloads</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Column 3: Office Hours & Social */}
      <div className="footer-column">
        <h3>🕒 Office Hours</h3>
        <p>Mon–Sat: 9:00 AM – 4:00 PM</p>
        <p>Sunday: Closed</p>
        <h3>📱 Social</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="footer-bottom">
      <p>&copy; 2025 Smart Vidyalaya. All rights reserved.</p>
      <p>
        <a
          href="https://www.google.com/maps/place/Indore,+Madhya+Pradesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 View Location on Map
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
