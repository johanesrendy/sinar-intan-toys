import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-illust.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Toko Mainan Terbaik Untuk Anak Anda
          </h1>
          <p className="primary-text">
            Hadirkan Senyum dan Petualangan untuk Buah Hati Anda
          </p>
          <a href="#contact">
            <button className="secondary-button">
              Pesan Sekarang <FiArrowRight />
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
