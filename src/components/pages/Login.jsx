// src/components/organisms/Login.jsx
import React, { useState, useEffect } from 'react';
import LoginOrg from '../organisms/Login'; // Import the Login component
import fondo from '../../assets/img/identity/coffe.jpg'; // Import the background image
import { useNavigate } from 'react-router-dom'; // Import the navigation hook

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a logged-in user in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Redirect to the Dashboard or main page if the user is already logged in
      navigate('/users'); // Change "/users" to your desired route
    }
  }, [navigate]);

  return (
    <>
      {/* Center the login form with a full-screen flexbox container */}
      <div className="flex h-screen w-full items-center login">
        <LoginOrg /> {/* Render the login form */}
      </div>
    </>
  );
};

export default Login;
