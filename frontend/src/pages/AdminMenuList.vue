<template>
  <div class="w-1/2 m-auto mt-10">
    <Button name="Add New Item" variation="Secondary" @click="addMenu" />
  </div>
  <div class="flex mt-8 flex-wrap w-full justify-evenly">
    <div
      class="basis-full md:basis-4/12 mt-5"
      v-for="product in menuStore.products"
    >
      <MenuCard
        :product="product"
        buttonText="Update"
        @buttonClicked="() => updateItem(product)"
      ></MenuCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue';
import { useMenus } from '@/store/MenuStore';
import { useRouter } from 'vue-router';
import MenuCard from '@/components/MenuCard.vue';
import { ProductInterface } from '@/interfaces';

const router = useRouter();
const menuStore = useMenus();
const addMenu = () => {
  router.push('/menu-item');
};

const updateItem = (product: ProductInterface) => {
  router.push(`/menu-item/${product._id}`);
};
</script>
<style scoped></style>
