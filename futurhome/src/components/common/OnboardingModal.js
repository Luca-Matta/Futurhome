import React, { useState } from "react";
import "../../styles/OnboardingModal.css";
import avatar from "../../static/icons/avatar.svg";

function OnboardingModal({ closeModal, handleOnboardingComplete }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    profilePicture: null,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profilePicture: URL.createObjectURL(file),
      });
    }
  };

  const nextPage = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const closeModalHandler = () => {
    closeModal();
  };

  const handleFinish = () => {
    handleOnboardingComplete(formData);
    closeModalHandler();
  };

  return (
    <div className="onboarding-modal">
      <div className="onboarding-modal-content">
        <form>
          {currentPage === 0 && (
            <div>
              <h2>Benvenuto su FuturHome!</h2>
              <p>Per iniziare, inserisci il tuo nome</p>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentPage === 1 && (
            <div>
              <h2>Inserisci il tuo numero di telefono (opzionale)</h2>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Numero di telefono"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          )}
          {currentPage === 2 && (
            <div>
              <h2>Carica la tua foto del profilo</h2>
              <div className="onboarding-modal-avatar-upload">
                <div></div>
                <div className="avatar-upload mb-3">
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <label
                    className="text-center"
                    id="avatar-upload-label"
                    htmlFor="profilePicture"
                  >
                    <img
                      id="avatar-preview"
                      src={formData.profilePicture || avatar}
                      alt="Avatar"
                      className="avatar-preview"
                    />
                    <div className="upload-icon">
                      <i className="fas fa-upload"></i> Carica
                    </div>
                  </label>
                </div>
                <div></div>
              </div>
            </div>
          )}
        </form>

        <div className="onboarding-navigation">
          {currentPage > 0 && (
            <button
              className="prev-button"
              onClick={prevPage}
            >
              Indietro
            </button>
          )}
          {currentPage < 2 ? (
            <button
              className="next-button"
              onClick={nextPage}
              disabled={currentPage === 0 && !formData.name}
            >
              Avanti
            </button>
          ) : (
            <button
              className="finish-button"
              onClick={handleFinish}
            >
              Finito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OnboardingModal;
