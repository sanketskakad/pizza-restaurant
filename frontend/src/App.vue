<template>
  <Header></Header>
  <div class="w-full md:w-9/12 p-1 m-auto">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style scoped></style>
