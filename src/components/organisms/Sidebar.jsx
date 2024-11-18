// src/components/molecules/LoginForm.jsx
import React, { useState } from 'react';
import OptionMenu from '../atoms/OptionMenu';


const SideBar = () => {
 

  return (
    <div className='sidebar'>
     
      <div>

        <div>
          imagen

        </div>

        <OptionMenu icon="fa-solid fa-chart-pie" link="/dashboard" text="Dashboard" />
        <OptionMenu icon="fa-solid fa-user-group" link="/users" text="Usuarios" />
        <OptionMenu icon="fa-solid fa-mug-saucer" link="/product" text="Productos" />
        <OptionMenu icon="fa-solid fa-bell-concierge" link="/order" text="Pedidos" />
        <OptionMenu icon="fa-solid fa-money-bill-trend-up" link="/sales" text="Ventas" />
        <OptionMenu icon="fa-solid fa-boxes-stacked" link="/inventories" text="Inventarios" />
      </div>

      <div>
        <form action="">
          Cerrar sesion
        </form>
      </div>
      
    </div>
  );
};

export default SideBar;
