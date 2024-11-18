import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ad from "./Ad";
import Filters from "./Filters";
import "../../styles/AdsFeed.css";
import axios from "axios";

async function fetchAdsId(page = 0) {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  try {
    const response = await axios.get(
      `/api/post/get-post-ids?page=${page}&pre-release-key=${preReleaseKey}`,
      {
        headers: {
          "Cache-Control": "no-cache",
          Accept: "application/json",
          "X-Pre-Release-Key": preReleaseKey,
        },
      }
    );

    console.log("Response data:", response.data);

    if (
      response.headers["content-type"] &&
      response.headers["content-type"].includes("application/json")
    ) {
      return response.data;
    } else if (response.headers["content-type"].includes("text/html")) {
      throw new Error(
        "Unexpected HTML response received. Please check the API."
      );
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error(
      "Error fetching ads:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to fetch ads. Please try again later.");
  }
}

async function fetchAdDetails(adId) {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  try {
    const response = await axios.get(
      `/api/post/${adId}?pre-release-key=${preReleaseKey}`,
      {
        headers: {
          "Cache-Control": "no-cache",
          Accept: "application/json",
          "X-Pre-Release-Key": preReleaseKey,
        },
        withCredentials: true,
      }
    );

    console.log(`Details for ad ${adId}:`, response.data);

    return {
      ...response.data,
    };
  } catch (error) {
    console.error(
      `Error fetching details for ad ${adId}:`,
      error.response ? error.response.data : error.message
    );
    throw new Error(
      `Failed to fetch details for ad ${adId}. Please try again later.`
    );
  }
}

function AdsFeed() {
  const [ads, setAds] = useState([]);
  const [adDetails, setAdDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAds = async () => {
      try {
        const adsData = await fetchAdsId(0);
        console.log("Ads data received:", adsData);
        setAds(Array.isArray(adsData) ? adsData : []);

        const adDetails = await Promise.all(
          adsData.map(async (adId) => {
            const adDetail = await fetchAdDetails(adId);
            return { adId, adDetail };
          })
        );

        const details = adDetails.reduce((acc, { adId, adDetail }) => {
          acc[adId] = adDetail;
          return acc;
        }, {});

        setAdDetails(details);
      } catch (error) {
        setError(error.message);
      }
    };

    loadAds();
  }, []);

  return (
    <div className="ads-container">
      <Filters />
      <div className="ads-feed">
        {error ? (
          <p className="error-message">{error}</p>
        ) : ads.length > 0 ? (
          ads.map((adId) => (
            <Ad
              key={adId}
              adDetails={adDetails[adId]}
              adId={adId}
            />
          ))
        ) : (
          <p>Caricamento...</p>
        )}
      </div>
    </div>
  );
}

export default AdsFeed;
