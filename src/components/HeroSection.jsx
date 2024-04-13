import React from "react";
import "./style.css";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

const HeroSection = () => {
  return (
    <div className="">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="hero-section-data col-lg-12 col-12 ">
          <span style={{ color: "#2176b9" }}>SINCE 2021</span>
          <h1>
            WE ARE LOOKING FOR <br /> PROFITABLE TRADERS
          </h1>
          <span style={{ color: "#dadada" }}>
            Unleash your inner whale and trade up to $500,000 in a trading
            environment <br /> where you can earn real gains
          </span>
          <div className="d-flex mt-4 button-container">
            <button>Learn More</button>
            <button className="freeTrail">Free Trial</button>
          </div>
          <div className="d-flex mt-4 img-container">
            <img
              style={{
                borderRadius: "50%",

                border: "5px solid #141e26",
              }}
              src={pic1}
              alt=""
            />
            <img
              style={{
                borderRadius: "50%",

                marginLeft: "-15px",
                border: "5px solid #141e26",
              }}
              src={pic2}
              alt=""
            />
            <img
              style={{
                borderRadius: "50%",

                marginLeft: "-15px",
                border: "5px solid #141e26",
              }}
              src={pic3}
              alt=""
            />
            <img
              style={{
                borderRadius: "50%",

                marginLeft: "-15px",
                border: "5px solid #141e26",
              }}
              src={pic4}
              alt=""
            />
            <div className="after-img-container" style={{ marginLeft: "10px" }}>
              <h2 className="text-white">15 Million+</h2>
              <span className="text-white">
                Be part of growing <br /> community
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
