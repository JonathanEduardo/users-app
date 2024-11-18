import React from 'react';

const Switch = ({ isChecked, onToggle }) => (
    <label className="switch">
        <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={onToggle} 
        />
        <span className="slider round"></span>
    </label>
);

export default Switch;
