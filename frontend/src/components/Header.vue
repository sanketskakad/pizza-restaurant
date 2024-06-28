<template>
  <div class="text-orange-600 flex justify-between mt-4 m-auto">
    <div class="ml-4 md:ml-16">
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
      <RouterLink to="/profile" v-if="useUser.users">Profile</RouterLink>
    </div>
    <div
      class="hidden md:flex pl-4 pr-4 pt-2 pb-2 text-primary font-semibold text-xl bg-orange-700 text-orange-100 rounded-lg"
      @click="handleUserState"
    >
      <span v-if="useUser.users">Logout</span>
      <span v-if="!useUser.users">Login</span>
    </div>

    <div class="relative mr-10 md:mr-28 hidden md:flex">
      <RouterLink to="/cart">
        <CartIcon />
        <div
          v-if="useUser?.users?.cart"
          class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
        >
          {{ useUser?.users?.cart.length }}
        </div>
      </RouterLink>
    </div>
    <div
      class="md:hidden flex mr-2 border-2 border-orange-500 rounded-md"
      @click="openMenu"
    >
      <BarIcon v-if="!menuState" /><CloseIcon class="z-20" v-if="menuState" />
    </div>
  </div>
  <div
    v-if="menuState"
    @click="openMenu"
    class="w-screen h-screen z-10 fixed top-0 left-0 md:hidden bg-orange-100"
  >
    <div
      class="flex flex-col text-orange-700 items-center justify-evenly h-full"
    >
      <div class="pl-4 pr-4 font-semibold text-xl align-middle">
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="menu-list">Menu</RouterLink>
      </div>
      <div class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="/#about-us">About</RouterLink>
      </div>
      <div class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="/#contact">Contact</RouterLink>
      </div>
      <div v-if="useUser.users" class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink :to="`/profile/${useUser?.users?._id}`">Profile</RouterLink>
      </div>
      <div v-if="useUser.users" class="pl-4 pr-4 font-semibold text-xl">
        <RouterLink to="/cart"> Cart </RouterLink>
      </div>
      <div
        class="p-4 w-4/5 text-center font-semibold text-xl bg-orange-700 text-orange-100 rounded-lg"
        @click="handleUserState"
      >
        <span v-if="useUser.users">Logout</span>
        <span v-if="!useUser.users">Login</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CartIcon from '@/components/icons/CartIcon.vue';
import BarIcon from '@/components/icons/BarIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { ref, watch } from 'vue';
import { useUsers } from '@/store/UserStore';
import { useRouter } from 'vue-router';

const menuState = ref(false);
const router = useRouter();
const useUser = useUsers();

watch(
  useUser,
  () => {
    console.log('useUser', useUser.users);
  },
  { deep: true }
);

const openMenu = () => {
  menuState.value = !menuState.value;
};

const handleUserState = () => {
  if (useUser.users) {
    useUser.logout();
  } else {
    router.push('/login');
  }
};
</script>
<style></style>
