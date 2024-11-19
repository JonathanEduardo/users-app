// src/components/atoms/Button.jsx
import React from 'react';

const Button = ({ onClick, children, type = 'button' }) => {
  return (

    <>
    
    
        <button type={type} onClick={onClick} className="btn-tertiary-1">
          {children}
        </button>
    </>
  );
};

export default Button;
