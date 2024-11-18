// src/components/atoms/Input.jsx
import React from 'react';

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
   <>
    <label htmlFor="" className='text-primary-1'>{placeholder}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
   </>
  );
};

export default Input;
