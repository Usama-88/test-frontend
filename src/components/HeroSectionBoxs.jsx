import React from "react";
import "./style.css";

const HeroSectionBoxs = ({ amount, text }) => {
  return (
    <div className=" text-center box">
      <h1 style={{ color: "#2176b9", fontWeight: "700" }}>{amount}</h1>
      <span className="text-white">{text}</span>
    </div>
  );
};

export default HeroSectionBoxs;
