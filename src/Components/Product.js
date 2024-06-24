import React from "react";
import Product1 from "../Assets/product1.jpg";
import Product2 from "../Assets/product2.jpg";
import Product3 from "../Assets/product3.jpg";

const Product = () => {
  const workInfoData = [
    {
      image: Product1,
      title: "Rp20.000",
      text: "Mainan Kendaraan Truk Pemadam Api Kebakaran Anak Fire Heroes of City",
      link: "https://www.tokopedia.com/sinarintantoys/mainan-kendaraan-truk-pemadam-api-kebakaran-anak-fire-heroes-of-city?extParam=src%3Dshop%26whid%3D7574678",
    },
    {
      image: Product2,
      title: "Rp50.000",
      text: "Mainan Mobil Beko Konstruksi Jumbo Besar Anak Kobelco",
      link: "https://www.tokopedia.com/sinarintantoys/mainan-mobil-beko-konstruksi-jumbo-besar-anak-kobelco?extParam=src%3Dshop%26whid%3D7574678",
    },
    {
      image: Product3,
      title: "Rp17.000",
      text: "Mainan Mobil Polisi Anak Model Sedan Sport Murah - Putih",
      link: "https://www.tokopedia.com/sinarintantoys/mainan-mobil-polisi-anak-model-sedan-sport-murah-putih?extParam=src%3Dshop%26whid%3D7574678",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Product</p>
        <h1 className="primary-heading">Apa Saja Produknya</h1>
        <p className="primary-text">
          Kami menawarkan berbagai mainan edukatif dan menyenangkan yang
          membantu tumbuh kembang anak Anda.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info shadow" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="rounded-img" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <a className="primary-button-product shadow" href={data.link}>
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
