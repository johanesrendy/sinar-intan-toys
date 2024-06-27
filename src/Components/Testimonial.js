import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimoni</p>
        <h1 className="primary-heading" align="center">Apa Yang Mereka Katakan</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Barang yang dikirim bagus dan berkualitas. Harganya juga murah. Mudah membeli mainan disini. Pasti beli lagi disni!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Arya Budi</h2>
      </div>
    </div>
  );
};

export default Testimonial;
