<template>
  <Header></Header>
  <div class="w-full md:w-9/12 p-1 m-auto">
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback> loading </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<style scoped></style>
