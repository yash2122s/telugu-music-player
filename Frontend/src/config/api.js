const API_BASE_URL = process.env.NODE_ENV === 'production' 
    ? 'https://telugu-music-player-backend.onrender.com'
    : 'http://localhost:3000';

export const endpoints = {
    songs: `${API_BASE_URL}/api/songs`,
    upload: `${API_BASE_URL}/api/upload`,
    test: `${API_BASE_URL}/api/test`
};

export default API_BASE_URL; 