<template>
  <div class="flex flex-col m-auto w-8/12 mt-10">
    <div
      class="bg-orange-100 px-8 py-4 flex rounded-md shadow-md justify-between between mt-5 items-center"
      v-for="user in useAdmin.users"
    >
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <div>
        <Button
          type="Primary"
          name="Update"
          @click="() => updateUser(user._id)"
        ></Button>
      </div>
    </div>
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
