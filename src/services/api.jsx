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

 











export default api;
