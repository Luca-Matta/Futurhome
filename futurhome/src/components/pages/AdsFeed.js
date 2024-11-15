import React, { useEffect, useState } from "react";
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

    if (
      response.headers["content-type"] &&
      response.headers["content-type"].includes("application/json")
    ) {
      return response.data;
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

    return {
      ...response.data,
      liked: response.data.liked || false, // Default liked status
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

async function toggleLike(adId, liked) {
  const preReleaseKey = "Hya4epmFOarYyVmX7xXlLyLnO0uAv7MB";
  try {
    const response = await axios.post(
      `/api/post/${adId}/like-toggle`,
      { liked },
      {
        headers: {
          "Cache-Control": "no-cache",
          Accept: "application/json",
          "X-Pre-Release-Key": preReleaseKey,
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      `Error toggling like for ad ${adId}:`,
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to update like status.");
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
        setAds(Array.isArray(adsData) ? adsData : []);

        const details = {};
        for (const adId of adsData) {
          const adDetail = await fetchAdDetails(adId);
          details[adId] = adDetail;
        }
        setAdDetails(details);
      } catch (error) {
        setError(error.message);
      }
    };

    loadAds();
  }, []);

  const handleLikeToggle = async (adId) => {
    try {
      const updatedAd = await toggleLike(adId, !adDetails[adId].liked);
      setAdDetails((prevDetails) => ({
        ...prevDetails,
        [adId]: updatedAd,
      }));
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

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
              ad={adDetails[adId]}
              onLikeToggle={() => handleLikeToggle(adId)}
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
