// src/components/molecules/LoginForm.jsx
import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Alert from '../atoms/Alert';
import Terms from '../atoms/Terms';

const LoginForm = ({ onSubmit, errorMessage  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
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
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Terms/>
      <Button type='submit'>Iniciar sesion</Button>
      
    </form>
  );
};

export default LoginForm;
