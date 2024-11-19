// src/components/molecules/LoginForm.jsx
import React, { useState } from 'react';
import OptionMenu from '../atoms/OptionMenu';
import { logout } from '../../services/auth'; // Import the logout function
import logo from '../../assets/img/identity/logowhite.png'; // Import the image

const SideBar = ({children}) => {
 
  const handleLogout = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
        // Call the logout function
        await logout();

        // Optionally redirect to the login page or show a success message
        window.location.href = '/login'; // Redirect to the login page
    } catch (error) {
        console.error('Error during logout:', error);
        // You can show an error message to the user if needed
        alert('Error while logging out. Please try again.');
    }
};

  return (
    <div className='sidebar'>
     
      <div>

        <div className='mb-3'>
          <img src={logo} alt="" />
        </div>

        <OptionMenu icon="fa-solid fa-chart-pie" link="/dashboard" text="Dashboard" />
        <OptionMenu icon="fa-solid fa-user-group" link="/users" text="Usuarios" />
        <OptionMenu icon="fa-solid fa-mug-saucer" link="/product" text="Productos" />
        <OptionMenu icon="fa-solid fa-bell-concierge" link="/order" text="Pedidos" />
        <OptionMenu icon="fa-solid fa-money-bill-trend-up" link="/sales" text="Ventas" />
        <OptionMenu icon="fa-solid fa-boxes-stacked" link="/inventories" text="Inventarios" />
      </div>

      <div>
                {/* Form for logout */}
                <form onSubmit={handleLogout} className='px-4'>
                    <button type="submit"><i class="fa-solid fa-right-from-bracket mr-4"></i>   Cerrar sesión</button>
                </form>
            </div>
      

      {/* {children} */}
    </div>
  );
};

export default SideBar;
