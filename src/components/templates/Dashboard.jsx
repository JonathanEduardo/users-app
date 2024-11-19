// src/components/molecules/LoginForm.jsx
import React, { useState } from 'react';
import Navbar from '../organisms/Navbar';
import SideBar from '../organisms/Sidebar';


const Dashboard = ({children, title = 'Seccion', sectionName = 'Sección'}) => {
 

  return (
   <>
   
    {/* <Navbar  title={'Usuarios'} sectionName={'Catalogo usuarios'} /> */}


    <div className='flex flex-row '>
      <div className='container-sidebar w-2/12 '>
      <SideBar />
      </div>

      <div className='contain-main  w-10/12'>
        <Navbar  title={'Usuarios'} sectionName={'Catalogo usuarios'} />
        {children}
      </div>

  
    </div>

    </>
  );
};

export default Dashboard;
