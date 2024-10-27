import React, { useState, useContext } from "react";
import "../../styles/CreateAgency.css";
import { AuthContext } from "../../contexts/AuthContext";

function CreateAgency({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: null,
  });
  const [message, setMessage] = useState("");
  const { createAgency } = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, location, image } = formData;

    // Validate input data
    if (typeof name !== "string" || name.trim() === "") {
      setMessage("Invalid name: Name must be a non-empty string.");
      return;
    }
    if (location && (typeof location !== "string" || location.trim() === "")) {
      setMessage("Invalid location: Location must be a non-empty string.");
      return;
    }
    if (image && !(image instanceof File)) {
      setMessage("Invalid image: Image must be a valid file object.");
      return;
    }

    // Create FormData to send to createAgency
    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("Location", location);
    if (image) {
      formDataToSend.append("image", image);
    }

    try {
      // Call createAgency with FormData
      const data = await createAgency(formDataToSend);
      setMessage(`Agency created successfully with ID: ${data.agency_id}`);
    } catch (error) {
      console.error("Error:", error.message);
      setMessage("An error occurred while creating the agency");
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div
            className="create-agency-backdrop"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="create-agency">
            <h1>Create Agency</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Agency Name (Required)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location (Optional)</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Logo (Optional)</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Create Agency</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </>
      )}
    </>
  );
}

export default CreateAgency;
