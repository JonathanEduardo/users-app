// src/components/molecules/LoginForm.jsx
import React, { useState, useEffect  } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Alert from '../atoms/Alert';

const DeleteForm = ({ onSubmit, onClose, errorMessage, currentUser }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, name, password });
  };

  return (
 <>
    <form onSubmit={handleSubmit} className="">
      {errorMessage  && <Alert message={errorMessage } type="errorMessage " />}
     
      <Button type='submit'> Eliminar </Button>
      
    

    
      
    </form>
      <Button type='buton' onClick={onClose}> Cancelar </Button>
 </>
  );
};

export default DeleteForm;
