// src/components/molecules/LoginForm.jsx
import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Alert from '../atoms/Alert';

const UserForm = ({ onSubmit, errorMessage  }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, name, password });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {errorMessage  && <Alert message={errorMessage } type="errorMessage " />}
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

    <Input
        type="name"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit'>Iniciar sesion</Button>
      
    </form>
  );
};

export default UserForm;
