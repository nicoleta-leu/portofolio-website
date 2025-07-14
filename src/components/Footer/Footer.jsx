import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer" id='contact'>
    <div className="contact-links">
      <a href="tel:+37360123456" aria-label="Telefon">
        <FaPhoneAlt />
        <span>+373 60874139</span>
      </a>

      <a href="mailto:leu.nicoleta@yahoo.com" aria-label="Email">
        <FaEnvelope />
        <span>leu.nicoleta@yahoo.com</span>
      </a>
    </div>
    <p >
      {new Date().getFullYear()} - Nicoleta&nbsp;|&nbsp;Front‑End Developer în devenire...
    </p>
  </footer>
);

export default Footer;
