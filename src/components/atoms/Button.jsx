// src/components/atoms/Button.jsx
import React from 'react';

const Button = ({ onClick, children, type = 'button', classStyle = 'btn-tertiary-1' }) => {
  return (

    <>
    
    
        <button type={type} onClick={onClick} className={classStyle}>
          {children}
        </button>
    </>
  );
};

export default Button;
