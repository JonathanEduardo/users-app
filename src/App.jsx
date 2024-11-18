import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Users from './components/pages/users';

function App() {


  return (
    <>
   
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/users" element={<Users/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App