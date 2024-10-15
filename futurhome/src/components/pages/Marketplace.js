import React from "react";
import "../../styles/Marketplace.css";
import MarketplaceSearchBox from "./MarketplaceSearchBox";
import ProfessionalCard from "../common/ProfessionalCard";
import logo from "../../static/icons/logo.svg";

function Marketplace() {
  return (
    <div className="marketplace">
      <div className="header">
        <div className="logo-section">
          <img
            src={logo}
            alt="Logo"
            className="logo-home"
          />
          <h3 className="logo-section-subtitle">Marketplace</h3>
        </div>
        <div className="search-box-container">
          <MarketplaceSearchBox />
        </div>
      </div>
      <div className="professionals">
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
        <ProfessionalCard />
      </div>
    </div>
  );
}

export default Marketplace;
