// src/components/atoms/Button.jsx
import React from 'react';

const ButtonTable = ({ onClick,  children, type = 'button' , classStyle}) => {
  return (

    <>
  
    
        <button type={type} onClick={onClick} className={classStyle}>
          {children}
        </button>
    </>
  );
};

export default ButtonTable;
