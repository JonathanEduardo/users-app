// src/components/organisms/Login.jsx
import React, { useState } from 'react';
import LoginForm from '../molecules/LoginForm';
import axios from 'axios';
import logo from '../../assets/img/identity/logo.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import { auth } from '../../services/auth';

const Login = () => {
 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      await auth(email, password);

      navigate('/users'); // Redirige a la página de usuarios
    } catch (error) {
      
      setError('Credenciales incorrectas, por favor intenta nuevamente.');
    }
  };

  return (
    <>
    <div className="card-login">
        <img src={logo} alt=""className='w-28 mx-auto mb-6' />
        <h1 className='title-primary-1'>Bienvenido a BrewHub</h1>
        <p className='text-primary-light-1'>Ingresa tu correo y contraseña para iniciar sesión</p>
        {error}


        <LoginForm onSubmit={handleLogin} error={error} />
    </div>

    </>
  );
};

export default Login;
