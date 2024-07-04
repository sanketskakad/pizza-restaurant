<template>
  <div class="mt-5 text-orange-500 text-4xl text-center">Cart</div>
  <div class="flex flex-col md:justify-evenly md:flex-row mr-4">
    <div class="w-full md:w-5/12">
      <div>
        <div class="mt-5">
          <div class="bg-orange-100 mt-3">
            <table
              class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-16 py-3">
                    <span class="sr-only">Image</span>
                  </th>
                  <th scope="col" class="px-6 py-3">Product</th>
                  <th scope="col" class="px-6 py-3">Qty</th>
                  <th scope="col" class="px-6 py-3">Price</th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <CartCard
                  v-for="(item, index) in userStore.users.cart.items"
                  :item="item"
                  @click="deleteItem(item, index)"
                  class="mt-5"
                />
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="ml-4 md:ml-0 w-full md:w-5/12 bg-orange-50 p-5">
      <form @submit="updateProfile">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Full Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            v-model="userStore.users.name"
            placeholder="Full Name"
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
            v-model="userStore.users.email"
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
            v-model="userStore.users.phone"
            placeholder="Contact Number"
          />
          <!-- <select
            id="category"
            v-model="userStore.users.category"
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
            v-model="userStore.users.streetAddress"
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
            v-model="userStore.users.city"
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
            v-model="userStore.users.postalCode"
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
            v-model="userStore.users.country"
            type="text"
            placeholder="Country"
          />
        </div>

        <div class="mt-5">
          <Button
            @click="orderNow"
            :disabled="!!userStore.users"
            class="mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            Order Now
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue';
import CartCard from '@/components/CartCard.vue';
import { useUsers } from '@/store/UserStore';
import { useRouter } from 'vue-router';

const userStore = useUsers();
const router = useRouter();

const updateProfile = () => {};
if (!userStore.users) {
  router.push('/login');
}

const orderNow = () => {};

const deleteItem = (item, index) => {
  userStore.updateCart(item._id, 0, index);
};
</script>
<style scoped></style>
