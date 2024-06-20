<template>
  <div class="w-full m-auto mt-20 flex flex-col md:flex-row content-between">
    <div class="p-4" v-for="product in menuStore.products">
      <MenuCard
        :product="product"
        :buttonText="`Add to cart $${product?.basePrice}`"
      ></MenuCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMenus } from '@/store/MenuStore';
import MenuCard from '@/components/MenuCard.vue';

const menuStore = useMenus();
</script>
<style scoped></style>
