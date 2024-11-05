import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function AuthorizedAgenciesComponent({
  selectedAgencyId,
  setSelectedAgencyId,
}) {
  const { getAuthorizedAgencies } = useContext(AuthContext);
  const [agencies, setAgencies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    async function fetchAgencies() {
      try {
        const response = await getAuthorizedAgencies();
        if (response.message === "success" && Array.isArray(response.data)) {
          setAgencies(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Failed to fetch authorized agencies:", error);
      }
    }

    fetchAgencies();
  }, [getAuthorizedAgencies]);

  const handleSelectAgency = (agencyId) => {
    setSelectedAgencyId(agencyId);
    setIsDropdownOpen(false);
  };

  return (
    <div className="authorized-agencies-section">
      <h2>Seleziona agenzia</h2>
      <div className="dropdown single-choice-dropdown">
        <div
          className={`dropdown-header ${isDropdownOpen ? "open" : ""}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedAgencyId ? selectedAgencyId : "Seleziona Agenzia..."}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-list open">
            {agencies.length > 0 ? (
              agencies.map((agency) => (
                <li
                  className="dropdown-list-item"
                  key={agency.agency_id}
                  onClick={() => handleSelectAgency(agency.agency_id)}
                >
                  <input
                    type="radio"
                    name="authorizedAgency"
                    checked={selectedAgencyId === agency.agency_id}
                    readOnly
                  />
                  <span>{agency.agency_id}</span>
                </li>
              ))
            ) : (
              <li className="dropdown-list-item">
                Nessuna agenzia. Creane una.
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AuthorizedAgenciesComponent;
