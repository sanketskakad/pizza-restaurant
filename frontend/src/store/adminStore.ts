import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { Users } from '@/interfaces';
import axios from 'axios';

export const useAdminMethods = defineStore('Admin', () => {
  const users = ref<Users[] | null>(null);

  axios
    .get('/api/admin')
    .then((resp) => {
      users.value = resp.data;
      console.log(resp.data);
    })
    .catch(console.log);

  return { users };
});
