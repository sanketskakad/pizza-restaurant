<template>
  <footer class="bg-white rounded-lg dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="text-orange-500 font-semibold text-2xl">
          <RouterLink to="/">Pizza Shop</RouterLink>
        </div>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <RouterLink to="/about" class="hover:underline me-4 md:me-6"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink to="#" class="hover:underline me-4 md:me-6"
              >Privacy Policy</RouterLink
            >
          </li>
          <li>
            <RouterLink to="#" class="hover:underline me-4 md:me-6"
              >Licensing</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" class="hover:underline"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2024
        <a href="https://flowbite.com/" class="hover:underline">Sanket Kakad</a
        >. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
