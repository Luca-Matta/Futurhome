import React, { useState } from "react";
import "../../styles/PublishAdModal.css";
import AuthorizedAgencies from "./AuthorizedAgencies.js";
import PropertyType from "./PropertyType.js";
import PropertyArea from "./PropertyArea.js";
import PropertyRooms from "./PropertyRooms.js";
import PropertyBathrooms from "./PropertyBathrooms.js";
import PropertyFloor from "./PropertyFloorSection.js";
import PropertyCondition from "./PropertyCondition.js";
import PropertyElevator from "./PropertyElevator.js";
import PropertyBalcony from "./PropertyBalcony.js";
import PropertyHeating from "./PropertyHeating.js";
import PropertyEnergyClass from "./PropertyEnergyClass.js";
import PropertyYear from "./PropertyYear.js";
import PropertyPrice from "./PropertyPrice.js";
import PropertyForniture from "./PropertyForniture.js";
import PropertyExposure from "./PropertyExposure.js";
import PropertyAmenities from "./PropertyAmenities.js";
import PropertyCondoFees from "./PropertyCondoFees.js";
import PropertyAccessibility from "./PropertyAccessibility.js";
import PropertyLocation from "./PropertyLocation.js";
import PropertySpecialFeatures from "./PropertySpecialFeatures.js";
import PropertyGarden from "./PropertyGarden.js";
import PropertyAddress from "./PropertyAdress.js";

const createAd = async (agencyId, price, address, bathrooms, bedrooms) => {
  const formData = new FormData();
  formData.append("price", price);
  formData.append("address", address);
  formData.append("bathrooms", bathrooms);
  formData.append("bedrooms", bedrooms);

  try {
    const response = await fetch(
      `/api/agency/create-listing?agency_id=${agencyId}`,
      {
        method: "POST",
        credentials: "include",
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Success:", data);

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

function PublishAdModal({ isOpen, setIsOpen }) {
  const [section, setSection] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    condition: null,
    area: null,
    rooms: null,
    bathrooms: null,
    floor: null,
  });
  const [address, setAddress] = useState("");

  const handleNextSection = () => {
    setSection(section + 1);
  };

  const handlePreviousSection = () => {
    setSection(section - 1);
  };

  const handlePublish = async () => {
    const agencyId = "58862";
    const { price, address, bathrooms, rooms: bedrooms } = selectedOptions;

    try {
      const result = await createAd(
        agencyId,
        price,
        address,
        bathrooms,
        bedrooms
      );
      console.log("Ad published successfully:", result);
    } catch (error) {
      console.error("Failed to publish ad:", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="publish-ad-modal-backdrop"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div>
        {isOpen && (
          <div className="publish-ad-modal">
            <h1>PUBBLICA ANNUNCIO</h1>
            <div className="horizontal-line"></div>
            {section === 1 && (
              <>
                <AuthorizedAgencies />
                <PropertyAddress
                  address={address}
                  setAddress={setAddress}
                />
                <PropertyType
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                  setSelectedOptions={setSelectedOptions}
                  selectedOptions={selectedOptions}
                />
                <PropertyCondition
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 2 && (
              <PropertyArea
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
              />
            )}
            {section === 3 && (
              <>
                <PropertyRooms
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertyBathrooms
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 4 && (
              <>
                <PropertyFloor
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 5 && (
              <>
                <PropertyBalcony
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertyGarden
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 6 && (
              <>
                <PropertyHeating
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertyEnergyClass
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 7 && (
              <>
                <PropertyYear
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertyPrice
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 8 && (
              <>
                <PropertyForniture
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertyExposure
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 9 && (
              <>
                <PropertyAmenities
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertyCondoFees
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 10 && (
              <>
                <PropertyElevator
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertyAccessibility
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 11 && (
              <>
                <PropertyLocation
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
                <PropertySpecialFeatures
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </>
            )}
            {section === 11 && (
              <div className="navigation-buttons">
                <button
                  className="previous-button"
                  type="button"
                  onClick={handlePreviousSection}
                >
                  &lt;
                </button>
                <button
                  className="submit-button"
                  type="submit"
                  onClick={handlePublish}
                >
                  Pubblica
                </button>
              </div>
            )}
            {section == 1 && (
              <button
                className="next-button"
                type="button"
                onClick={handleNextSection}
              >
                Prossimo
              </button>
            )}
            {section !== 1 && section !== 11 && (
              <div className="navigation-buttons">
                <button
                  className="previous-button"
                  type="button"
                  onClick={handlePreviousSection}
                >
                  &lt;
                </button>

                <button
                  className="next-button"
                  type="button"
                  onClick={handleNextSection}
                >
                  Prossimo
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default PublishAdModal;
