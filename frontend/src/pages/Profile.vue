<template>
  <div class="flex content-evenly justify-evenly mt-8 text-orange-100">
    <div
      class="pl-4 pr-4 pt-2 pb-2 font-semibold text-xl bg-orange-500 rounded-md"
    >
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
    </div>
    <div
      class="pl-4 pr-4 pt-2 pb-2 font-semibold text-xl bg-orange-500 rounded-md"
    >
      <RouterLink :to="{ name: 'admin-menu-list' }">Menu Items</RouterLink>
    </div>
    <div
      class="pl-4 pr-4 pt-2 pb-2 font-semibold text-xl bg-orange-500 rounded-md"
    >
      <RouterLink :to="{ name: 'users' }">Users</RouterLink>
    </div>
    <div
      class="pl-4 pr-4 pt-2 pb-2 font-semibold text-xl bg-orange-500 rounded-md"
    >
      <RouterLink :to="{ name: 'orders-list' }">Orders</RouterLink>
    </div>
  </div>
  <RouterView />
</template>
<script setup lang="ts"></script>
<style scoped></style>
