import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Order } from '@/interfaces';
import axios from '@/utility/intercepter';

export const useOrders = defineStore('Order', () => {
  const orders = ref<Order[] | null>(null);

  axios
    .get('/api/orders')
    .then((resp) => (orders.value = resp.data))
    .catch(console.log);

  const addOrder = async (order: Order) => {
    try {
      const resp = await axios.post('/api/orders', order);
      orders.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const editOrder = async (order: Order) => {
    try {
      const resp = await axios.put('/api/orders', order);
      orders.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteOrder = async (order: Order) => {
    try {
      const resp = await axios.delete(`/api/orders/${order._id}`);
      orders.value = resp.data;
    } catch (e) {
      console.log(e);
    }
  };

  return { orders, addOrder, editOrder, deleteOrder };
});
