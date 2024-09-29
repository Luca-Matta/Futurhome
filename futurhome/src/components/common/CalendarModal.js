import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/CalendarModal.css';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function CalendarModal({ isOpen, onClose, profile }) {
  const [value, onChange] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());

  const handleDayClick = (value) => {
    onChange(value);
    setSelectedDay(value);
  };

  const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  const [activeTimeSlot, setActiveTimeSlot] = useState(null);
  const [isTimeSlotSelected, setIsTimeSlotSelected] = useState(false);
  const [isTimeSlotConfirmed, setIsTimeSlotConfirmed] = useState(false);

  const handleTimeSlotClick = (timeSlot) => {
    setActiveTimeSlot(timeSlot);
    setIsTimeSlotSelected(true);
  };

  const handleCancel = () => {
    setActiveTimeSlot(null);
    setIsTimeSlotSelected(false);
  };

  const handleConfirm = () => {
    setIsTimeSlotConfirmed(true);
  };

  const handleBack = () => {
    setIsTimeSlotConfirmed(false);
  };



  return (
    <>
      {isOpen && (
        <div id="calendarModal" className="calendar-modal">
          <div className="calendar-modal-content">
            <div className="calendar-container">
              <span className="close-calendar" onClick={onClose}>
                &times;
              </span>
              <div className="calendar-profile-section">
                <div className="calendar-profile-header">
                  <img className={profile.imageClass} src={profile.image} alt={profile.name} />              
                  <h4>{profile.name}</h4>
                </div>
                <h3 className='calendar-profile-description'>{profile.description}</h3>
              </div>
              <div className="calendar-section">
                <Calendar
                  formatShortWeekday={(locale, date) => format(date, 'EEE', { locale: it })}
                  formatMonthYear={(locale, date) => capitalizeFirstLetter(format(date, 'MMMM yyyy', { locale: it }))}
                  onChange={handleDayClick}
                  value={value}
                />
              </div>
              <div className="selected-day-section">
                <h5>{selectedDay.toLocaleDateString()}</h5>
                {!isTimeSlotSelected ? (
                  timeSlots.map((timeSlot, index) => (
                    <div 
                      key={index} 
                      className={`time-slot ${timeSlot === activeTimeSlot ? 'time-slot-active' : ''}`}
                      onClick={() => handleTimeSlotClick(timeSlot)}
                    >
                      {timeSlot}
                    </div>
                  ))
                ) : !isTimeSlotConfirmed ? (
                  <>
                    <div className="time-slot time-slot-active">{activeTimeSlot}</div>
                    <div className='time-slots-buttons'>
                      <button onClick={handleCancel} className='cancel-button'>Annulla</button>
                      <button onClick={handleConfirm} className='confirm-button'>Conferma</button>
                    </div>
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Nome" className='calendar-input' />
                    <input type="text" placeholder="Cellulare" className='calendar-input' />
                    <input type="text" placeholder="Email" className='calendar-input' />
                    <div className='time-slots-buttons'>
                      <button onClick={handleBack} className='cancel-button'>Indietro</button>
                      <button className='confirm-button'>Conferma</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CalendarModal;