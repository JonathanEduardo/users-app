// src/components/atoms/Button.jsx
import React from 'react';

const OptionMenu = ({icon, link, text }) => {
  return (

    <>
   
        <a href={link} className='option-menu'>
              
              <i className={icon} ></i>
          
                  <span> {text} </span>
        </a>
      
    </>
  );
};

export default OptionMenu;
