import axios from 'axios';
import { auth } from '../config/firebase';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? 'https://telugu-music-player-backend.onrender.com'
    : 'http://localhost:3000';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});

// Add auth token to requests
api.interceptors.request.use(async (config) => {
    if (auth.currentUser) {
        const token = await auth.currentUser.getIdToken();
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authService = {
    login: (credentials) => api.post('/api/auth/login', credentials),
    register: (userData) => api.post('/api/auth/register', userData),
    logout: () => api.post('/api/auth/logout')
};

export const songService = {
    getAllSongs: () => api.get('/api/songs'),
    uploadSong: (formData) => api.post('/api/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }),
    testConnection: () => api.get('/api/test')
};

export default api; 