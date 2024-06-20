import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Users } from '@/interfaces';
import axios from 'axios';

export const useUsers = defineStore('Users', () => {
  const users = ref<Users[] | null>(null);

  axios
    .get('/api/userss')
    .then((resp) => (users.value = resp.data))
    .catch(console.log);

  const addUsers = async (user: Users) => {
    try {
      const resp = await axios.post('/api/userss', user);
      users.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const editUsers = async (user: Users) => {
    try {
      const resp = await axios.put('/api/userss', user);
      users.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUsers = async (user: Users) => {
    try {
      const resp = await axios.delete(`/api/userss/${user._id}`);
      users.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { users, addUsers, editUsers, deleteUsers };
});
