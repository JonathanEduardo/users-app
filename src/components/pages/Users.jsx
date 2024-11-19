// src/components/organisms/Login.jsx
import React, { useState } from 'react';
import SideBar from '../organisms/Sidebar'; // Import the Sidebar component
import Dashboard from '../templates/dashboard'; // Import the Dashboard template
import UsersList from '../organisms/UsesList'; // Import the UsersList component

const Users = () => {
 
  return (
    <>
      {/* Wrapping the Users page inside the Dashboard template */}
      <Dashboard title={'Usuarios'} sectionName={'Catalogo usuarios'}>
        {/* Display the list of users */}
        <UsersList />
      </Dashboard>
    </>
  );
};

export default Users;