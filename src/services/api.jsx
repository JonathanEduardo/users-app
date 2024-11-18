import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials: true, // Necesario para enviar cookies
});

export const getCSRFToken = async () => {
    await axios.get(`${API_URL}/sanctum/csrf-cookie`, { withCredentials: true });
};
  
export const login = async (email, password) => {

    alert(email);
    await getCSRFToken(); // Obtiene el token CSRF
    const response = await api.post('/login', { email, password });
    return response.data;
};



export const getUser = async (token) => {
    const response = await api.get('/user', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};



export const getUsers = () => api.get('/users');
export const toggleUserStatus = (userId, status) => 
     api.put(`/users/${userId}/status`, { active: status });

// export const logout = () => api.post('/logout');

export default api;
