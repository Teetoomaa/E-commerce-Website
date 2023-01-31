import logo from "../images/Logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-box">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h4>Temi Coffee</h4>
          </div>
          <p>
            Our coffee is always the way you like it. We don't make your coffee.
            We make your day.We're not just a coffee. We're a lifestyle.
          </p>
        </div>
      
        <div className="footer-box">
        <h3>Quick Links</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
      </div>

      <div className="footer-box">
        <h3>Contact Info</h3>
        <ul>
            <li>+1 635 546 3451, +1 604 500 2000</li>
            <li>robinsonjacks@gmail.com</li>
            <li>petersonotion@gmail.com</li>
            <li>Copper Square, Newyork</li>
          </ul>
        <FaTwitter style={{ fontSize: 20, color: "white", margin: 10 }} />
        <FaInstagram style={{ fontSize: 20, color: "white", margin: 10 }} />
        <FaFacebookF style={{ fontSize: 20, color: "white", margin: 10}} />
        <GrLinkedinOption style={{ fontSize: 20, color: "white", margin: 10 }} />
      </div>
      </div>

      <div className="design-container">
        <p>Designed By Tetomadesigns | All Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
