import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1' });
const guestId = localStorage.getItem('mystery_guest_id') || crypto.randomUUID();
localStorage.setItem('mystery_guest_id', guestId);
api.interceptors.request.use((config) => { const token = localStorage.getItem('mystery_token'); if (token) config.headers.Authorization = `Bearer ${token}`; else config.headers['X-Guest-Id'] = guestId; return config; });
export default api;
