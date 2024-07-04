import { ref } from 'vue';
import { defineStore } from 'pinia';
import { OrderInterface } from '@/interfaces';
import axios from '@/utility/intercepter';
import { useUsers } from './UserStore';

export const useOrders = defineStore('Order', () => {
  const userStore = useUsers();

  const addOrder = async (order: OrderInterface) => {
    try {
      const resp = await axios.post('/api/users/order', order);
      userStore.users = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const editOrder = async (order: OrderInterface) => {
    try {
      const resp = await axios.put('/api/users/order', order);
      userStore.users = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteOrder = async (order: OrderInterface) => {
    try {
      const resp = await axios.delete(`/api/users/order/${order._id}`);
      userStore.users = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { addOrder, editOrder, deleteOrder };
});
