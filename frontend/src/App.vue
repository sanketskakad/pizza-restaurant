<template>
  <Header></Header>
  <div class="w-full min-h-screen md:w-11/12 p-1 m-auto mb-40">
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback> loading </template>
    </Suspense>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const auth = initializeApp(firebaseConfig);
</script>

<style scoped></style>
