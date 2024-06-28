import { useUsers } from '@/store/UserStore';
import axios from 'axios';

const instance = axios.create({});

instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use((response) => {
  const userStore = useUsers();
  if (response.status === 401) {
    userStore.logout();
  }
  return response;
});

export default instance;
