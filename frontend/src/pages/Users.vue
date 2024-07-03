<template>
  <div class="flex flex-col m-auto w-8/12 mt-10">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Position</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          v-for="user in useAdmin.users"
        >
          <td class="w-4 p-4"></td>
          <th
            scope="row"
            class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <img
              class="w-10 h-10 rounded-full"
              :src="user.imageUrl"
              :alt="user.name"
            />
            <div class="ps-3">
              <div class="text-base font-semibold">{{ user.name }}</div>
              <div class="font-normal text-gray-500">
                {{ user.email }}
              </div>
            </div>
          </th>
          <td class="px-6 py-4">{{ user.phone }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
              Online
            </div>
          </td>
          <td class="px-6 py-4">
            <RouterLink
              :to="`/profile/${user.uid}`"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit user</RouterLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { useAdminMethods } from '@/store/adminStore';
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';

const useAdmin = useAdminMethods();
const router = useRouter();

const updateUser = (id) => {
  router.push(`/profile/${id}`);
};
</script>
<style scoped></style>
