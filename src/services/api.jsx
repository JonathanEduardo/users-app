import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true, // Necesario para enviar cookies
});




export const getCSRFToken = async () => {
    await axios.get(`${API_URL}/sanctum/csrf-cookie`, { withCredentials: true });
};
  
export const login = async (email, password) => {

 
    await getCSRFToken(); // Obtiene el token CSRF
    const response = await api.post('/login', { email, password });
    return response.data;
};

 



//Función para crear un nuevo usuario
export const createUser = async (userData) => {
    try {

        console.log(userData);
        alert(API_URL);
        const response = await axios.post(`${API_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};





// export const getUsers = () => api.get('/users');
export const toggleUserStatus = (userId, status) => 
     api.put(`/users/${userId}/status`, { active: status });

// export const logout = () => api.post('/logout');

export default api;
