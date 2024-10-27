import React, { useState } from "react";
import "../../styles/AdBanner.css";
import PublishAdModal from "../common/PublishAdModal";

function AdBanner() {
  const [isPublishAdModalOpen, setIsPublishAdModalOpen] = useState(false);
  return (
    <div className="ad-banner">
      <h4 className="ad-banner-content">Pubblica annunci su Futurhome</h4>
      <div
        className="ad-banner-link"
        onClick={(e) => {
          e.preventDefault();
          setIsPublishAdModalOpen(true);
        }}
      >
        Pubblica ora
      </div>
      <PublishAdModal
        isOpen={isPublishAdModalOpen}
        setIsOpen={setIsPublishAdModalOpen}
      />
    </div>
  );
}

export default AdBanner;
