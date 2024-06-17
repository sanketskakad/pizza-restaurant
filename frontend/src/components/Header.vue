<template>
  <div class="text-orange-600 flex justify-between mt-4 m-auto">
    <div class="ml-1 md:ml-4">
      <div class="text-orange-500 font-semibold text-2xl">
        <RouterLink to="/">Pizza Shop</RouterLink>
      </div>
    </div>
    <div class="hidden md:flex">
      <div class="pl-4 pr-4 text-primary font-semibold text-xl align-middle">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="pl-4 pr-4 text-primary font-semibold text-xl">
        <RouterLink to="/menu-list">Menu</RouterLink>
      </div>
      <div class="pl-4 pr-4 text-primary font-semibold text-xl">
        <RouterLink to="/#about-us">About</RouterLink>
      </div>
      <div class="pl-4 pr-4 text-primary font-semibold text-xl">
        <RouterLink to="/#contact">Contact</RouterLink>
      </div>
    </div>
    <div class="hidden md:flex pl-4 pr-4 text-primary font-semibold text-xl">
      <RouterLink to="/profile">Hello Sanket</RouterLink>
    </div>
    <div class="hidden md:flex pl-4 pr-4 text-primary font-semibold text-xl">
      Logout
    </div>

    <div class="mr-10 hidden md:flex">
      <RouterLink to="/cart">
        <CartIcon />
      </RouterLink>
    </div>
    <div class="md:hidden flex mr-2" @click="openMenu">
      <BarIcon v-if="!menuState" /><CloseIcon class="z-20" v-if="menuState" />
    </div>
  </div>
  <div
    v-if="menuState"
    class="w-screen h-screen z-10 fixed top-0 left-0 md:hidden bg-orange-100"
  >
    <div
      class="flex flex-col text-orange-700 items-center justify-evenly h-full"
    >
      <div class="pl-4 pr-4 font-semibold text-xl align-middle">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="/menu-list">Menu</RouterLink>
      </div>
      <div class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="/#about-us">About</RouterLink>
      </div>
      <div class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="/#contact">Contact</RouterLink>
      </div>
      <div class="hidden md:flex pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="/profile">Hello Sanket</RouterLink>
      </div>
      <div class="mr-10 hidden md:flex">
        <RouterLink to="/cart"> Cart </RouterLink>
      </div>
      <div class="hidden md:flex pl-4 pr-4 font-semibold text-xl">Logout</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CartIcon from '@/components/icons/CartIcon.vue';
import BarIcon from '@/components/icons/BarIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { ref } from 'vue';

const menuState = ref(false);

const openMenu = () => {
  menuState.value = !menuState.value;
};
</script>
<style></style>
