import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { UserInterface } from '@/interfaces';
import axios from '@/utility/intercepter';

export const useAdminMethods = defineStore('Admin', () => {
  const users = ref<UserInterface[] | null>(null);

  axios
    .get('/api/admin/users/')
    .then((resp) => {
      users.value = resp.data;
      console.log(resp.data);
    })
    .catch(console.log);

  return { users };
});
