import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="About">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Sinar Intan Toys</p>
        <h1 className="primary-heading">
          Harga <span className="primary-heading-red">Terjangkau</span>
        </h1>
        <h1 className="primary-heading">
          Kualitas <span className="primary-heading-red">Memukau</span>
        </h1>
        <p className="primary-text">
          Berdiri sejak tahun 2007, Sinar Intan Toys hadir untuk memberikan para
          pelanggan beragam jenis mainan, menjadikan tempat pilihan yang tepat
          untuk mendapatkan mainan terbaik dengan harga yang pas.
        </p>
        <p className="primary-text">
          Sinar Intan Toys dapat anda kunjungi di Pasar Anyar Kota Tangerang
          serta tersedia pada aplikasi Tokopedia: Sinar Intan Toys.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
