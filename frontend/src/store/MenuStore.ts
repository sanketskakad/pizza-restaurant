import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { Menu } from '@/interfaces';
import axios from 'axios';

export const useMenus = defineStore('Menu', () => {
  const products = ref<Menu[] | null>(null);

  axios
    .get('/api/menus')
    .then((resp) => (products.value = resp.data))
    .catch(console.log);

  const categories = computed(() => {
    if (products.value) {
      return products.value.map((el) => el.category);
    }
    return [];
  });

  const addMenu = async (menu: Menu) => {
    try {
      const resp = await axios.post('/api/menus', menu);
      products.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getMenuById = async (id: string) => {
    try {
      const resp = await axios.get(`/api/menus/${id}`);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  const editMenu = async (menu: Menu) => {
    try {
      const resp = await axios.put('/api/menus', menu);
      products.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteMenu = async (menu: Menu) => {
    try {
      const resp = await axios.delete(`/api/menus/${menu._id}`);
      products.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { products, categories, addMenu, editMenu, deleteMenu, getMenuById };
});
