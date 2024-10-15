import React from "react";
import { Link } from "react-router-dom";
import Ad from "./Ad";
import Filters from "./Filters";
import "../../styles/AdsFeed.css";

function AdsFeed() {
  return (
    <div className="ads-container">
      <Filters />
      <div className="ads-feed">
        <Link
          to="/single-ad"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Ad />
        </Link>
        <Link
          to="/single-ad"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Ad />
        </Link>
        <Link
          to="/single-ad"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Ad />
        </Link>
      </div>
    </div>
  );
}

export default AdsFeed;
