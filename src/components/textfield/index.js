import React from 'react';
import { FormGroup } from './styles';

const Textfield = ({ type, name, value, label, onChange = () => {} }) =>{
  
  const handleInput = () => {

  }

  return (
    <FormGroup>
        <label 
            htmlFor={name}>
            {label}
        </label>
        <input 
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={handleInput}
            autoComplete="off"
        />
        
    </FormGroup>
  );
};

export default Textfield;
