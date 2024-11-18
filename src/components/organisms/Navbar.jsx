// src/components/molecules/LoginForm.jsx
import React, { useState } from 'react';


const Navbar = () => {
 
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
      {name }
                
    </div>
  );
};

export default Navbar;
