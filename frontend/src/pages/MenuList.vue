<template>
  <div
    class="w-full md:flex-wrap items-stretch m-auto mt-20 flex flex-col md:flex-row content-between"
  >
    <div class="p-4 basis-3/12" v-for="product in menuStore.products">
      <MenuCard
        :product="product"
        :buttonText="`Add to cart $${product?.basePrice}`"
        @buttonClicked="() => updateCart(product._id, 1)"
      ></MenuCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMenus } from '@/store/MenuStore';
import MenuCard from '@/components/MenuCard.vue';
import { useUsers } from '@/store/UserStore';
import { useRouter } from 'vue-router';

const menuStore = useMenus();
const userStore = useUsers();
const router = useRouter();

const updateCart = (id, quantity) => {
  console.log('userStore.users', userStore.users);
  if (!userStore.users) {
    router.push('/login');
  } else {
    userStore.updateCart(id, quantity, 0);
  }
};
</script>
<style scoped></style>
