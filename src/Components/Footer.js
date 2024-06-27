import React from "react";

import marketplaceicon from "../Assets/icons8-tokopedia-48kecil.png";
import whatsappicon from "../Assets/icons8-whatsapp-48kecil.png";

const Footer = () => {
  const menu = ["Home", "About", "Product", "Testimonial", "Contact"];
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h4>Sinar Intan Toys</h4>
        </div>
        <div className="footer-icons">
          <a
            target="_blank"
            href="https://www.tokopedia.com/sinarintantoys"
            rel="noreferrer"
          >
            <img src={marketplaceicon} alt="" />
          </a>
          <a
            target="_blank"
            href="https://wa.me/6282323011032"
            rel="noreferrer"
          >
            <img src={whatsappicon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          {menu.map((item, index) => (
            <div key={index}>
              <a href={`#${item}`}>
                <span>{item}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="footer-section-columns">
          <a
            target="_blank"
            href="https://wa.me/6282323011032"
            rel="noreferrer"
          >
            <span>0823-2301-1032</span>
          </a>
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=TommyGunawan@gmail.com"
            rel="noreferrer"
          >
            <span>sinarintantoys@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
