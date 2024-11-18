// src/components/organisms/Login.jsx
import React, { useState } from 'react';
import SideBar from '../organisms/Sidebar';
import Dashboard from '../templates/dashboard';
import UsersList from '../organisms/UsesList';



const Users = () => {
 

  return (
    <>
   
   <Dashboard/>
   <div className='contain-main'>
    <UsersList/>
   </div>
 

    </>
  );
};

export default Users;
