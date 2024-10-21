import React from 'react';
import './Modal.css'; // Create a separate CSS file for styling

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with blur effect */}
      <div className="modal-overlay" onClick={closeModal} />
      
      {/* Modal box */}
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </>
  );
}

export default Modal;
