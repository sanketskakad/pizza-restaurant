<template>
  <div class="flex flex-col md:flex-row mt-20">
    <div class="w-1/2 m-auto md:m-0 md:w-1/4">
      <div class="mb-4">
        Image Preview
        <img :src="menu.formData.imageUrl" class="w-full" />
      </div>
    </div>
    <div class="w-full md:w-3/4 ml-0 md:ml-10">
      <form @submit="(e) => e.preventDefault()">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="itemName"
          >
            Item Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="itemName"
            type="text"
            v-model="menu.formData.itemName"
            placeholder="Item Name"
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
            v-model="menu.formData.imageUrl"
            placeholder="Image url"
          />
        </div>

        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            v-model="menu.formData.description"
            placeholder="Description"
          />
        </div>
        <div class="mb-4">
          <label
            for="category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Category</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            v-model="menu.formData.category"
            placeholder="Category"
          />
          <!-- <select
            id="category"
            v-model="menu.formData.category"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected>Choose a category</option>
            <option v-for="category in menuStore.categories" :value="category">
              {{ category }}
            </option>
          </select> -->
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="basePrice"
          >
            Base Price
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="basePrice"
            v-model="menu.formData.basePrice"
            type="text"
            placeholder="Base Price"
          />
        </div>
        <div class="mb-4">
          <Accordion header="Sizes">
            <div class="flex flex-col mt-4 mb-4 bg-orange-50">
              <div
                class="flex mb-2"
                v-for="size in menu.formData.sizes"
                :key="size.name"
              >
                <div class="basis-5/12 ml-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="basePrice"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="basePrice"
                    v-model="size.name"
                    type="text"
                    placeholder="Base Price"
                  />
                </div>
                <div class="basis-5/12 ml-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="basePrice"
                  >
                    Extra price
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="basePrice"
                    v-model="size.extraPrice"
                    type="text"
                    placeholder="Base Price"
                  />
                </div>
                <div class="basis-2/12 flex ml-2 justify-center items-center">
                  <DeleteIcon
                    class="w-10"
                    @click="deleteSizes(size)"
                  ></DeleteIcon>
                </div>
              </div>
              <Button @click="() => addSizes()"> Add Sizes</Button>
            </div>
          </Accordion>
        </div>
        <div class="mb-4">
          <Accordion header="Extra Ingredients"
            ><div class="flex flex-col mb-4 mt-4 bg-orange-50">
              <div
                class="flex mb-2"
                v-for="Ingredient in menu.formData.extraIngredients"
              >
                <div class="basis-5/12 ml-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="basePrice"
                  >
                    Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="Ingredient.name"
                    type="text"
                    placeholder="Base Price"
                  />
                </div>
                <div class="basis-5/12 ml-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="basePrice"
                  >
                    Extra price
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="Ingredient.extraPrice"
                    type="text"
                    placeholder="Base Price"
                  />
                </div>
                <div class="basis-1/12 flex ml-2 justify-center items-center">
                  <DeleteIcon
                    class="w-10"
                    @click="() => deleteIngredients(Ingredient)"
                  ></DeleteIcon>
                </div>
              </div>
              <Button @click="() => addIngredients()"> Add Ingredients</Button>
            </div></Accordion
          >
        </div>
        <div class="mt-5 flex justify-evenly">
          <div class="basis-1/3">
            <Button @click="addProduct">
              {{ mode }}
            </Button>
          </div>
          <div v-if="id" class="basis-1/3">
            <Button type="button" variation="Secondary" @click="deleteProduct">
              Delete
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Menu } from '@/interfaces';
import Accordion from '@/components/Accordion.vue';
import { useMenus } from '@/store/MenuStore';
import { useRoute, useRouter } from 'vue-router';
import DeleteIcon from '@/components/icons/DeleteIcon.vue';
import Button from '@/components/Button.vue';
import { useUsers } from '@/store/UserStore';

const mode = ref<'Save' | 'Update'>('Save');

const menu = reactive<{ formData: Menu }>({
  formData: {
    imageUrl: '',
    itemName: '',
    description: '',
    category: '',
    basePrice: '',
    sizes: [
      { name: 'small', extraPrice: 2 },
      { name: 'large', extraPrice: 6 },
    ],
    extraIngredients: [
      { name: 'small', extraPrice: 2 },
      { name: 'large', extraPrice: 6 },
    ],
  },
});

const menuStore = useMenus();
const route = useRoute();
const router = useRouter();
const usersStore = useUsers();

const id = route.params.id as string;

if (!usersStore?.isAdmin) {
  router.push('/');
}

if (id) {
  const oldMenu = await menuStore.getMenuById(id);
  if (oldMenu) {
    menu.formData = oldMenu;
    mode.value = 'Update';
  } else {
    router.push('/404');
  }
}

const addProduct = () => {
  menuStore.addMenu(menu.formData);
  router.push('/profile/menu-list');
};

const deleteProduct = () => {
  menuStore.deleteMenu(id);
};

const deleteIngredients = (ingredient) => {
  menu.formData.extraIngredients = menu.formData.extraIngredients.filter(
    (el) => {
      return el.name !== ingredient.name;
    }
  );
};

const addIngredients = () => {
  menu.formData.extraIngredients = [
    ...menu.formData.extraIngredients,
    { name: '', extraPrice: 0 },
  ];
};

const addSizes = () => {
  menu.formData.sizes = [...menu.formData.sizes, { name: '', extraPrice: 0 }];
};

const deleteSizes = (sizes) => {
  menu.formData.sizes = menu.formData.sizes.filter((el) => {
    return el.name !== sizes.name;
  });
};
</script>
<style scoped></style>
