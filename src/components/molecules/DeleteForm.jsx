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
    <div className='flex flex-row gap-5 '>
    <form onSubmit={handleSubmit} className="w-1/2 ">
      {errorMessage  && <Alert message={errorMessage } type="errorMessage " />}
     
      <Button type='submit' classStyle="bg-primary-color px-4 py-2 border-md text-white float w-full" > Eliminar </Button>
      
    
    </form>
      <Button type='buton' onClick={onClose} classStyle="bg-danger-color px-4 py-2 border-md text-white w-1/2" > Cancelar </Button>
 
    </div>
 </>
  );
};

export default DeleteForm;
