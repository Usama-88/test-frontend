import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HeroSectionBoxs from "../components/HeroSectionBoxs";
import WhalefundrBox from "../components/WhalefundrBox";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

const HomePage = () => {
  return (
    <div className="MainContainer">
      <div className="home mb-5">
        <Header />
        <HeroSection />
        <div className="box-container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <HeroSectionBoxs
                amount={"$180M+"}
                text={"Paid out to FTMO Traders"}
              />
            </div>
            <div className="col-lg-3 col-6">
              <HeroSectionBoxs
                amount={"180+"}
                text={"No. of countries with traders "}
              />
            </div>
            <div className="col-lg-3 col-6">
              <HeroSectionBoxs
                amount={"16M+"}
                text={"No. of trades opened every "}
              />
            </div>
            <div className="col-lg-3 col-6">
              <HeroSectionBoxs
                amount={"8h"}
                text={"Avg payout processing time"}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10rem", paddingBottom: "20px" }}>
        <h1
          className="text-center text-white whaleFundr"
          style={{ fontWeight: "700" }}
        >
          <span style={{ color: "#2176b9" }}>WhaleFundr</span> is one of the
          most reliable firms <br /> in modern prop trading industry.
        </h1>
        <div className="container mb-5">
          <div className="mt-5 row">
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon1} />
            </div>
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon2} />
            </div>
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon3} />
            </div>
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon1} />
            </div>
          </div>
          <div className=" row">
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon1} />
            </div>
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon2} />
            </div>
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon3} />
            </div>
            <div className="col-lg-3 col-6">
              <WhalefundrBox src={icon1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
