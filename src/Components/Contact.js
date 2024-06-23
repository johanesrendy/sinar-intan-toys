import React from "react";
import marketplaceicon from "../Assets/icons8-shopee-48.png";
import whatsappicon from "../Assets/icons8-whatsapp-48.png";

const Contact = () => {
  return (
    <div id="contact" className="contact-page-wrapper text-center">
      <h1 className="primary-heading">Tertarik dengan permainan yang ditawarkan ?</h1>
      <h1 className="primary-heading mb-5">Segera komunikasikan</h1>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10 rounded-lg pr-5 pl-5">
          <div class="bg-black">
            <button type="button" class="btn btn-success rounded-lg mb-3 mt-2 pl-5 pr-5 container">
              <img src={whatsappicon} alt="" />
              <h5>Whatsapp</h5>
            </button>
          </div>
          <div>
            <button type="button" class="btn bg-white text-white rounded-lg mb-2 pl-5 pr-5 container">
              <img src={marketplaceicon} alt="" />
              <a href="https://www.youtube.com"></a>
              <h5 class="text-danger">Shopee</h5>
            </button>
          </div>
        </div
        <div class="col-1"></div>
      </div>
    </div>
  );
};

export default Contact;
