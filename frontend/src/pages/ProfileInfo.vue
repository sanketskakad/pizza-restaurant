<template>
  <div class="flex mt-20">
    <div class="w-1/4">
      <div class="mb-4">
        <img :src="userProfile.formData.imageUrl" class="w-full" />
      </div>
    </div>
    <div class="w-3/4 ml-10">
      <form @submit="updateProfile">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Full Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            v-model="userProfile.formData.name"
            placeholder="Full Name"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="imageUrl"
          >
            Image url
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="imageUrl"
            type="text"
            v-model="userProfile.formData.imageUrl"
            placeholder="Image url"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            v-model="userProfile.formData.email"
            placeholder="Email"
          />
        </div>
        <div class="mb-4">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Contact Number</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            v-model="userProfile.formData.phone"
            placeholder="Contact Number"
          />
          <!-- <select
            id="category"
            v-model="userProfile.formData.category"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected>Choose a category</option>
            <option v-for="category in userProfileStore.categories" :value="category">
              {{ category }}
            </option>
          </select> -->
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="streetAddress"
          >
            Address
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="streetAddress"
            v-model="userProfile.formData.streetAddress"
            type="text"
            placeholder="Address"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="City">
            City
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="City"
            v-model="userProfile.formData.city"
            type="text"
            placeholder="City"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="postalCode"
          >
            Pin code
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="postalCode"
            v-model="userProfile.formData.postalCode"
            type="text"
            placeholder="Pin code"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Country"
          >
            Country
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Country"
            v-model="userProfile.formData.country"
            type="text"
            placeholder="Country"
          />
        </div>
        <div class="mb-4" v-if="useUser.isAdmin">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="admin">
            isAdmin
          </label>
          <input
            id="admin"
            v-model="userProfile.formData.admin"
            type="checkbox"
          />
        </div>

        <div class="mt-5">
          <button
            class="mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="mt-5" v-if="useUser.users?.admin">
    <!-- <div class="text-3xl text-orange-500">Cart</div>
    <div
      class="mx-auto mt-3"
      v-for="item in userProfile.formData?.cart?.items"
      :key="item._id"
    >
      <CartCard :item="item" />
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ProductInterface, UserInterface } from '@/interfaces';
import CartCard from '@/components/CartCard.vue';
import { useMenus } from '@/store/MenuStore';
import { useRoute, useRouter } from 'vue-router';
import { useUsers } from '@/store/UserStore';

const route = useRoute();
const router = useRouter();
const id = route.params.id as string;
const useUser = useUsers();
let user = null;
if (id) {
  user = await useUser.getUser(id);
}

let formDetails = {
  admin: false,
  cart: { total: 0, tax: 0, finalTotal: 0, items: [] },
  city: '',
  country: '',
  email: '',
  name: '',
  uid: '',
  orders: [],
  phone: '',
  postalCode: '',
  streetAddress: '',
  imageUrl: '',
};
if (id) {
  formDetails = { ...formDetails, ...user };
}

const userProfile = reactive<{ formData: UserInterface }>({
  formData: formDetails,
});

const updateProfile = async (e) => {
  e.preventDefault();
  userProfile.formData = await useUser.editUsers(userProfile.formData);
  router.push('/menu-list');
};
</script>
<style scoped></style>
