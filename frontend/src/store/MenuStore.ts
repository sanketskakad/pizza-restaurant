import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { ProductInterface } from '@/interfaces';
import axios from '@/utility/intercepter';

export const useMenus = defineStore('Menu', () => {
  const products = ref<ProductInterface[] | null>(null);

  axios
    .get('/api/users/products/')
    .then((resp) => (products.value = resp.data))
    .catch(console.log);

  const categories = computed(() => {
    if (products.value) {
      return products.value.map((el) => el.category);
    }
    return [];
  });

  const addMenu = async (menu: ProductInterface) => {
    try {
      const resp = await axios.post('/api/admin/products/', menu);
      products.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getMenuById = async (id: string) => {
    try {
      const resp = await axios.get(`/api/admin/products/${id}`);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
    return null;
  };

  const editMenu = async (menu: ProductInterface) => {
    try {
      const resp = await axios.put('/api/admin/products/', menu);
      products.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteMenu = async (id: string) => {
    try {
      const resp = await axios.delete(`/api/admin/products/${id}`);
      products.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { products, categories, addMenu, editMenu, deleteMenu, getMenuById };
});
