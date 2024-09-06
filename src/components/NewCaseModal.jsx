// NewCaseModal.jsx
import React from 'react';
// import './NewCaseModal.css'; // CSS for modal

function NewCaseModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle new case form submission
    onClose(); // Close the modal after submitting
  };

  if (!isOpen) return null; // Don't render if modal isn't open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>New Case</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Client Name:
            <input type="text" placeholder="Client Name" required />
          </label>
          <label>
            Lawyer Name:
            <input type="text" placeholder="Lawyer Name" required />
          </label>
          <label>
            Client Id:
            <input type="text" placeholder="Client Id" required />
          </label>
          <label>
            Case Details:
            <textarea placeholder="Case Details" required />
          </label>
          <button className="submit-button" type="submit">Submit</button>
          <button className="close-button" type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewCaseModal;
