
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              NEXORA<span>.</span>
            </Link>

            <p className="footer-description">
              We help businesses move forward with innovative digital
              solutions, powerful technology, and smart business strategies.
              Your growth is our priority.
            </p>

            <Link to="/contact" className="footer-cta">
              Let's Work Together <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h3>Our Expertise</h3>
            <Link to="/services">Web Development</Link>
            <Link to="/services">AI Integration</Link>
            <Link to="/services">SEO & Digital Marketing</Link>
            <Link to="/services">Google & Meta Ads</Link>
            <Link to="/services">Business Automation</Link>
            <Link to="/services">CRM Management</Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact Information</h3>

            <a href="tel:+923325846725">
              <Phone size={18} />
              <span>0332 5846725</span>
            </a>

            <a href="mailto:kaleemullahktk399@gmail.com">
              <Mail size={18} />
              <span>kaleemullahktk399@gmail.com</span>
            </a>

            <a
              href="https://wa.me/923325846725"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="footer-location">
              <MapPin size={18} />
              <span>Serving Businesses Worldwide</span>
            </div>
          </div>
        </div>

        <div className="footer-highlight">
          <div>
            <span className="footer-highlight-label">HAVE A PROJECT IN MIND?</span>
            <h2>Let's build something <span>extraordinary.</span></h2>
          </div>

          <Link to="/contact" className="footer-highlight-link">
            Start a Conversation <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NEXORA. All rights reserved.</p>
          <p>Digital & Business Solutions</p>
          <Link to="/contact">Get in Touch <ArrowUpRight size={14} /></Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
