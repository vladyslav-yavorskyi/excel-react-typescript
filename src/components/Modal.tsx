import React from 'react';

interface IModal {
  onClose: () => void;
  children: React.ReactNode;
}
function Modal({ onClose, children }: IModal) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="modal-overlay fixed inset-0 bg-black opacity-50"
      ></div>
      <div className="modal-container bg-white w-96 rounded-lg shadow-lg p-4 z-20">
        <div className="modal-content">
          <button className="modal-close-btn" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
