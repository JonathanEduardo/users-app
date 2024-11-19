// authService.js

import axios from 'axios';

// Configuración base
const API_URL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

// Función para iniciar sesión
export const auth = async (email, password) => {

 
    try {
        // Obtener el token CSRF
        await axios.get(`${API_URL}/sanctum/csrf-cookie`);
        
        // Realizar la solicitud de inicio de sesión
        const response = await api.post('/login', {
            email,
            password,
        });

        // Guardar la información del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(response.data));

        

        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error.response ? error.response.data : error);
        throw error;
    }
};


// Función para crear un nuevo usuario
export const createUser = async (userData) => {
    try {

        //console.log(userData);    
        const response = await axios.post(`${API_URL}/api/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};



export const getUsers = () => api.get('/users');

// // Función para obtener la información del usuario almacenado
// export const getUser = () => {
//     return JSON.parse(localStorage.getItem('user'));
// };

// Función para cerrar sesión
export const logout = async () => {
    try {
        await api.post('/logout');
        localStorage.removeItem('user');
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
};
