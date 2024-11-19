// authService.js

import axios from 'axios';

// Base configuration
const API_URL = 'http://localhost:8000'; // Base URL for the API
axios.defaults.withCredentials = true; // Ensures cookies are sent with requests

// Create an Axios instance with custom settings
const api = axios.create({
    baseURL: `${API_URL}/api`, // API base path
    headers: {
        'Accept': 'application/json', // Accept JSON responses
        'X-Requested-With': 'XMLHttpRequest', // Identifies the request as being made via XMLHttpRequest
    },
    withCredentials: true, // Include credentials such as cookies
});

// Function to log in a user
export const auth = async (email, password) => {
    try {
        // Fetch the CSRF token to set up cookies for secure communication
        await axios.get(`${API_URL}/sanctum/csrf-cookie`);
        
        // Perform the login request with user credentials
        const response = await api.post('/login', {
            email,
            password,
        });

        // Save user information to localStorage for session management
        localStorage.setItem('user', JSON.stringify(response.data));

        return response.data; // Return the server's response
    } catch (error) {
        // Log and propagate any error that occurs during login
        console.error('Error during login:', error.response ? error.response.data : error);
        throw error;
    }
};

// Function to create a new user
export const createUser = async (userData) => {
    try {
        // Send a POST request with the user's data
        const response = await axios.post(`${API_URL}/api/users`, userData);
        return response.data; // Return the server's response
    } catch (error) {
        // Log and propagate any error that occurs during user creation
        console.error('Error during user creation:', error);
        throw error;
    }
};

// Function to update an existing user
export const updateUser = async (userId, userData) => {

    console.log(userData);
    try {
        // Send a PUT request with the user's updated data
        const response = await axios.put(`${API_URL}/api/users/${userId}`, userData);
        return response.data; // Return the server's response
    } catch (error) {
        // Log and propagate any error that occurs during user update
        console.error('Error during user update:', error);
        throw error;
    }
};

// Function to delete a user
export const deleteUser = async (userId) => {
    try {
        // Send a DELETE request to remove the user
        const response = await axios.delete(`${API_URL}/api/users/${userId}`);
        return response.data; // Return the server's response
    } catch (error) {
        // Log and propagate any error that occurs during user deletion
        console.error('Error during user deletion:', error);
        throw error;
    }
};

// Function to fetch all users
export const getUsers = () => api.get('/users');

// Function to log out the user
export const logout = async () => {
    try {
        // Send a POST request to log out
        await api.post('/logout');
    } catch (error) {
        // Log any error that occurs during logout
        console.error('Error during logout request:', error);
    } finally {
        // Always remove user information from localStorage, even if there's an error
        localStorage.removeItem('user');
    }

};

