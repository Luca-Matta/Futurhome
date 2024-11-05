import React, { useState, useEffect } from "react";
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
import "../../styles/PublishAdModal.css";

const createAd = async (
  agencyId,
  type,
  condition,
  total_area,
  walkable_area,
  bedrooms,
  bathrooms,
  floor,
  multiple_stories,
  total_floors,
  external_dependencies,
  garden,
  heating,
  energy_consumption,
  year_of_construction,
  price,
  price_status,
  furnished,
  facing,
  extra_dependencies,
  condo_fees,
  elevator,
  accessibility,
  position,
  other_features,
  address
) => {
  const formData = new FormData();
  formData.append("type", type);
  formData.append("condition", condition);
  formData.append("total_area", total_area);
  formData.append("walkable_area", walkable_area);
  formData.append("bedrooms", bedrooms);
  formData.append("bathrooms", bathrooms);
  formData.append("floor", floor);
  formData.append("multiple_stories", multiple_stories);
  formData.append("total_floors", total_floors);
  formData.append(
    "external_dependencies",
    JSON.stringify(external_dependencies)
  );
  formData.append("garden", garden);
  formData.append("heating", JSON.stringify(heating));
  formData.append("energy_consumption", energy_consumption);
  formData.append("year_of_construction", year_of_construction);
  formData.append("price", price);
  formData.append("price_status", price_status);
  formData.append("furnished", furnished);
  formData.append("facing", JSON.stringify(facing));
  formData.append("extra_dependencies", JSON.stringify(extra_dependencies));
  formData.append("condo_fees", condo_fees);
  formData.append("elevator", elevator);
  formData.append("accessibility", accessibility);
  formData.append("position", position);
  formData.append("other_features", JSON.stringify(other_features));
  formData.append("address", address);

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
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedAgencyId, setSelectedAgencyId] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({
    type: "",
    condition: undefined,
    total_area: undefined,
    walkable_area: undefined,
    bedrooms: undefined,
    bathrooms: undefined,
    floor: undefined,
    multiple_stories: undefined,
    total_floors: undefined,
    external_dependencies: undefined,
    garden: undefined,
    heating: undefined,
    energy_consumption: undefined,
    year_of_construction: undefined,
    price: undefined,
    price_status: undefined,
    furnished: undefined,
    facing: undefined,
    extra_dependencies: undefined,
    condo_fees: undefined,
    elevator: undefined,
    accessibility: undefined,
    position: undefined,
    other_features: undefined,
    address: undefined,
  });

  const handleTypeChange = (event) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      type: event.target.value,
    }));
  };

  const progressComputation = () => {
    const dynamicFields = Object.keys(selectedOptions).length;
    const filledFields = Object.values(selectedOptions).filter(Boolean).length;
    const progress = Math.round((filledFields / dynamicFields) * 100);
    console.log("Progress Computed:", progress);
    return Math.min(progress, 100);
  };

  useEffect(() => {
    progressComputation();
  }, [selectedOptions]);

  const handlePublish = async () => {
    try {
      const result = await createAd(
        selectedAgencyId,
        selectedOptions.type,
        selectedOptions.condition,
        selectedOptions.total_area,
        selectedOptions.walkable_area,
        selectedOptions.bedrooms,
        selectedOptions.bathrooms,
        selectedOptions.floor,
        selectedOptions.multiple_stories,
        selectedOptions.total_floors,
        selectedOptions.external_dependencies,
        selectedOptions.garden,
        selectedOptions.heating,
        selectedOptions.energy_consumption,
        selectedOptions.year_of_construction,
        selectedOptions.price,
        selectedOptions.price_status,
        selectedOptions.furnished,
        selectedOptions.facing,
        selectedOptions.extra_dependencies,
        selectedOptions.condo_fees,
        selectedOptions.elevator,
        selectedOptions.accessibility,
        selectedOptions.position,
        selectedOptions.other_features,
        selectedOptions.address
      );
      console.log("Ad published successfully:", result);
    } catch (error) {
      console.error("Failed to publish ad:", error);
    }
  };

  const tabs = [
    {
      name: "Tab 1",
      content: (
        <>
          <AuthorizedAgencies
            selectedAgencyId={selectedAgencyId}
            setSelectedAgencyId={setSelectedAgencyId}
          />
          <PropertyAddress
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
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
      ),
    },
    {
      name: "Tab 2",
      content: (
        <>
          <PropertyArea
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyRooms
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyBathrooms
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </>
      ),
    },
    {
      name: "Tab 3",
      content: (
        <>
          <PropertyFloor
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyBalcony
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyGarden
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </>
      ),
    },
    {
      name: "Tab 4",
      content: (
        <>
          <PropertyHeating
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyEnergyClass
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyYear
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyPrice
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </>
      ),
    },
    {
      name: "Tab 5",
      content: (
        <>
          <PropertyForniture
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyExposure
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyAmenities
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyCondoFees
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </>
      ),
    },
    {
      name: "Tab 6",
      content: (
        <>
          <PropertyElevator
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyAccessibility
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertyLocation
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <PropertySpecialFeatures
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </>
      ),
    },
    {
      name: "Riepilogo",
      content: (
        <>
          <h3>Riepilogo</h3>
          <ul>
            <li>Agenzia Selezionata: {selectedAgencyId || "Nessuna"}</li>
            <li>
              Tipo di Proprietà: {selectedOptions.type || "Non selezionato"}
            </li>
            <li>
              Condizione: {selectedOptions.condition || "Non specificata"}
            </li>
            <li>
              Area Totale: {selectedOptions.total_area || "Non specificata"}
            </li>
            <li>
              Area Calpestabile:{" "}
              {selectedOptions.walkable_area || "Non specificata"}
            </li>
            <li>Camere: {selectedOptions.bedrooms || "Non specificato"}</li>
            <li>Bagni: {selectedOptions.bathrooms || "Non specificato"}</li>
            <li>Piano: {selectedOptions.floor || "Non specificato"}</li>
            <li>
              Piani Multipli: {selectedOptions.multiple_stories ? "Sì" : "No"}
            </li>
            <li>
              Totale Piani: {selectedOptions.total_floors || "Non specificato"}
            </li>
            <li>
              Dipendenze Esterne:{" "}
              {selectedOptions.external_dependencies || "Non specificate"}
            </li>
            <li>Giardino: {selectedOptions.garden ? "Sì" : "No"}</li>
            <li>
              Riscaldamento: {selectedOptions.heating || "Non specificato"}
            </li>
            <li>
              Consumo Energetico:{" "}
              {selectedOptions.energy_consumption || "Non specificato"}
            </li>
            <li>
              Anno di Costruzione:{" "}
              {selectedOptions.year_of_construction || "Non specificato"}
            </li>
            <li>Prezzo: {selectedOptions.price || "Non specificato"}</li>
            <li>
              Stato del Prezzo:{" "}
              {selectedOptions.price_status || "Non specificato"}
            </li>
            <li>Arredato: {selectedOptions.furnished ? "Sì" : "No"}</li>
            <li>Esposizione: {selectedOptions.facing || "Non specificata"}</li>
            <li>
              Dipendenze Extra:{" "}
              {selectedOptions.extra_dependencies || "Non specificate"}
            </li>
            <li>
              Spese Condominiali:{" "}
              {selectedOptions.condo_fees > 0
                ? `${selectedOptions.condo_fees} €`
                : "Assenti"}
            </li>
            <li>Ascensore: {selectedOptions.elevator ? "Sì" : "No"}</li>
            <li>
              Accessibilità:{" "}
              {selectedOptions.accessibility || "Non specificata"}
            </li>
            <li>Posizione: {selectedOptions.position || "Non specificata"}</li>
            <li>
              Altre Caratteristiche:{" "}
              {selectedOptions.other_features || "Non specificate"}
            </li>
            <li>Indirizzo: {selectedOptions.address || "Non specificato"}</li>
          </ul>
          <button
            className="submit-button"
            onClick={handlePublish}
          >
            Pubblica
          </button>
        </>
      ),
    },
  ];

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
            <div className="tab-navigation">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-button ${
                    index === currentTab ? "active" : ""
                  }`}
                  onClick={() => setCurrentTab(index)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="horizontal-line"></div>
            <div className="tab-content">{tabs[currentTab].content}</div>
            {currentTab !== tabs.length - 1 && (
              <div className="progress-bar-container">
                <div className="progress-bar-background">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${progressComputation()}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default PublishAdModal;
