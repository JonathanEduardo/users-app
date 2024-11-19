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
    {/* <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5"> */}
      <UsersList/>
    {/* </div> */}

   </div>
 

    </>
  );
};

export default Users;
