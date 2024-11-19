// src/components/molecules/LoginForm.jsx
import React, { useState } from 'react';


const Navbar = ({title = 'titulo', sectionName = 'Sección'}) => {
 
  const [user, setUser] = useState(null);
  const [name, setUserName] = useState(null);

    // Función que se ejecuta cuando el login es exitoso
    const handleLoginSuccess = (userData) => {
        setUser(userData[0]); // Guarda la información del usuario en el estado
        // Aquí puedes almacenar el usuario en localStorage si quieres mantener la sesión activa
        localStorage.setItem('user', JSON.stringify(userData[0]));
    };

    // Cargar el usuario desde localStorage si existe
    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const parsedUserData = JSON.parse(storedUser);  
        const name = parsedUserData.data.name; 
        setUserName(name);

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


  return (
    <div className='navbar '>

    <div className='flex flex-row justify-between  w-8/12  lg:w-10/12 '>
      <div className='flex flex-col text-primary-color'>
          <div className='font-normal text-xs'>{sectionName}</div>
          <div className='font-bold'>{title}</div>
        </div>

        <div className=''>
          <i class="fa-solid fa-bell border-r-2 border-primary-color-lighter py-2 mt-1 px-2"></i>
        </div>
    </div>

      <div className=' w-4/12  lg:w-2/12 flex flex-row justify-center  gap-4 px-'>
        <div className='rounded-full border w-9 text-center'>
          <i class="text-2xl fa-solid fa-user"></i>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm font-bold'>{name}</span>
          <span className='text-xs'>{name}</span>
        </div>
      </div>
      
                
    </div>
  );
};

export default Navbar;
