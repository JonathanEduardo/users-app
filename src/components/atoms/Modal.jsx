// src/components/atoms/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="close-button">X</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
