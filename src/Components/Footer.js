import React from "react";

import marketplaceicon from "../Assets/icons8-shopee-48kecil.png";
import whatsappicon from "../Assets/icons8-whatsapp-48kecil.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h4>Sinar Intan Toys</h4>
        </div>
        <div className="footer-icons">
          <img src={marketplaceicon} alt=""/>
          <img src={whatsappicon} alt=""/>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Home</span>
          <span>About</span>
          <span>Work</span>
          <span>Testimonials</span>
          <span>Contact</span>
        </div>
        <div className="footer-section-columns">
          <span>0823-2301-1032</span>
          <span>TommyGunawan@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
