// src/components/atoms/Button.jsx
import React from 'react';

const Button = ({ onClick, children, type = 'button' }) => {
  return (

    <>
    <div className='flex items-center justify-between'>
        <div className='flex '>
            <input type="checkbox" name="" id="" />
            <p className='text-primary-2'>Recuerdame</p>
        </div>
    

        <label htmlFor="" className='text-tertiary-1'> ¿ Olvidaste tu constraseña ?</label>
    
    </div>
    
        <button type={type} onClick={onClick} className="btn-tertiary-1">
          {children}
        </button>
    </>
  );
};

export default Button;
