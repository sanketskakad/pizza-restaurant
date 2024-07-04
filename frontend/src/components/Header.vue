<template>
  <nav
    class="bg-white border-gray-200 dark:bg-gray-900 w-full"
    @click="closeProfile"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <div class="text-orange-500 font-semibold text-2xl">
          <RouterLink to="/">Pizza Shop</RouterLink>
        </div>
      </RouterLink>
      <div
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          @click="toggleProfileState"
          v-if="useUser.users"
        >
          <span class="sr-only">Open user menu</span>
          <img
            v-if="useUser.users?.imageUrl"
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            :src="useUser.users?.imageUrl"
            alt="SK"
          />
          <div
            v-else
            class="inline-block h-8 w-8 text-xl rounded-full border-orange-800 border-2 ring-2 ring-white bg-white text-orange-900"
          >
            {{ useUser.users?.email?.slice(0, 2).toUpperCase() || 'P' }}
          </div>
        </button>
        <RouterLink to="/login" v-else>Login</RouterLink>

        <!-- Dropdown menu -->
        <div
          class="z-50 absolute top-10 -translate-x-1/2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          v-if="profileState"
          ref="target"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">{{
              useUser.users?.name
            }}</span>
            <span
              class="block text-sm text-gray-500 truncate dark:text-gray-400"
              >{{ useUser.users?.email }}</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <RouterLink
                :to="`/profile/${useUser.users?.uid}`"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Profile</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/order-list"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Orders</RouterLink
              >
            </li>
            <li v-if="useUser.users?.admin">
              <RouterLink
                to="/admin/menu-list"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Menu Items</RouterLink
              >
            </li>
            <li v-if="useUser.users?.admin">
              <RouterLink
                to="/admin/users"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >Users
              </RouterLink>
            </li>
            <li v-if="useUser.users">
              <div
                @click="handleUserState"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Logout
              </div>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-user"
          aria-expanded="false"
          @click="toggleState"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="`${menuState ? 'hidden' : ''}`"
        id="navbar-user"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 6uijtext-gray-900 rounded md:bg-transparent md:p-0 md:dark:text-orange-500"
              aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/menu-list"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Menu</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/cart"
              class="block relative py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              ><CartIcon />
              <div
                v-if="useUser?.users?.cart"
                class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
              >
                {{ useUser?.users?.cart?.items.length }}
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import CartIcon from '@/components/icons/CartIcon.vue';
import BarIcon from '@/components/icons/BarIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { onClickOutside } from '@vueuse/core';

import { ref } from 'vue';
const menuState = ref(true);
const profileState = ref(false);
import { useUsers } from '@/store/UserStore';
import { useRouter } from 'vue-router';

const target = ref(null);
const router = useRouter();
const useUser = useUsers();
const toggleState = () => {
  menuState.value = !menuState.value;
};

const closeProfile = () => {
  if (profileState.value) {
    console.log('here');
    profileState.value = false;
  }
};

onClickOutside(target, (_) => {
  profileState.value = false;
});

const toggleProfileState = () => {
  setTimeout(() => (profileState.value = !profileState.value));
};
const handleUserState = () => {
  menuState.value = true;
  profileState.value = false;
  if (useUser.users) {
    useUser.logout();
  } else {
    router.push('/login');
  }
};
</script>

<style scoped></style>
