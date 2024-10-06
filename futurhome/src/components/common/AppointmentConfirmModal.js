import React, { useState } from "react";
import "../../styles/AppointmentConfirmModal.css";

function AppointmentConfirmModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="appointment-confirm-modal">
      <div className="appointment-confirm-modal-content">
        <div className="appointment-confirm-modal-icon">✓</div>
        <div className="appointment-confirm-modal-messages">
          <div className="appointment-confirm-modal-message">
            Visita prenotata con successo!
          </div>
          <div>Riceverai una mail di conferma.</div>
        </div>
        <button onClick={onClose}>Prosegui</button>
      </div>
    </div>
  );
}

export default AppointmentConfirmModal;
