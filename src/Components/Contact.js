import React from "react";
import marketplaceicon from "../Assets/icons8-tokopedia-48.png";
import whatsappicon from "../Assets/icons8-whatsapp-48.png";

const Contact = () => {
  return (
    <div id="Contact" className="contact-page-wrapper text-center">
      <h1 className="primary-heading" id="Contact">
        Tertarik dengan permainan yang ditawarkan ?
      </h1>
      <h1 className="primary-heading mb-5">Segera komunikasikan</h1>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10 rounded-lg pr-5 pl-5">
          <div class="bg-black">
            <a
              target="_blank"
              href="https://wa.me/6282323011032"
              rel="noreferrer"
            >
              <button
                type="button"
                class="btn btn-success rounded-lg mb-3 mt-2 pl-5 pr-5 container shadow"
              >
                <img src={whatsappicon} alt="" />
                <h5>Whatsapp</h5>
              </button>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.tokopedia.com/sinarintantoys"
              rel="noreferrer"
            >
              <button
                type="button"
                class="btn btn-light text-white rounded-lg mb-2 pl-5 pr-5 container shadow"
              >
                <img src={marketplaceicon} alt="" />
                <h5 class=" text-success">Tokopedia</h5>
              </button>
            </a>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  );
};

export default Contact;
